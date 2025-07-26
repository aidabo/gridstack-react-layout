import { GridStackOptions, GridStackWidget } from "gridstack";
import { v4 as uuidv4 } from "uuid";
import { ComponentMap } from "../lib";
import Text from "./Text"

const CELL_HEIGHT = "2rem"; //32px;

const BREAKPOINTS = [
      //{ c: 1, w: 300 },   // 1 column on screens < 300px
      { c: 1, w: 500 },   // 2 columns between 300px - 500px
      { c: 3, w: 800 },   // 4 columns between 500px - 800px
      { c: 6, w: 1024 },  // 6 columns between 800px - 1024px
      //{ c: 8, w: 1200 },  // 8 columns on screens > 1200px
];

// Initial grid options
export const gridOptions: GridStackOptions = {
  acceptWidgets: true,
  removable: "#trash",
  sizeToContent: true,
  minRow: 5,
  columnOpts: {
    breakpointForWindow: true,
    breakpoints: BREAKPOINTS,
    layout: "moveScale",
    columnMax: 12,
  },
  margin: 5,
  cellHeight: CELL_HEIGHT,

  subGridOpts: {
    acceptWidgets: true,
    removable: "#trash",
    columnOpts: {
      breakpoints: BREAKPOINTS,
      layout: "moveScale",
    },
    margin: 5,
    minRow: 1,
    cellHeight: CELL_HEIGHT,
  },
  children: [],
};

export const subGridOptions: GridStackOptions = {
  acceptWidgets: true,
  removable: "#trash",
  sizeToContent: true,
  subGridOpts: {
    acceptWidgets: true,
    removable: "#trash",
    columnOpts: {
      breakpoints: BREAKPOINTS,
      layout: "moveScale",
    },
    margin: 5,
    minRow: 3,
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
  pageOptions?: any
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
  Text: { content: `This is a Text component providing text dynamically and render it in page.`, title: "This is Text" },
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





