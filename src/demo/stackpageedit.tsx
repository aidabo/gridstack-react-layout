import StackPage from "../components/stackpage";
import { useParams, useNavigate } from "react-router-dom";
import {
  PageProps,
  SaveLayoutFn,
  LoadLayoutFn,
  GoBackListFn,
} from "../components/stackoptions";
import { useLayoutStore } from "./api";
import { useComponentProvider } from "./mycomponents";
import { useState } from "react";

export default function StackPageEdit(props: {mode: string}) {
  const { pageid } = useParams<{ pageid: string }>();
  const [currentPageid, setCurrentPageid] = useState(pageid || "");

  const { getPageById, savePage } = useLayoutStore();
  const { getNewComponentMap, getNewComponentProps } = useComponentProvider();
  const navigate = useNavigate();

  const saveLayout: SaveLayoutFn = async (
    pageid: string,
    pageProps: PageProps
  ) => {
    await savePage(pageProps);
    if(pageid !== pageProps.id) {
      navigate(`/edit/${pageProps.id}`);
    }
  };

  const loadLayout: LoadLayoutFn = async (
    pageid: string
  ): Promise<PageProps> => {
    setCurrentPageid(pageid);
    const page: any = await getPageById(pageid);
    if (page === false) {
      console.log("new page created: " + pageid);
    }
    return page;
  };

  const gobackList: GoBackListFn = () => {
    navigate("/");
  };

  return (
    <>
      <StackPage
        pageid={currentPageid as any}
        pageMode={props.mode as any}
        onSaveLayout={saveLayout}
        onLoadLayout={loadLayout}
        componentMapProvider={getNewComponentMap}
        componentPropsProvider={getNewComponentProps}
        gobackList={gobackList}
      />
    </>
  );
}
