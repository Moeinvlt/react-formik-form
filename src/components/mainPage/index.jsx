import { NavLink } from "react-router";
import { FaShuttleSpace } from "react-icons/fa6";
import Stars from "../stars";

const MainPage = () => {
  return (
    <div className="bg-black w-full h-screen flex justify-center items-center bg-center relative">
      <Stars />
      <div className="relative w-[250px] md:w-[350px] h-[250px] md:h-[350px] border-white border-2 rounded-full flex flex-col justify-between items-center">
        <div>
          <NavLink
            to="/register"
            className={`relative z-[100] bg-[#FEB21A] w-[140px] h-[140px] flex
            justify-center items-center rounded-full font-bold text-[21px] text-white
            mt-[-50px] shadow-2xl shadow-yellow-500/50 hover:tracking-[0.3rem] transition-all duration-550`}
          >
            Register
          </NavLink>
        </div>

        <div className="md:mt-[13rem] mt-[6.5rem]">
          <div className="relative z-[100]">
            <div className="bg-[#5EABD6] w-[79px] h-[40px] absolute rotate-45 rounded-t-full z-30 top-2 left-3 pointer-events-none"></div>
            <NavLink
              to="/login"
              className={`bg-[#5EABD6] w-[80px] h-[80px] flex 
              justify-center items-center rounded-full font-bold 
              shadow-lg shadow-cyan-500/50 hover:tracking-[0.3rem] transition-all duration-550`}
            >
              <span className="relative z-40">Login</span>
            </NavLink>
            <div className="elipse"></div>
          </div>
        </div>

        <div className="orbit">
          <span className="rocket">
            <FaShuttleSpace />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
