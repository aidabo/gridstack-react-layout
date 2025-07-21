import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageList from "../demo/pagelist";
import StackPageEdit from "../demo/stackpageedit";
import StackPageView from "../demo/stackpageview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <PageList />,
      },
      {
        path: "edit/:pageid?",
        element: <StackPageEdit />,
      },
      {
        path: "view/:pageid",
        element: <StackPageView />,
      },
    ],
  },
]);
