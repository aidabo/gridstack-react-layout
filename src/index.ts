import { GridStackProvider } from "./lib/grid-stack-provider";
import { GridStackRenderProvider } from "./lib/grid-stack-render-provider";
import {
  GridStackRender,
  ComponentDataType,
  ComponentMap,
} from "./lib/grid-stack-render";
import { useGridStackContext } from "./lib/grid-stack-context";
import { useGridStackWidgetContext } from "./lib/grid-stack-widget-context";

export {
  GridStackProvider,
  GridStackRenderProvider,
  GridStackRender,
  type ComponentDataType,
  type ComponentMap,
  useGridStackContext,
  useGridStackWidgetContext,
};

import StackPage from "./components/stackpage"
import {    
  ComponentProps,
  PageProps,
  ComponentMapProvider, 
  ComponentPropsProvider,
  GoBackListFn,
  LoadLayoutFn,
  SaveLayoutFn
} from "./components/stackoptions";

export {
    StackPage,
    type PageProps,
    type ComponentProps,
    type ComponentMapProvider,
    type ComponentPropsProvider,
    type GoBackListFn,
    type LoadLayoutFn,
    type SaveLayoutFn
};


