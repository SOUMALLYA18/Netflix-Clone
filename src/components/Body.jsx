import Login from "../components/Login";
import Browse from "../components/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./WatchPage";
import TVShowBrowse from "./TVShowBrowse";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movies/:id",
      element: <WatchPage />,
    },
    {
      path: "/tvshowsbrowse",
      element: <TVShowBrowse />,
    },
  ]);
  return (
    <div className="w-screen h-screen">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
