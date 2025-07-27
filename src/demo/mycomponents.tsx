import { ComponentMap } from "../lib";
import { ComponentProps } from "../components/stackoptions";

import Image from "../widgets/Image";

const useComponentProvider = () => {
  const getNewComponentMap = (): ComponentMap => {
    return {
      Image,

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
          <div className="flex items-center justify-center min-h-[64px] w-full overflow-x-scroll rounded-lg p-2 lg:overflow-visible">
            <div className="relative min-w-[140px] w-full max-w-[384px] aspect-square">
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
        src: "https://dnicugzydez8x.cloudfront.net/2025/03/aws-service-6.png",
        title: "This is Image",
      },

      ImageBlurred: {
        src: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        content: "Growth",
        date: "20 July 2022",
        author: "Sara Lamalo",
        alt: "Nature Image",
      },

      ImageCircle: {
        src: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        alt: "Circle Image",
      },

      SimpleCard: {
        src: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        content: `Growth is not just about numbers, it's about the journey. and the people we meet along the way. life is a journey, not a destination. experience is the best teacher.
           Growth is not just about numbers, it's about the journey. and the people we meet along the way. life is a journey, not a destination. experience is the best teacher.
           Growth is not just about numbers, it's about the journey. and the people we meet along the way. life is a journey, not a destination. experience is the best teacher.`,
        date: "20 July 2022",
        author: "Ai Dabo",
        caption: "This think item",
      },
    };
  };

  return { getNewComponentMap, getNewComponentProps };
};

export { useComponentProvider };
