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

export function GridStackRender(props: { componentMap: ComponentMap, hiddenHeader?: boolean }) {
  const { _rawWidgetMetaMap } = useGridStackContext();
  const { getWidgetContainer } = useGridStackRenderContext();

  return (
    <>
      {Array.from(_rawWidgetMetaMap.value.entries()).map(([id, meta]) => {
        const componentData = parseWeightMetaToComponentData(meta);
        const WidgetComponent = props.componentMap[componentData.name];
        const widgetContainer = getWidgetContainer(id);

        if (!widgetContainer) return null;

        const title = (componentData.props as any)?.title || `Widget ${id.slice(0,4)}`;

        return (
          <GridStackWidgetContext.Provider key={id} value={{ widget: { id } }}>
            {createPortal(
              <div className="w-full h-full flex flex-col">
                {/* Header row with title and menu */}
                {!props.hiddenHeader && (
                <div className="widget-header flex items-center justify-between bg-gray-100 border-b px-2 py-1 min-h-[36px]">
                  <div className="font-medium truncate text-sm px-6">{title}</div>                  
                  <GridStackItemMenu widgetId={id} />
                </div>
                )}
                
                {/* Widget content area */}
                <div className="flex-1 min-h-0 relative">
                  <WidgetComponent {...componentData.props} />                  
                </div>
              </div>,
              widgetContainer
            )}
          </GridStackWidgetContext.Provider>
        );
      })}
    </>
  );
}