import { GridStackOptions, GridStackWidget } from "gridstack";
import { PageProps, getDefaultPageProps } from "./demo/stackoptions";
import { StackPage } from "./demo/stackpage";
import { useLayoutStore } from "./demo/api";
import { useState } from "react";

const defaultPageProps: PageProps = getDefaultPageProps();

function App() {
  const [pageProps, setPageProps] = useState<PageProps>(defaultPageProps);
  const { getPageById, savePage } = useLayoutStore();

  const saveLayout = async (pageid: string, layout: any) => {
    if (layout && pageProps && pageProps.id === pageid) {
      pageProps.grids = layout;
      await savePage(pageProps);
    }
  };

  const loadLayout = async (
    pageid: string
  ): Promise<GridStackOptions | GridStackWidget[] | undefined> => {
    const currentPage = await getPageById(pageid);
    if(currentPage !== false){
      setPageProps(currentPage as PageProps);
    }
    return pageProps.grids;    
  };

  return (
    <>
      <StackPage
        pageMode="edit"
        pageProps={pageProps}
        onSaveLayout={saveLayout}
        onLoadLayout={loadLayout}
      />
      {/* <GridStackDemo/> */}
    </>
  );
}

export default App;
