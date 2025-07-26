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

        const title =
          (componentData.props as any)?.title || `Widget ${id.slice(0, 4)}`;

        return (
          <GridStackWidgetContext.Provider key={id} value={{ widget: { id } }}>
            {/* Portal content must include a measurable container when showMenubar is true */}
            {createPortal(
              !props.showMenubar ? (
                // Case 1: No menu bar — just the component
                  <WidgetComponent {...componentData.props} />
              ) : (
                // Case 2: Show menu bar and structured layout
                <div className="gridstack-measured-container w-full h-auto flex flex-col">
                  {/* Header */}
                  <div className="widget-header flex items-center justify-between bg-gray-100 border-b px-2 py-1 min-h-[36px]">
                    <div className="font-medium truncate text-sm px-1">
                      {title}
                    </div>
                    <GridStackItemMenu widgetId={id} />
                  </div>

                  {/* Content container: must have measurable height */}
                  <div className="widget-body flex-1 min-h-[40px]">
                    <WidgetComponent {...componentData.props} />
                  </div>
                </div>
              ),
              widgetContainer
            )}
          </GridStackWidgetContext.Provider>
        );
      })}
    </>
  );
}
