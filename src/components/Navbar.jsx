import { useEffect, useState } from "react";
import { LOGO, USER_AVATAR } from "../utils/Constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/FireBase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user?.displayName);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-5 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <div className="flex md:items-center md:gap-6 flex-col md:flex-row ">
        <img className=" w-[30vw] md:w-44" src={LOGO} alt="NETFLIX-LOGO" />
        <div className="link-wrapper text-center flex md:gap-5 md:text-[14px] gap-x-3.5 text-[3.5vw]">
          <Link
            to="/browse"
            className="cursor-pointer text-white hover:text-opacity-50 font-[sans-serif] leading-tight transition-colors duration-300"
          >
            Movies
          </Link>
          <Link
            to="/tvshow"
            className="cursor-pointer text-white hover:text-opacity-50 font-[sans-serif] leading-tight transition-colors duration-300"
          >
            TV Shows
          </Link>
          <Link
            to="/mylist"
            className="cursor-pointer text-white hover:text-opacity-50 font-[sans-serif] leading-tight transition-colors duration-300"
          >
            My List
          </Link>
        </div>
      </div>
      <div className="relative cursor-pointer" onClick={toggleDropdown}>
        <div className="flex items-center">
          <img
            className="md:w-10 w-7 h-7 md:h-10 rounded-lg"
            src={USER_AVATAR}
            alt="user-avatar"
          />
          <span
            className={`text-white transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          >
            <IoMdArrowDropdown size={20} />
          </span>
        </div>
        {isDropdownOpen && (
          <div className="absolute md:top-[7vh] top-[6vh] right-[2vw] md:right-[1vw] bg-[#0D0B06] md:w-[15vw]  flex  flex-col transition-opacity  duration-300 rounded-md">
            <span className="flex items-center md:gap-2 gap-0 p-3">
              <img
                className="md:w-8 w-5 h-5 md:h-8 md:rounded-lg"
                src={USER_AVATAR}
                alt="user-logo"
              />
              <h3 className="text-[#e5e5e5] text-sm  whitespace-nowrap m-2">
                {user}
              </h3>
            </span>
            <span className="text-center p-4">
              <button
                onClick={handleSignOut}
                className="text-[#e5e5e5] text-center whitespace-nowrap text-sm leading-tight transition-colors duration-300 hover:underline focus:underline "
              >
                Sign Out of Netflix
              </button>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
