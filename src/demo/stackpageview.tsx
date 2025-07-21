import StackPage from "../components/stackpage";
import { useParams, useNavigate } from "react-router-dom";
import {
  PageProps,
  LoadLayoutFn,
  GoBackListFn,
} from "../components/stackoptions";

import { useLayoutStore } from "./api";
import { useComponentProvider } from "./mycomponents";

export default function StackPageView() {
  const { pageid } = useParams<{ pageid: string }>();
  const { getPageById } = useLayoutStore();
  const { getNewComponentMap, getNewComponentProps } = useComponentProvider();
  const navigate = useNavigate();

  const loadLayout: LoadLayoutFn = async (
    pageid: string
  ): Promise<PageProps> => {
    const page: any = await getPageById(pageid);
    if (page === false) {
      throw new Error("No page found: " + pageid);
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
        pageMode="read"
        // onSaveLayout={saveLayout}
        onLoadLayout={loadLayout}
        componentMapProvider={getNewComponentMap}
        componentPropsProvider={getNewComponentProps}
        gobackList={gobackList}
      />
    </>
  );
}
