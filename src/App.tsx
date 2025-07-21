import { PageProps, getDefaultPageProps } from "./demo/stackoptions";
import { StackPage } from "./demo/stackpage";
import { useLayoutStore } from "./demo/api";
import { useState } from "react";

import { ComponentMap } from "../lib";
import { ComponentProps } from "./demo/stackoptions";
import Image from "./widgets/Image";

const defaultPageProps: PageProps = getDefaultPageProps();

function App() {
  const [pageProps, setPageProps] = useState<PageProps>(defaultPageProps);
  const [pageid, setPageId] = useState(pageProps.id);

  const { getPageById, savePage } = useLayoutStore();

  const saveLayout = async (pageid: string, pageProps: PageProps) => {
    setPageProps(pageProps);
    await savePage(pageProps);
  };

  const loadLayout = async (pageid: string): Promise<PageProps> => {
    const currentPage: any = await getPageById(pageid);
    if (currentPage !== false) {
      setPageProps(currentPage as PageProps);
    }
    return pageProps;
  };

  const getNewComponentMap = (): ComponentMap => {
    return { Image };
  };

  const getNewComponentProps = (): ComponentProps => {
    return {
      Image: {
        src: "https://dnicugzydez8x.cloudfront.net/2025/03/aws-service-6.png",
        title: "This is Image",
      },
    };
  };

  return (
    <>
      <StackPage
        pageid={pageid}
        pageMode="edit"
        onSaveLayout={saveLayout}
        onLoadLayout={loadLayout}
        onGetComponentMap={getNewComponentMap}
        onGetComponentProps={getNewComponentProps}
      />
      {/* <GridStackDemo/> */}
    </>
  );
}

export default App;
