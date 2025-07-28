import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import { 
  Divider, 
  Button,
  Fab,
  useMediaQuery,
  useTheme,
  Badge,
  Chip
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import { ComponentMap, useGridStackContext } from "..";
import { subGridOptions, ComponentProps } from "./stackoptions";

export default function GridStackToolbar({
  componentMap,
  componentProps,
}: {
  componentMap: ComponentMap;
  componentProps: ComponentProps;
}) {
  const [value, setValue] = React.useState("widget");
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);
  const { addWidget, addSubGrid } = useGridStackContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
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

  const handleSelectWidget = (key: string) => {
    setSelectedKeys(prev => 
      prev.includes(key) 
        ? prev.filter(k => k !== key) 
        : [...prev, key]
    );
  };

  const handleAddSelected = () => {
    selectedKeys.forEach(key => {
      if (key === "SubGrid") {
        addSubGrid((_id) => ({
          h: 3,
          w: 12,
          x: 0,
          y: 0,
          ...subGridOptions,
        }));
      } else {
        const widgetId = uuidv4();
        addWidget((_id) => ({
          h: 4,
          w: 4,
          x: 0,
          y: 0,
          id: widgetId,
          sizeToContent: true,
          content: JSON.stringify({
            name: key,
            props: componentProps[key],
          }),
        }));
      }
    });
    setSelectedKeys([]);
  };

  const getButtonLabel = () => {
    if (selectedKeys.length === 0) return "Add Widgets";
    if (selectedKeys.length === 1) return `Add ${selectedKeys[0]}`;
    return `Add ${selectedKeys.length} Widgets`;
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", position: "relative", pb: isMobile ? 8 : 0 }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="tablist">
            <Tab label="Widget" value="widget" />
            <Tab label="Properties" value="properties" />
          </TabList>
        </Box>

        <TabPanel
          value="widget"
          className="sidepanel"
          sx={{
            overflowX: "auto",
            maxWidth: "100%",
            padding: { xs: 1, sm: 2 },
          }}
        >
          {/* Selection Counter */}
          {selectedKeys.length > 0 && (
            <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
              <Chip 
                label={`${selectedKeys.length} selected`} 
                color="primary" 
                size="small"
                sx={{ mr: 1 }}
              />
              <Button 
                size="small" 
                variant="text"
                onClick={() => setSelectedKeys([])}
              >
                Clear
              </Button>
            </Box>
          )}
          
          {/* SubGrid Card */}
          <Box 
            component="section" 
            sx={{ 
              p: 2, 
              border: "1px dashed grey",
              backgroundColor: selectedKeys.includes("SubGrid") 
                ? "action.selected" 
                : "background.paper",
              cursor: "pointer",
              position: "relative",
              mb: 2
            }}
            onClick={() => handleSelectWidget("SubGrid")}
          >
            <div
              className="grid-stack-item grid-stack-item-widget"
              draggable
              onDragStart={(e) => handleDragStart(e, "SubGrid")}
              onDragEnd={handleDragEnd}
              data-gs-type="SubGrid"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ 
                  position: "absolute", 
                  top: 4, 
                  right: 4,
                  visibility: selectedKeys.includes("SubGrid") ? "visible" : "hidden"
                }}>
                  <CheckIcon color="success" />
                </div>
                <div>SubGrid</div>
              </div>
            </div>
          </Box>
          
          <Divider sx={{ my: 2 }} />
          
          {/* Widget Grid */}
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Array.from(Object.keys(componentMap)).map((key, index) => (
              <Grid size={{ xs: 2, sm: 4, md: 4 }} key={index}>
                <Box
                  component="section"
                  sx={{ 
                    p: 2, 
                    border: "1px dashed grey",
                    backgroundColor: selectedKeys.includes(key) 
                      ? "action.selected" 
                      : "background.paper",
                    cursor: "pointer",
                    position: "relative"
                  }}
                  onClick={() => handleSelectWidget(key)}
                >
                  <div
                    className="grid-stack-item grid-stack-item-widget"
                    draggable
                    onDragStart={(e) => handleDragStart(e, key)}
                    onDragEnd={handleDragEnd}
                    data-gs-type={key}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <div style={{ 
                      position: "absolute", 
                      top: 4, 
                      right: 4,
                      visibility: selectedKeys.includes(key) ? "visible" : "hidden"
                    }}>
                      <CheckIcon color="success" />
                    </div>
                    <div
                      style={{
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                        textAlign: "center"
                      }}
                    >
                      {key}
                    </div>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value="properties">Item Two</TabPanel>
      </TabContext>
      
      {/* Floating Add Button */}
      {selectedKeys.length > 0 && (
        isMobile ? (
          <Fab
            color="primary"
            aria-label="add"
            onClick={handleAddSelected}
            sx={{
              position: "fixed",
              bottom: 16,
              right: 16,
              zIndex: 1000
            }}
          >
            <Badge 
              badgeContent={selectedKeys.length} 
              color="secondary"
              overlap="circular"
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <AddIcon />
            </Badge>
          </Fab>
        ) : (
          <Button
            variant="contained"
            color="primary"
            startIcon={
              <Badge 
                badgeContent={selectedKeys.length} 
                color="secondary"
                overlap="circular"
                sx={{ mr: 1 }}
              >
                <AddIcon />
              </Badge>
            }
            onClick={handleAddSelected}
            sx={{
              position: "absolute",
              bottom: 16,
              right: 16,
              zIndex: 1000
            }}
          >
            {getButtonLabel()}
          </Button>
        )
      )}
    </Box>
  );
}