import { ComponentType } from 'react';
import { GridStack } from 'gridstack';
import { GridStackOptions } from 'gridstack';
import { GridStackWidget } from 'gridstack';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { PropsWithChildren } from 'react';

export declare interface ComponentDataType<T = object> {
    name: string;
    props: T;
}

export declare type ComponentMap = Record<string, ComponentType<any>>;

export declare type ComponentMapProvider = () => ComponentMap;

export declare interface ComponentProps {
    [key: string]: any;
}

export declare type ComponentPropsProvider = () => Record<string, any>;

export declare type GoBackListFn = () => void;

declare interface GridStackDropEvent {
    name: string;
    id: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

declare type GridStackDropEventCallback = (event: GridStackDropEvent) => void;

export declare function GridStackProvider({ children, initialOptions, }: PropsWithChildren<{
    initialOptions: GridStackOptions;
}>): JSX_2.Element;

export declare function GridStackRender({ componentMap, showMenubar, }: {
    componentMap: ComponentMap;
    showMenubar?: boolean;
}): JSX_2.Element;

export declare function GridStackRenderProvider({ children, onGridStackDropEvent, }: PropsWithChildren<{
    onGridStackDropEvent?: GridStackDropEventCallback;
}>): JSX_2.Element;

export declare type LoadLayoutFn = (pageid: string) => Promise<PageProps>;

export declare interface PageProps {
    id: string;
    title: string;
    description?: string;
    image?: string;
    tag?: string;
    status?: string;
    pageOptions?: any;
    grids: GridStackOptions | GridStackWidget[] | undefined;
}

export declare type SaveLayoutFn = (pageid: string, pageProps: PageProps) => Promise<void>;

export declare function StackPage({ pageid, pageMode, onLoadLayout, onSaveLayout, componentMapProvider, componentPropsProvider, gobackList, }: {
    pageid: string;
    pageMode: "edit" | "read" | "preview";
    onLoadLayout: LoadLayoutFn;
    onSaveLayout?: SaveLayoutFn;
    componentMapProvider?: ComponentMapProvider;
    componentPropsProvider?: ComponentPropsProvider;
    gobackList: GoBackListFn;
}): JSX_2.Element;

export declare function useGridStackContext(): {
    initialOptions: GridStackOptions;
    gridStack: GridStack | null;
    addWidget: (fn: (id: string) => Omit<GridStackWidget, "id">) => void;
    removeWidget: (id: string) => void;
    addSubGrid: (fn: (id: string, withWidget: (w: Omit<GridStackWidget, "id">) => GridStackWidget) => Omit<GridStackWidget, "id">) => void;
    saveOptions: () => GridStackOptions | GridStackWidget[] | undefined;
    _gridStack: {
        value: GridStack | null;
        set: React.Dispatch<React.SetStateAction<GridStack | null>>;
    };
    _rawWidgetMetaMap: {
        value: Map<string, GridStackWidget>;
        set: React.Dispatch<React.SetStateAction<Map<string, GridStackWidget>>>;
    };
};

export declare function useGridStackWidgetContext(): {
    widget: {
        id: string;
    };
};

export { }
