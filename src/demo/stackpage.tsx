/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Fab from "@mui/material/Fab";

import AddIcon from "@mui/icons-material/Add";
import PreviewIcon from "@mui/icons-material/VisibilityOutlined";
import SaveIcon from "@mui/icons-material/SaveOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowBackIcon from "@mui/icons-material/KeyboardReturn";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import AutorenewIcon from "@mui/icons-material/Autorenew";

import GridStackToolbar from "./stacktoolbar";
import {
  ComponentMap,
  GridStackProvider,
  GridStackRender,
  GridStackRenderProvider,
} from "../../lib";
import { getComponentMap, getComponentProps } from "./stackcomponents";
import { GridStackOptions, GridStackWidget } from "gridstack";
import { gridOptions, subGridOptions, PageProps, ComponentProps } from "./stackoptions";

import StackActions, { StackActionsRef } from "./stackactions";
import DeleteDropZone from "./deletedropzone";
import { GridStackDropEvent } from "../../lib/grid-stack-render-provider";
import PageInfoDialogs from "./pageinfodialog";

import "./demo.css";

const drawerWidth = 360;

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "mode",
})<{
  open?: boolean;
  mode?: "read" | "edit" | "preview"; // Add pageMode prop
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth, // Default value
  position: "relative",
  variants: [
    {
      props: { open: true },
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
      },
    },
    {
      props: { mode: "read" },
      style: {
        marginRight: 0,
      },
    },
    {
      props: { mode: "preview" },
      style: {
        marginRight: 0,
      },
    },
  ],
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export function StackPage({
  pageMode,
  pageProps,
  onSaveLayout,
  onLoadLayout,
  onGetComponentMap,
  onGetComponentProps,
}: {
  pageMode: "edit" | "read" | "preview";
  pageProps: PageProps;
  onSaveLayout: (
    pageid: string,
    layout: GridStackOptions | GridStackWidget[] | undefined
  ) => void;
  onLoadLayout: (
    pageid: string
  ) => Promise<GridStackOptions | GridStackWidget[] | undefined>;
  onGetComponentMap?: () => ComponentMap;
  onGetComponentProps?: () => ComponentProps;
}) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(pageMode || "edit");
  const [pageid, setPageid] = useState(pageProps.id);

  const [resetKey, setResetKey] = useState(0);
  const [initialOptions, setInitialOptions] =
    useState<GridStackOptions>(gridOptions);
  const stackActionsRef = useRef<StackActionsRef>(null);

  const [dropEvent, setDropEvent] = useState<GridStackDropEvent>();
  const [showGridInfo, setShowGridInfo] = useState(false);
  const [currentLayout, setCurrentLayout] = useState<
    GridStackOptions | GridStackWidget[] | undefined
  >();
  const [hiddenHeader, setHiddenHeader] = useState(pageProps.hiddenWidgetHeader);

  const [actionFeedback, setActionFeedback] = useState({
    save: { show: false, message: "" },
    reload: { show: false, message: "" },
  });

  const showFeedback = (action: string, message: string) => {
    setActionFeedback((prev) => ({
      ...prev,
      [action]: { show: true, message },
    }));
    // Auto-hide after 3 seconds
    setTimeout(() => {
      setActionFeedback((prev: any) => ({
        ...prev,
        [action]: { ...prev[action], show: false },
      }));
    }, 3000);
  };

  useEffect(() => {}, [mode]);

  const isPageEditMode = () => {
    return mode === "edit";
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLoadLayout = async (pageid: string): Promise<any> => {
    console.log("handleLoadLayout: " + pageid);
    return (await onLoadLayout(pageid)) || gridOptions;
  };

  const handleSaveLayout = async () => {
    try {
      console.log("handleSaveLayout: " + pageid);
      const layout = stackActionsRef.current?.saveLayout();
      if (layout) {
        await onSaveLayout(pageid, layout);
        showFeedback("save", "Layout saved successfully!");
      }
    } catch (error) {
      showFeedback("save", "Failed to save layout!");
    }
  };

  const handleReloadLayout = async () => {
    try {
      const pageGridOptions = await handleLoadLayout(pageid);
      setInitialOptions(pageGridOptions);
      setResetKey((prev) => prev + 1); // Force remount
      showFeedback("reload", "Layout reloaded!");
    } catch (error) {
      showFeedback("reload", "Reload failed!");
    }
  };

  const handleClearLayout = async () => {
    setInitialOptions(gridOptions);
    setResetKey((prev) => prev + 1); // Force remount
  };

  const handleCreateLayout = () => {};

  const handleBack2List = () => {};

  const handleSwitchLayout = () => {
    if (mode === "edit") {
      setCurrentLayout(stackActionsRef.current?.saveLayout());
      setMode("preview");
    } else if (mode === "preview") {
      setInitialOptions(currentLayout as any);
      setResetKey((prev) => prev + 1);
      setMode("edit");
    }
  };

  const handleDropEvent = (event: GridStackDropEvent) => {
    setDropEvent(event);
  };

  const getPageInfo = () => {
    const pageInfo: PageProps = JSON.parse(JSON.stringify(pageProps));
    pageInfo.grids = stackActionsRef.current?.saveLayout();
    return pageInfo;
  };

  useEffect(() => {
    if (dropEvent && stackActionsRef.current) {
      if (dropEvent.name !== "SubGrid") {
        stackActionsRef.current.addWidget((_id) => ({
          ...dropEvent,
          content: JSON.stringify({
            name: dropEvent.name,
            props: getComponentProps(onGetComponentProps)[dropEvent.name],
          }),
        }));
      } else {
        stackActionsRef.current.addSubGrid((_id /*, withWidget: any*/) => ({
          h: 1,
          w: 12,
          x: 0,
          y: 0,
          ...subGridOptions,
        }));
      }
    }
  }, [dropEvent]);

  return (
    <GridStackProvider key={resetKey} initialOptions={initialOptions}>
      <Box sx={{ display: "flex" }}>
        {isPageEditMode() && <CssBaseline />}
        {isPageEditMode() && (
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                sx={{ flexGrow: 1 }}
                component="div"
              >
                Page Create
              </Typography>

              <Tooltip title="Create new page">
                <IconButton
                  color="inherit"
                  edge="end"
                  onClick={handleCreateLayout}
                >
                  <AddIcon />
                </IconButton>
              </Tooltip>

              <Snackbar
                open={Object.values(actionFeedback).some((a) => a.show)}
                autoHideDuration={3000}
                onClose={() =>
                  setActionFeedback({
                    save: { show: false, message: "" },
                    reload: { show: false, message: "" },
                  })
                }
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <Alert severity="info" sx={{ width: "100%" }}>
                  {Object.values(actionFeedback).find((a) => a.show)?.message ||
                    ""}
                </Alert>
              </Snackbar>

              <Tooltip title="Save page">
                <IconButton
                  color="inherit"
                  edge="end"
                  onClick={() => handleSaveLayout()}
                >
                  <SaveIcon sx={{ marginX: 1 }} />
                </IconButton>
              </Tooltip>

              <Tooltip
                title="Preview page"
                onClick={() => handleSwitchLayout()}
              >
                <IconButton color="inherit" edge="end">
                  <PreviewIcon sx={{ marginX: 1 }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="reload page" onClick={() => handleReloadLayout()}>
                <IconButton color="inherit" edge="end">
                  <AutorenewIcon sx={{ marginX: 1 }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Clear page">
                <IconButton
                  color="inherit"
                  edge="end"
                  onClick={handleClearLayout}
                >
                  <ClearIcon sx={{ marginX: 1 }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Page Info" onClick={() => setShowGridInfo(true)}>
                <IconButton color="inherit" edge="end">
                  <InfoOutlineIcon sx={{ marginX: 1 }} />
                </IconButton>
              </Tooltip>

              <Tooltip
                title="Back to page list"
                onClick={() => handleBack2List()}
              >
                <IconButton color="inherit" edge="end">
                  <ArrowBackIcon sx={{ marginLeft: 1, marginRight: 2 }} />
                </IconButton>
              </Tooltip>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={() => handleDrawerOpen()}
                sx={[open && { display: "none" }]}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        )}
        {mode === "preview" && (
          <Fab
            color="secondary"
            aria-label="edit"
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1200,
            }}
          >
            <EditIcon onClick={() => handleSwitchLayout()} />
          </Fab>
        )}
        <Main open={open} mode={mode}>
          {isPageEditMode() && <DrawerHeader></DrawerHeader>}
          <StackActions ref={stackActionsRef} />
          <GridStackRenderProvider onGridStackDropEvent={handleDropEvent}>
            <GridStackRender componentMap={getComponentMap(onGetComponentMap)} hiddenHeader={hiddenHeader} />
          </GridStackRenderProvider>
        </Main>
        {isPageEditMode() && (
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
              },
            }}
            variant="persistent"
            anchor="right"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={() => handleDrawerClose()}>
                {theme.direction === "rtl" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <DeleteDropZone onDropDelete={() => {}} />
            <Divider />
            <GridStackToolbar componentMap={getComponentMap(onGetComponentMap)} />
          </Drawer>
        )}
        <PageInfoDialogs
          isOpen={showGridInfo}
          pageInfo={getPageInfo()}
          resetOpenInfo={setShowGridInfo}
        />
      </Box>
    </GridStackProvider>
  );
}
