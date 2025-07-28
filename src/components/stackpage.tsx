/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, useRef, useCallback } from "react";
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
import useMediaQuery from "@mui/material/useMediaQuery";

import AddIcon from "@mui/icons-material/Add";
import PreviewIcon from "@mui/icons-material/VisibilityOutlined";
import SaveIcon from "@mui/icons-material/SaveOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowBackIcon from "@mui/icons-material/KeyboardReturn";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import AutorenewIcon from "@mui/icons-material/Autorenew";

import GridStackToolbar from "./stacktoolbar";
import {
  GridStackProvider,
  GridStackRender,
  GridStackRenderProvider,
} from "..";
import { GridStackOptions } from "gridstack";
import {
  gridOptions,
  subGridOptions,
  PageProps,
  getDefaultPageProps,
  getComponentMap,
  getComponentProps,
  ComponentMapProvider,
  ComponentPropsProvider,
  GoBackListFn,
  LoadLayoutFn,
  SaveLayoutFn,
} from "./stackoptions";

import StackActions, { StackActionsRef } from "./stackactions";
import DeleteDropZone from "./deletedropzone";
import { GridStackDropEvent } from "../lib/grid-stack-render-provider";
import PageInfoDialogs from "./pageinfodialog";

import "../styles/index.css";

const drawerWidth = 360;

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "mode",
})<{
  open?: boolean;
  mode?: "read" | "edit" | "preview";
}>(({ theme, open, mode }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  position: "relative",

  // Default transitions for all modes
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  // Only apply desktop drawer behavior in edit mode
  ...(mode === "edit" &&
    open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),

  // Reset margin for non-edit modes and mobile
  marginRight: 0,
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

export default function StackPage({
  pageid,
  pageMode,
  onLoadLayout,
  onSaveLayout,
  componentMapProvider,
  componentPropsProvider,
  gobackList,
}: {
  pageid: string;
  pageMode: "edit" | "read" | "preview";
  onLoadLayout: LoadLayoutFn; //(pageid: string) => Promise<PageProps>;
  onSaveLayout?: SaveLayoutFn; //(pageid: string, pageProps: PageProps) => void;
  componentMapProvider?: ComponentMapProvider;
  componentPropsProvider?: ComponentPropsProvider;
  gobackList: GoBackListFn; //() => void
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Correct hook
  const responsiveDrawerWidth = isMobile ? "100%" : drawerWidth; // Dynamic width

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(pageMode || "edit");
  const [pageProps, setPageProps] = useState<PageProps>(getDefaultPageProps());

  const [resetKey, setResetKey] = useState(0);
  const [initialOptions, setInitialOptions] =
    useState<GridStackOptions>(gridOptions);
  const stackActionsRef = useRef<StackActionsRef>(null);

  const [dropEvent, setDropEvent] = useState<GridStackDropEvent>();
  const [showGridInfo, setShowGridInfo] = useState(false);
  const [showMenubar /*setShowMenubar*/] = useState(true);

  const [actionFeedback, setActionFeedback] = useState({
    save: { show: false, message: "" },
    reload: { show: false, message: "" },
  });

  const showFeedback = useCallback(
    (action: string, message: string) => {
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
      }, 2000);
    },
    [setActionFeedback]
  );

  const isPageEditMode = () => {
    return mode === "edit";
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLoadLayout = useCallback(async (pageid: string): Promise<any> => {
    const pageProps = (await onLoadLayout(pageid)) || getDefaultPageProps();
    setPageProps(pageProps);
    return pageProps.grids;
  }, [onLoadLayout]);

  const handleReloadLayout = useCallback(async () => {
    try {
      const gridOptions = await handleLoadLayout(pageid);
      setInitialOptions(gridOptions);
      setResetKey((prev) => prev + 1); // Force remount
      showFeedback("reload", "Layout reloaded!");
    } catch (error) {
      showFeedback("reload", "Reload failed!");
    }
  },[pageid, handleLoadLayout, showFeedback]);

  useEffect(() => {
    if (pageid) {
      const fetchPage = async () => {
        try {
          await handleReloadLayout();
        } catch (error) {
          console.error("Failed to fetch pages:", error);
        }
      };
      fetchPage();
    } else {
      setPageProps(getDefaultPageProps());
    }
  }, [pageid, handleReloadLayout]);

  const handleSaveLayout = async (message?: string) => {
    try {
      if (onSaveLayout) {
        const layout = stackActionsRef.current?.saveLayout();
        if (layout) {
          pageProps.grids = layout;
          console.log("Saving layout:", pageProps.id, pageid);
          await onSaveLayout(pageid, pageProps);
          showFeedback("save", message || "Layout saved successfully!");
        }
      }
    } catch (error) {
      showFeedback("save", "Failed to save layout!");
    }
  };

  const handleClearLayout = async () => {
    setInitialOptions(gridOptions);
    setResetKey((prev) => prev + 1); // Force remount
  };

  const handleCreateLayout = async() => {
    await handleClearLayout();
    setPageProps(getDefaultPageProps());
    await handleSaveLayout("New page created!");
  };

  const handleBackToList = () => {
    if (gobackList) {
      gobackList();
    }
  };

  const handlerSwitchMode = (newMode: "edit" | "read" | "preview") => {
    setMode(newMode);
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
          sizeToContent: true, // Ensure the widget is sized to its content
          content: JSON.stringify({
            name: dropEvent.name,
            props: getComponentProps(componentPropsProvider)[dropEvent.name],
          }),
        }));
      } else {
        stackActionsRef.current.addSubGrid((_id /*, withWidget: any*/) => ({
          h: 4,
          w: 12,
          x: 0,
          y: 0,
          ...subGridOptions,
        }));
      }
    }
  }, [dropEvent, componentPropsProvider]);

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
                {pageProps.title || "Untitled Page"}
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
                onClick={() => handlerSwitchMode("preview")}
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
                onClick={() => handleBackToList()}
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
            <EditIcon onClick={() => handlerSwitchMode("edit")} />
          </Fab>
        )}
        <Main
          open={open}
          mode={mode}
          sx={{
            padding: 0.5,
            marginRight:
              mode === "edit" && !isMobile && !open ? `-${drawerWidth}px` : 0,
          }}
          className={`grid-stack-mode-${mode}`}
        >
          {isPageEditMode() && <DrawerHeader></DrawerHeader>}
          <StackActions ref={stackActionsRef} />
          <GridStackRenderProvider onGridStackDropEvent={handleDropEvent}>
            <GridStackRender
              componentMap={getComponentMap(componentMapProvider)}
              showMenubar={showMenubar}
            />
          </GridStackRenderProvider>
        </Main>
        {isPageEditMode() && (
          <Drawer
            sx={{
              // On mobile: full width when open, hidden when closed
              // On desktop: fixed width always 'unset'
              width: isMobile ? (open ? "unset" : 0) : drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: responsiveDrawerWidth,
                boxSizing: "border-box",
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
            <GridStackToolbar
              componentMap={getComponentMap(componentMapProvider)}
              componentProps={getComponentProps(componentPropsProvider)}
            />
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
