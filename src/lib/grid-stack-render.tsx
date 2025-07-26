import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useGridStackContext } from "./grid-stack-context";
import { useGridStackRenderContext } from "./grid-stack-render-context";
import { GridStackWidgetContext } from "./grid-stack-widget-context";
import { GridStackWidget } from "gridstack";
import { ComponentType } from "react";
import { GridStackItemMenu } from "./grid-stack-Item-menu";

export interface ComponentDataType<T = object> {
  name: string;
  props: T;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentMap = Record<string, ComponentType<any>>;

function parseWeightMetaToComponentData(
  meta: GridStackWidget
): ComponentDataType & { error: unknown } {
  let error = null;
  let name = "";
  let props = {};
  try {
    if (meta.content) {
      const result = JSON.parse(meta.content) as {
        name: string;
        props: object;
      };
      name = result.name;
      props = result.props;
    }
  } catch (e) {
    error = e;
  }
  return {
    name,
    props,
    error,
  };
}

export function GridStackWidgetRenderer({
  id,
  meta,
  WidgetComponent,
  widgetContainer,
  showMenubar,
}: {
  id: string;
  meta: GridStackWidget;
  WidgetComponent: ComponentType<any>;
  widgetContainer: HTMLElement;
  showMenubar?: boolean;
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const componentData = parseWeightMetaToComponentData(meta);

  const title =
    (componentData.props as any)?.title || `Widget ${id.slice(0, 4)}`;

  // Trigger resizeToContent after mount
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const el = widgetContainer.closest(".grid-stack-item");
    if (!el || !(el as any).gridstackNode?.grid || !wrapper) return;

    const observer = new ResizeObserver(() => {
      (el as any).gridstackNode.grid.resizeToContent(el);
    });

    observer.observe(wrapper);
    (el as any).gridstackNode.grid.resizeToContent(el); // initial

    return () => observer.disconnect();
  }, [widgetContainer]);

  const content = (
    <div
      ref={wrapperRef}
      className="gridstack-measured-container"
      style={{ width: "100%" }}
    >
      {showMenubar && (
        <div className="widget-header flex items-center justify-between bg-gray-100 border-b px-2 min-h-[36px]">
          <div className="font-medium truncate text-sm px-1">{title}</div>
          <GridStackItemMenu widgetId={id} />
        </div>
      )}
      <div className="widget-body flex-1 min-h-[40px]">
        <WidgetComponent {...componentData.props} />
      </div>
    </div>
  );

  return (
    <GridStackWidgetContext.Provider value={{ widget: { id } }}>
      {createPortal(content, widgetContainer)}
    </GridStackWidgetContext.Provider>
  );
}

export function GridStackRender(props: {
  componentMap: ComponentMap;
  showMenubar?: boolean;
}) {
  const { _rawWidgetMetaMap } = useGridStackContext();
  const { getWidgetContainer } = useGridStackRenderContext();

  return (
    <>
      {Array.from(_rawWidgetMetaMap.value.entries()).map(([id, meta]) => {
        const componentData = parseWeightMetaToComponentData(meta);
        const WidgetComponent = props.componentMap[componentData.name];
        const widgetContainer = getWidgetContainer(id);

        if (!widgetContainer || !WidgetComponent) return null;

        return (
          <GridStackWidgetRenderer
            key={id}
            id={id}
            meta={meta}
            WidgetComponent={WidgetComponent}
            widgetContainer={widgetContainer}
            showMenubar={props.showMenubar}
          />
        );
      })}
    </>
  );
}
