import { GridStackOptions, GridStackWidget } from "gridstack";
import { v4 as uuidv4 } from "uuid";

export const CELL_HEIGHT = 50;

export const BREAKPOINTS = [
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
  grids:  GridStackOptions | GridStackWidget[] | undefined;
}

export interface ComponentProps {
  [key: string]: any;
}

export const getDefaultPageProps = (): PageProps => {
  return {
    id: uuidv4(),
    title: "untitled page",
    grids: gridOptions
  }
};

