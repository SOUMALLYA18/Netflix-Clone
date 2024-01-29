import Login from "../components/Login";
import Browse from "../components/Browse";
import WatchPage from "./WatchPage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TvShowsWatchPAge from "./TvShowWatchPage";
import MyList from "./MyList";
import TvShowBrowse from "../components/TvShowBrowse";

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
      path: "/tvshow",
      element: <TvShowBrowse />,
    },
    {
      path: "/tvshow/:id",
      element: <TvShowsWatchPAge />,
    },
    {
      path: "/mylist",
      element: <MyList />,
    },
  ]);

  return (
    <div className="w-screen h-screen">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
