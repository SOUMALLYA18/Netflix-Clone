import { LOGO } from "../utils/Constants";

const Navbar = () => {
  return (
    <div className="absolute w-screen px-5 py-2 bg-gradient-to-b from-black z-10">
      <img className=" w-[30vw] md:w-52" src={LOGO} alt="NETFLIX-LOGO" />
    </div>
  );
};

export default Navbar;
