
# Page builder and Layout builder

A page builder or grid layout builder based on GradStack.js that provides full React control over component layout, loading and saving, and provides callback functions for adding custom components by dragging or clicking.

<!-- TOC -->

- [Page builder or Layout builder](#page-builder-or-layout-builder)
    - [Demo project](#demo-project)
    - [Basic Usage](#basic-usage)
        - [Create your project](#create-your-project)
        - [install gridstack.js](#install-gridstackjs)
        - [install gridstack-page](#install-gridstack-page)
    - [Prepare API and custom components for loading and saving page.](#prepare-api-and-custom-components-for-loading-and-saving-page)
        - [Create API functions used to save and load pages as following api.ts.](#create-api-functions-used-to-save-and-load-pages-as-following-apits)
        - [Create your custom react components as widget to add layout.](#create-your-custom-react-components-as-widget-to-add-layout)
        - [Add stackpage page builder as following.](#add-stackpage-page-builder-as-following)

<!-- /TOC -->


## Demo project 

https://github.com/aidabo/gridstack-page-builder

Following API, custom components, callback function samples all in demo project.

## Basic Usage

### Create your project

### install `gridstack.js`  

`npm i gridstack` or `yarn add gridstack`

### install `gridstack-page`  

`npm i gridstack-page` or `yarn add gridstack-page`

## Prepare API and custom components for loading and saving page.


### Create API functions used to save and load pages as following `api.ts`.  

You can just use `localStorage` of browser or `json server` , the `demo` uses `json server`.


```js
import { PageProps } from "gridstack-page"

const webApiUrl = "/api"

const apiJsonHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export { apiJsonHeaders, webApiUrl}

export const useLayoutStore = () => {
  const dataUrl = `${webApiUrl}/pages`;

  async function getPageList(): Promise<PageProps[] | boolean> {
    try {
      const response = await fetch(`${dataUrl}`,{
        method: "GET",
        headers: apiJsonHeaders,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = (await response.json()) as PageProps[];
      return data;
    } catch {
      //console.error("fetchPageList error:", error);
      return false;
    }
  }

  async function getPageById(pageId: string): Promise<PageProps | boolean> {
    try {
      const response = await fetch(`${dataUrl}/${pageId}`,{
        method: "GET",
        headers: apiJsonHeaders,
      });
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = (await response.json()) as PageProps;
      return data;
    } catch (error) {
      console.error("getPageById error:", error);
      return false;
    }
  }

  async function exists(pageId: string): Promise<boolean> {
    const result = await getPageById(pageId);
    return result != null && result !== false;
  }

  async function savePage(data: PageProps): Promise<PageProps | boolean> {
    if (!(await exists(data.id))) {
      return await insertPage(data);
    } else {
      return await updatePage(data);
    }
  }

  async function insertPage(data: PageProps): Promise<PageProps | boolean> {
    try {
      const response = await fetch(`${dataUrl}`, {
        method: "POST",
        headers: apiJsonHeaders,
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = (await response.json()) as PageProps;
      return result;
    } catch (error) {
      console.error("insertPage error:", error);
      return false;
    }
  }

  async function updatePage(data: PageProps): Promise<PageProps | boolean> {
    try {
      const response = await fetch(`${dataUrl}/${data.id}`, {
        method: "PUT",
        headers: apiJsonHeaders,
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = (await response.json()) as PageProps;
      return result;
    } catch (error) {
      console.error("updatePage error:", error);
      return false;
    }
  }

  async function deletePage(pageId: string): Promise<PageProps | boolean> {
    try {
      const response = await fetch(`${dataUrl}/${pageId}`, {
        method: "DELETE",
        headers: apiJsonHeaders,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = (await response.json()) as PageProps;
      return result;
    } catch (error) {
      console.error("deletePage error:", error);
      return false;
    }
  }
```

### Create your custom react components as widget to add layout.

Following create custom component `Image` `ImageBlurred`, `ImageCircle`, `SimpleCard`

```js
import { ComponentMap } from "gridstack-page";
import { ComponentProps } from "gridstack-page";

const useComponentProvider = () => {
  
  const getNewComponentMap = (): ComponentMap => {

    return {
      Image: function Image({ src, title }: { src: string; title?: string }) {
        return (
          <div className="flex items-center justify-center p-0">
            <img
              onClick={() => alert(title || "this is a image")}
              src={src}
              alt="Widget"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        );
      },

      ImageBlurred: ({
        src,
        content,
        date,
        author,
        alt,
      }: {
        src: string;
        content?: string;
        date?: string;
        author?: string;
        alt?: string;
      }) => {
        return (
          <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-2 lg:overflow-visible">
            <figure className="relative w-full h-full min-h-[140px]">
              <img
                className="object-cover object-center w-full h-full rounded-xl"
                src={src}
                alt={alt ? alt : "Image"}
              />
              <figcaption
                className="absolute bottom-4 left-2/4 flex w-[calc(100%-2rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/50 py-2 px-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm text-sm
          sm:bottom-6 sm:w-[calc(100%-4rem)] sm:py-3 sm:px-4 sm:text-base
          md:bottom-8 md:py-4 md:px-6 md:text-xl"
              >
                <div>
                  <h5 className="font-medium text-slate-800">{author}</h5>
                  <p className="mt-1 text-slate-600">{date}</p>
                </div>
                <h5 className="font-medium text-slate-800">{content}</h5>
              </figcaption>
            </figure>
          </div>
        );
      },

      ImageCircle: ({ src, alt }: { src: string; alt?: string }) => {
        return (
          <div className="flex items-center justify-center min-h-[32px] w-full overflow-x-scroll rounded-lg p-2 lg:overflow-visible">
            <div className="relative min-w-[128px] w-full max-w-[384px] aspect-square">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src={src}
                  alt={alt || "Image"}
                />
              </div>
            </div>
          </div>
        );
      },

      SimpleCard: ({
        src,
        content,
        caption,
        author,
        date,
      }: {
        src: string;
        content: string;
        caption?: string;
        author?: string;
        date?: string;
      }) => {
        return (
          <a
            href="#"
            className="resize overflow-auto min-w-[200px] min-h-[200px] max-w-full max-h-[90vh] border border-gray-200 rounded-lg shadow-sm bg-white hover:bg-gray-100 dark:border-gray-400 dark:bg-slate-200 dark:hover:bg-slate-400 flex flex-col md:flex-row items-center md:items-stretch"
            style={{ resize: "both" }}
          >
            {/* Image Section */}
            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-48">
              <img
                src={src}
                alt=""
                className="object-cover w-full md:w-48 h-auto md:h-full rounded-t-lg md:rounded-t-none md:rounded-l-lg"
                style={{ objectFit: "cover", maxHeight: "100%" }}
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-between p-4 w-full h-full overflow-auto">
              <div className="flex flex-col h-full">
                <blockquote className="flex-1 overflow-auto">
                  <p className="text-sm sm:text-base font-medium break-words text-left">
                    {content}
                  </p>
                </blockquote>
                <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-sky-500 dark:text-sky-400 font-medium text-sm sm:text-base truncate">
                    {caption || "This is a simple card"}
                  </div>
                  <div className="text-slate-700 dark:text-slate-500 text-xs sm:text-sm truncate">
                    {author} {date}
                  </div>
                </div>
              </div>
            </div>
          </a>
        );
      },
    };
  };

  const getNewComponentProps = (): ComponentProps => {
    return {
      Image: {
        src: "https://dnicugzydez8x.cloudfront.net/60-think-prd/2025/07/image-26.png",
        title: "This is Image",
      },

      ImageBlurred: {
        src: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        content: "Growth",
        date: "20 July 2022",
        author: "Sara Lamalo",
        alt: "Nature Image",
        title: "This is ImageBlurred",
      },

      ImageCircle: {
        src: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        alt: "Circle Image",
        title: "This is ImageCircle",
      },

      SimpleCard: {
        src: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        content: `Growth is not just about numbers, it's about the journey. and the people we meet along the way. life is a journey, not a destination. experience is the best teacher.
           Growth is not just about numbers, it's about the journey. and the people we meet along the way. life is a journey, not a destination. experience is the best teacher.
           Growth is not just about numbers, it's about the journey. and the people we meet along the way. life is a journey, not a destination. experience is the best teacher.`,
        date: "20 July 2022",
        author: "Ai Dabo",
        caption: "This think item",
        title: "This is SimpleCard",
      },
    };
  };

  return { getNewComponentMap, getNewComponentProps };
};

export { useComponentProvider };

```

### Add `stackpage` page builder as following.

```js
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Here is lib import ----
import { StackPage } from "gridstack-page";
import {
  PageProps,
  SaveLayoutFn,
  LoadLayoutFn,
  GoBackListFn,
} from "gridstack-page";
import "gridstack-page/styles"


import { useLayoutStore } from "./api";
import { useComponentProvider } from "./my-components";

export default function StackPageEdit(props: {mode: string}) {
  const { pageid } = useParams<{ pageid: string }>();
  const [currentPageid, setCurrentPageid] = useState(pageid || "");

  const { getPageById, savePage } = useLayoutStore();
  const { getNewComponentMap, getNewComponentProps } = useComponentProvider();
  const navigate = useNavigate();

  // page save callback
  const saveLayout: SaveLayoutFn = async (
    pageid: string,
    pageProps: PageProps
  ) => {
    await savePage(pageProps);
    if(pageid !== pageProps.id) {
      navigate(`/edit/${pageProps.id}`);
    }
  };

// page load callback
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

  // page list return callback
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
        gobackList={gobackList}
        // can ignore
        componentMapProvider={getNewComponentMap}
        componentPropsProvider={getNewComponentProps}
      />
    </>
  );
}

```
