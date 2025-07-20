import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import { Divider, IconButton } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import { ComponentMap, useGridStackContext } from "../../lib";
import { getComponentProps } from "./stackcomponents";
import { subGridOptions } from "./stackoptions";

export default function GridStackToolbar({
  componentMap,
}: {
  componentMap: ComponentMap;
}) {
  const [value, setValue] = React.useState("widget");
  const { addWidget, addSubGrid } = useGridStackContext();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // Handle drag start event
  const handleDragStart = (e: React.DragEvent, key: string) => {
    e.dataTransfer.setData("text/plain", key);
    (e.target as HTMLElement).style.opacity = "0.4";
  };

  const handleDragEnd = (e: React.DragEvent) => {
    (e.target as HTMLElement).style.opacity = "1";
  };

  const handleAddWidget = (key: string) => {
    const widgetId = uuidv4();
    addWidget((_id) => ({
      h: 4,
      w: 4,
      x: 0,
      y: 0,
      id: widgetId,
      content: JSON.stringify({
        name: key,
        props: getComponentProps()[key],
      }),
    }));
  };

  const handleAddSubGrid = () => {
    addSubGrid((_id/*, withWidget*/) => ({
      h: 1,
      w: 12,
      x: 0,
      y: 0,
      ...subGridOptions,
    }));
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="tablist">
            <Tab label="Widget" value="widget" />
            <Tab label="Properties" value="properties" />
          </TabList>
        </Box>
        <TabPanel value="widget" className="sidepanel">
          <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
            <div
              className="grid-stack-item grid-stack-item-widget"
              draggable
              onDragStart={(e) => handleDragStart(e, "SubGrid")}
              onDragEnd={handleDragEnd}
              data-gs-type="SubGrid"
              style={{
                cursor: "move",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <IconButton color="inherit" onClick={() => handleAddSubGrid()}>
                  <AddIcon />
                </IconButton>
              </div>
              <div>SubGrid</div>
            </div>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Array.from(Object.keys(componentMap)).map((key, index) => (
              <Grid size={{ xs: 2, sm: 4, md: 4 }} key={index}>
                <Box
                  component="section"
                  sx={{ p: 2, border: "1px dashed grey" }}
                >
                  <div
                    className="grid-stack-item grid-stack-item-widget"
                    draggable
                    onDragStart={(e) => handleDragStart(e, key)}
                    onDragEnd={handleDragEnd}
                    data-gs-type={key}
                    style={{
                      cursor: "move",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <IconButton
                        color="inherit"
                        onClick={() => handleAddWidget(key)}
                      >
                        <AddIcon />
                      </IconButton>
                    </div>
                    <div>{key}</div>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value="properties">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
}
