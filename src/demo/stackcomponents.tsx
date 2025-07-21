import { ComponentMap } from "../../lib";
import { ComponentProps } from "./stackoptions"

import Text from "../widgets/Text"
import Counter from "../widgets/Counter";

const defaultComponentProps: ComponentProps =  {
  Text: { content: "", title: "This is Text" },
  Counter: { initialCount: 0, title: "This is Counter"},
}

const defaultComponents: ComponentMap = {  
  Text,
  Counter,
};

export const getComponentMap = (fn?: () => ComponentMap): ComponentMap => {
  if (fn) {
    const customMap = fn();
    // Merge with custom keys overriding defaults
    return { ...defaultComponents, ...customMap };
  }
  return defaultComponents;
};

export const getComponentProps = (fn?: () => object): ComponentProps => {
  if (fn) {
    const customObject = fn();
    // Merge with custom keys overriding defaults
    return { ...defaultComponentProps, ...customObject };
  }
  return defaultComponentProps;
};




