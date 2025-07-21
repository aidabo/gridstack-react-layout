import { GridStackOptions, GridStackWidget } from "gridstack";
import { v4 as uuidv4 } from "uuid";
import { ComponentMap } from "../../lib";
import Text from "./Text"

const CELL_HEIGHT = 50;

const BREAKPOINTS = [
  { c: 1, w: 700 },
  { c: 3, w: 850 },
  { c: 6, w: 950 },
  { c: 8, w: 1100 },
];

// Initial grid options
export const gridOptions: GridStackOptions = {
  acceptWidgets: true,
  removable: "#trash",
  minRow: 1,
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
    minRow: 3,
    cellHeight: CELL_HEIGHT,
  },
  children: [],
};

export const subGridOptions: GridStackOptions = {
  acceptWidgets: true,
  removable: "#trash",
  //sizeToContent: true,
  subGridOpts: {
    acceptWidgets: true,
    columnOpts: {
      breakpoints: BREAKPOINTS,
      layout: "moveScale",
    },
    margin: 8,
    minRow: 1,
    cellHeight: CELL_HEIGHT,
    children: [],
  },
  children: [],
};


export interface PageProps {
  id: string;
  title: string;
  description?: string;
  image?: string;
  tag?: string;
  status?: string;
  hiddenWidgetHeader?: boolean,
  pageControl?: any
  grids:  GridStackOptions | GridStackWidget[] | undefined;
}

export interface ComponentProps {
  [key: string]: any;
}

export const getDefaultPageProps = (): PageProps => {
  return {
    id: `page-${uuidv4()}`,
    title: "untitled page",
    grids: gridOptions
  }
};

const defaultComponentProps: ComponentProps =  {
  Text: { content: "", title: "This is Text" },
  Counter: { initialCount: 0, title: "This is Counter"},
}

const defaultComponents: ComponentMap = {  
  Text,
};

export type ComponentMapProvider = () => ComponentMap;
export type ComponentPropsProvider = () => Record<string, any>;

export const getComponentMap = (fn?: ComponentMapProvider): ComponentMap => {
  if (fn) {
    const customMap = fn();
    // Merge with custom keys overriding defaults
    return { ...defaultComponents, ...customMap };
  }
  return defaultComponents;
};

export const getComponentProps = (fn?: ComponentPropsProvider): ComponentProps => {
  if (fn) {
    const customObject = fn();
    // Merge with custom keys overriding defaults
    return { ...defaultComponentProps, ...customObject };
  }
  return defaultComponentProps;
};

export type SaveLayoutFn = (pageid: string, pageProps: PageProps) => Promise<void>;
export type LoadLayoutFn = (pageid: string) => Promise<PageProps>;
export type GoBackListFn = () => void;





