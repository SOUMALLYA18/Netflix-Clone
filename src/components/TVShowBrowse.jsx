import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";

const TvShowBrowse = () => {
  const user = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default TvShowBrowse;
