import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/Constants";
import { auth } from "../utils/FireBase";
import { useEffect } from "react";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
      return () => unsubscribe();
    });
  }, []);
  return (
    <div className="absolute w-screen px-5 py-2 bg-gradient-to-b from-black z-10">
      <img className=" w-[30vw] md:w-52" src={LOGO} alt="NETFLIX-LOGO" />
    </div>
  );
};

export default Header;
