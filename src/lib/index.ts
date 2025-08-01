import { GridStackProvider } from "./grid-stack-provider";
import { GridStackRenderProvider } from "./grid-stack-render-provider";
import {
  GridStackRender,
  ComponentDataType,
  ComponentMap,
} from "./grid-stack-render";
import { useGridStackContext } from "./grid-stack-context";
import { useGridStackWidgetContext } from "./grid-stack-widget-context";

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

//export { default as styles } from './styles/index.css';
