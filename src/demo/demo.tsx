import { ComponentProps, useEffect, useState } from "react";
import { GridStackOptions, GridStackWidget } from "gridstack";
import {
  ComponentDataType,
  ComponentMap,
  GridStackProvider,
  GridStackRender,
  GridStackRenderProvider,
  useGridStackContext,
} from "../../lib";

import "gridstack/dist/gridstack.css";
import "./demo.css";
import Counter from "../widgets/Counter";
import Image from "../widgets/Image";

const CELL_HEIGHT = 50;
const BREAKPOINTS = [
  { c: 1, w: 700 },
  { c: 3, w: 850 },
  { c: 6, w: 950 },
  { c: 8, w: 1100 },
];

function Text({ content }: { content: string }) {
  return <div className="w-full h-full">{content}</div>;
} 

const COMPONENT_MAP: ComponentMap = {
  Text,
  Counter,
  Image,
};

// Initial grid options
const gridOptions: GridStackOptions = {
  acceptWidgets: true,
  columnOpts: {
    breakpointForWindow: true,
    breakpoints: BREAKPOINTS,
    layout: "moveScale",
    columnMax: 12,
  },
  margin: 8,
  cellHeight: CELL_HEIGHT,
  subGridOpts: {
    acceptWidgets: true,
    columnOpts: {
      breakpoints: BREAKPOINTS,
      layout: "moveScale",
    },
    margin: 8,
    minRow: 2,
    cellHeight: CELL_HEIGHT,
  },
  children: [
    {
      id: "item1",
      h: 2,
      w: 2,
      x: 0,
      y: 0,
      content: JSON.stringify({
        name: "Text",
        props: { content: "Item 1" },
      }),
    },
    {
      id: "item2",
      h: 2,
      w: 2,
      x: 2,
      y: 0,
      content: JSON.stringify({
        name: "Text",
        props: { content: "Item 2" },
      }),
    },
    {
      id: "counter1",
      w: 3,
      h: 2,
      x: 4,
      y: 0,
      content: JSON.stringify({
        name: "Counter",
        props: { initialCount: 5 }
      })
    },
    {
      id: "image1",
      w: 4,
      h: 3,
      x: 0,
      y: 8,
      content: JSON.stringify({
        name: "Image",
        props: { src: "https://dnicugzydez8x.cloudfront.net/2025/03/aws-service-6.png " }
      })
    },
    {
      id: "sub-grid-1",
      h: 5,
      sizeToContent: true,
      subGridOpts: {
        acceptWidgets: true,
        cellHeight: CELL_HEIGHT,
        alwaysShowResizeHandle: false,
        column: "auto",
        minRow: 2,
        layout: "list",
        margin: 8,
        children: [
          {
            id: "sub-grid-1-title",
            locked: true,
            noMove: true,
            noResize: true,
            w: 12,
            x: 0,
            y: 0,
            content: JSON.stringify({
              name: "Text",
              props: { content: "Sub Grid 1 Title" },
            }),
          },
          {
            id: "item3",
            h: 2,
            w: 2,
            x: 0,
            y: 1,
            content: JSON.stringify({
              name: "Text",
              props: { content: "Item 3" },
            }),
          },
          {
            id: "item4",
            h: 2,
            w: 2,
            x: 2,
            y: 0,
            content: JSON.stringify({
              name: "Text",
              props: { content: "Item 4" },
            }),
          },
        ],
      },
      w: 12,
      x: 0,
      y: 2,
    },
  ],
};

export function GridStackDemo() {
  const [resetKey, setResetKey] = useState(0);
  const [initialOptions, setInitialOptions] = useState<GridStackOptions>(gridOptions);

   const loadLayout = (pageName?: string): GridStackOptions => {
    try {
      const savedLayout = localStorage.getItem(pageName || 'gridstack-layout');
      return savedLayout ? JSON.parse(savedLayout) : gridOptions;
    } catch (error) {
      console.error('Failed to load layout:', error);
      return gridOptions;
    }
  };

  // Save layout to localStorage
  const saveLayout = (layout: GridStackOptions | GridStackWidget[] | undefined) => {
    if (layout) {
      localStorage.setItem('gridstack-layout', JSON.stringify(layout));
    }
  };

  // Reload layout to default
  const handleReloadLayout = (pageName?: string) => {
    const gridOptions = loadLayout(pageName);
    setInitialOptions(gridOptions);
    setResetKey(prev => prev + 1); // Force remount
  };

  const handleClearLayout = () => {
    setInitialOptions(gridOptions);
    setResetKey(prev => prev + 1); // Force remount
  };

  return (
    <GridStackProvider key={resetKey} initialOptions={initialOptions}>
      <Toolbar 
        onSaveLayout={saveLayout} 
        onReloadLayout={handleReloadLayout} 
        onClearLayout={handleClearLayout}
      />

      <GridStackRenderProvider>
        <GridStackRender componentMap={COMPONENT_MAP} />
      </GridStackRenderProvider> 

      {/* <DebugInfo /> */}
    </GridStackProvider>
  );
}

function Toolbar({ 
  onSaveLayout, 
  onReloadLayout,
  onClearLayout, 
}: { 
  onSaveLayout: (layout: GridStackOptions | GridStackWidget[] | undefined) => void;
  onReloadLayout: (pageName?: string) => void;
  onClearLayout: () => void;
}) {
  const { addWidget, addSubGrid, saveOptions } = useGridStackContext();

  const handleSaveLayout = () => {
    const layout = saveOptions();
    onSaveLayout(layout);
    alert('Layout saved to localStorage!');
  };

  const handleLoadLayout = () => {
    onReloadLayout();
    alert('Layout loaded from localStorage!');
  };

  const handleClearLayout = () => {
    onClearLayout();
    alert('Layout cleared!');
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
        display: "flex",
        flexDirection: "row",
        gap: "10px",
      }}
    >
      <button
        onClick={() => {
          addWidget((id) => ({
            w: 2,
            h: 2,
            x: 0,
            y: 0,
            content: JSON.stringify({
              name: "Text",
              props: { content: id },
            }),
          }));
        }}
      >
        Add Text (2x2)
      </button>

      <button
        onClick={() => {
          addWidget((id) => ({
            w: 3, 
            h: 2,
            content: JSON.stringify({
              name: "Counter",
              props: { initialCount: 0 }
            })
          }));
        }}
      >
        Add Counter (3x2)
      </button>

      {/* Add Image button */}
      <button
        onClick={() => {
          addWidget((id) => ({
            w: 4,
            h: 3,
            content: JSON.stringify({
              name: "Image",
              props: { 
                src: "https://dnicugzydez8x.cloudfront.net/2025/03/aws-service-6.png "
              }
            })
          }));
        }}
      >
        Add Image (4x3)
      </button>

      <button
        onClick={() => {
          addSubGrid((id, withWidget) => ({
            h: 5,
            noResize: false,
            sizeToContent: true,
            subGridOpts: {
              acceptWidgets: true,
              columnOpts: { breakpoints: BREAKPOINTS, layout: "moveScale" },
              margin: 8,
              minRow: 2,
              cellHeight: CELL_HEIGHT,
              children: [
                withWidget({
                  h: 1,
                  locked: true,
                  noMove: true,
                  noResize: true,
                  w: 12,
                  x: 0,
                  y: 0,
                  content: JSON.stringify({
                    name: "Text",
                    props: { content: "Sub Grid 1 Title" + id },
                  }),
                }),
              ],
            },
            w: 12,
            x: 0,
            y: 0,
          }));
        }}
      >
        Add Sub Grid (12x1)
      </button>

      <button onClick={handleSaveLayout}>
        Save Layout
      </button>
      
      <button onClick={handleLoadLayout}>
        Load Layout
      </button>

      <button onClick={handleClearLayout}>
        Reset to Default
      </button>
    </div>
  );
}

function DebugInfo() {
  const { initialOptions, saveOptions } = useGridStackContext();

  const [realtimeOptions, setRealtimeOptions] = useState<
    GridStackOptions | GridStackWidget[] | undefined
  >(undefined);

  useEffect(() => {
    const timer = setInterval(() => {
      if (saveOptions) {
        const data = saveOptions();
        setRealtimeOptions(data);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [saveOptions]);

  return (
    <div>
      <h2>Debug Info</h2>
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <div>
          <h3>Initial Options</h3>
          <pre
            style={{
              backgroundColor: "#f3f4f6",
              padding: "1rem",
              borderRadius: "0.25rem",
              overflow: "auto",
            }}
          >
            {JSON.stringify(initialOptions, null, 2)}
          </pre>
        </div>
        <div>
          <h3>Realtime Options (2s refresh)</h3>
          <pre
            style={{
              backgroundColor: "#f3f4f6",
              padding: "1rem",
              borderRadius: "0.25rem",
              overflow: "auto",
            }}
          >
            {JSON.stringify(realtimeOptions, null, 2)}
          </pre>
        </div>
      </div>      
    </div>
  );
}
