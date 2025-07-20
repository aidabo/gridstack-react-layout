import { useEffect, useState } from "react";
import { GridStackOptions, GridStackWidget } from "gridstack";
import {
  GridStackProvider,
  GridStackRender,
  GridStackRenderProvider,
  useGridStackContext,
} from "../../lib";

import "./demo.css";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { gridOptions, subGridOptions } from "./stackoptions";
import { getComponentMap } from "./stackcomponents";

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

  const handleShowLayoutInfo = () =>{

  }

  return (
    <GridStackProvider key={resetKey} initialOptions={initialOptions}>
      <Toolbar 
        onSaveLayout={saveLayout} 
        onReloadLayout={handleReloadLayout} 
        onClearLayout={handleClearLayout}
        onShowLayoutInfo={handleShowLayoutInfo}
      />

      <GridStackRenderProvider>
        <GridStackRender componentMap={getComponentMap()} />
      </GridStackRenderProvider> 

      {/* <DebugInfo /> */}
    </GridStackProvider>
  );
}

function Toolbar({ 
  onSaveLayout, 
  onReloadLayout,
  onClearLayout, 
  onShowLayoutInfo,
}: { 
  onSaveLayout: (layout: GridStackOptions | GridStackWidget[] | undefined) => void;
  onReloadLayout: (pageName?: string) => void;
  onClearLayout: () => void;
  onShowLayoutInfo: () =>void;
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

  const handleShowLayoutInfo = () =>{
    onShowLayoutInfo();
  }

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
        fontSize: "18px"
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
              props: { content: id, title: "This is a test" },
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
                src: "https://dnicugzydez8x.cloudfront.net/2025/03/aws-service-6.png"
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
            w: 12,
            x: 0,
            y: 0,
            ...subGridOptions
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

      <button onClick={handleShowLayoutInfo}>
        Show Page Layout Info
      </button>

      <div className=".trash" >
        <DeleteOutlineIcon style={{fontSize: "32px"}}/>
      </div>
    </div>
  );
}
