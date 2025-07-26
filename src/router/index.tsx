import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageList from "../demo/pagelist";
import StackPageEdit from "../demo/stackpageedit";

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
        element: <StackPageEdit mode="edit" />,
      },
      {
        path: "view/:pageid",
        element: <StackPageEdit mode="read" />,
      },
    ],
  },
]);
