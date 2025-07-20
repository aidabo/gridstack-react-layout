import { ComponentMap } from "../../lib";
import { ComponentProps } from "./stackoptions"

import Text from "../widgets/Text"
import Counter from "../widgets/Counter";
import Image from "../widgets/Image";

export const getComponentMap = (fn?: () => ComponentMap): ComponentMap => {
  if (fn) {
    const customMap = fn();
    // Merge with custom keys overriding defaults
    return { ...defaultComponents, ...customMap };
  }
  return defaultComponents;
};

export const getComponentProps = (fn?: () => object): CompProps => {
  if (fn) {
    const customObject = fn();
    // Merge with custom keys overriding defaults
    return { ...defaultComponentProps, ...customObject };
  }
  return defaultComponentProps;
};


const defaultComponents: ComponentMap = {  
  Text,
  Counter,
  Image,
};

const defaultComponentProps: ComponentProps =  {
  Text: { content: "", title: "This is Text" },
  Counter: { initialCount: 0, title: "This is Counter"},
  Image: {src: "https://dnicugzydez8x.cloudfront.net/2025/03/aws-service-6.png", title: "This is Image"},
}

