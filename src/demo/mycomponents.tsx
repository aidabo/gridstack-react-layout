import { ComponentMap } from "../../lib";
import { ComponentProps } from "../components/stackoptions";

import Image from "../widgets/Image";
import Counter from "../widgets/Counter";

const useComponentProvider = () => {
  const getNewComponentMap = (): ComponentMap => {
    return {
      Image,
      Counter, 
      CustomWidget: ({theme, layout}) => <div>Custom Widget: {theme}, {layout}</div>     
    };
  };

  const getNewComponentProps = (): ComponentProps => {
    return {
      Image: {
        src: "https://dnicugzydez8x.cloudfront.net/2025/03/aws-service-6.png",
        title: "This is Image",
      },
      Counter: { initialCount: 0, title: "This is Counter" },
      CustomWidget: {theme: "dark", layout: "grid"}
    };
  };

  return { getNewComponentMap, getNewComponentProps };
};

export { useComponentProvider };
