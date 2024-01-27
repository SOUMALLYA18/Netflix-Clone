import Login from "../components/Login";
import Browse from "../components/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./WatchPage";
import TvShowBrowse from "./TvShowBrowse";

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
      path: "/tvshow",
      element: <TvShowBrowse />,
    },
    {
      path: "/movies/:id",
      element: <WatchPage />,
    },
  ]);
  return (
    <div className="w-screen h-screen">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
