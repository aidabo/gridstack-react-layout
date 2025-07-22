import {
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { useGridStackContext } from "./grid-stack-context";
import { GridStack, GridStackOptions, GridStackWidget } from "gridstack";
import { GridStackRenderContext } from "./grid-stack-render-context";
import isEqual from "react-fast-compare";
import { v4 as uuidv4 } from "uuid";

export interface GridStackDropEvent {
  name: string;
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export type GridStackDropEventCallback = (event: GridStackDropEvent) => void;

export function GridStackRenderProvider(
  { 
    children, 
    onGridStackDropEvent
  }:  PropsWithChildren<{ onGridStackDropEvent?: GridStackDropEventCallback }>) {
  const {
    _gridStack: { value: gridStack, set: setGridStack },
    initialOptions,
  } = useGridStackContext();

  const widgetContainersRef = useRef<Map<string, HTMLElement>>(new Map());
  const containerRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<GridStackOptions>(initialOptions);

  const renderCBFn = useCallback(
    (element: HTMLElement, widget: GridStackWidget) => {
      if (widget.id) {
        widgetContainersRef.current.set(widget.id, element);
      }
    },
    []
  );

  const initGrid = useCallback(() => {
    if (containerRef.current) {
      GridStack.renderCB = renderCBFn;

      const grid = GridStack.init(optionsRef.current, containerRef.current);

      // Enable drag-and-drop from external sources
      GridStack.setupDragIn(".grid-stack-item-widget", {
        appendTo: "body",
        helper: "clone",
        scroll: false
      });

      // grid.on('added removed change', function(event, items) {
      //   let str = '';
      //   items.forEach(function(item) { str += ' (' + item.x + ',' + item.y + ' ' + item.w + 'x' + item.h + ')'; });
      //   console.log((items[0].grid.opts.id) + ' ' + event.type + ' ' + items.length + ' items (x,y w h):' + str );
      // })
      // grid.on('removed', function(event, items) {
      //   items.forEach(function(item) { 
      //     //grid.removeWidget((item as any)?.el, true)
      //     //console.log((item as any)?.el);
      //   });        
      // })
      grid.on('dropped', function(_event, _previousNode, newNode) {
        if (newNode) {
          // Remove the node that gridstack added
          const el: any = newNode.el;
          const type: string = el.dataset.gsType;
          if (type && onGridStackDropEvent) {
              const dropEvent: GridStackDropEvent = { 
                name: type, 
                id: uuidv4(),
                x: newNode.x || 0,    
                y: newNode.y || 0,
                w: 4, 
                h: 4 
              }
              //console.log("drop event", dropEvent);
              onGridStackDropEvent(dropEvent);
          }
          grid.removeWidget(el, true);
        }

      })

      return grid;
    }

    return null;
  }, [renderCBFn, onGridStackDropEvent]);

  useLayoutEffect(() => {
    if (!isEqual(initialOptions, optionsRef.current) && gridStack) {
      try {
        gridStack.removeAll(false);
        gridStack.destroy(false);
        widgetContainersRef.current.clear();
        optionsRef.current = initialOptions;
        setGridStack(initGrid());
      } catch (e) {
        console.error("Error reinitializing gridstack", e);
      }
    }
  }, [initialOptions, gridStack, initGrid, setGridStack]);

  useLayoutEffect(() => {
    if (!gridStack) {
      try {
        setGridStack(initGrid());
      } catch (e) {
        console.error("Error initializing gridstack", e);
      }
    }
  }, [gridStack, initGrid, setGridStack]);

  return (
    <GridStackRenderContext.Provider
      value={useMemo(
        () => ({
          getWidgetContainer: (widgetId: string) => {
            return widgetContainersRef.current.get(widgetId) || null;
          },
        }),
        // ! gridStack is required to reinitialize the grid when the options change
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [gridStack]
      )}
    >
      <div ref={containerRef}>{gridStack ? children : null}</div>
    </GridStackRenderContext.Provider>
  );
}
