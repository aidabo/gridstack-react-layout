import StackPage from "../components/stackpage";
import { useParams, useNavigate } from "react-router-dom";
import {
  PageProps,
  getDefaultPageProps,
  SaveLayoutFn,
  LoadLayoutFn,
  GoBackListFn,
} from "../components/stackoptions";
import { useLayoutStore } from "./api";
import { useComponentProvider } from "./mycomponents";

export default function StackPageEdit() {
  const { pageid } = useParams<{ pageid: string }>();
  const { getPageById, savePage } = useLayoutStore();
  const { getNewComponentMap, getNewComponentProps } = useComponentProvider();
  const navigate = useNavigate();

  const saveLayout: SaveLayoutFn = async (
    pageid: string,
    pageProps: PageProps
  ) => {
    if (pageid != pageProps.id) {
      throw Error("Error for page saving!");
    }
    await savePage(pageProps);
  };

  const loadLayout: LoadLayoutFn = async (
    pageid: string
  ): Promise<PageProps> => {
    let page: any = await getPageById(pageid);
    if (page === false) {
      page = getDefaultPageProps();
    }
    return page;
  };

  const gobackList: GoBackListFn = () => {
    navigate("/");
  };

  return (
    <>
      <StackPage
        pageid={pageid as any}
        pageMode="edit"
        onSaveLayout={saveLayout}
        onLoadLayout={loadLayout}
        componentMapProvider={getNewComponentMap}
        componentPropsProvider={getNewComponentProps}
        gobackList={gobackList}
      />
    </>
  );
}
