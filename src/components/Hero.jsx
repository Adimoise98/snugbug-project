import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import ShopNowButton from "./ShopNowButton";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row pt-32 ">
      {/**HERO LEFT SIDE */}
      <img
        className="relative w-full sm:w-1/2 flex flex-col gap-9 "
        src={assets.hero_img}
        alt=""
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 87%, transparent 100%)",
        }}
      />

      {/**Hero Right Side */}

      <div className="w-full ml-10 sm:mb-16 sm:w-1/2 flex items-start  justify-center py-10 ">
        <div className="text-lime-800 flex flex-col items-start">
          <div className="flex items-center gap-2">
            <p className="hidden md:block w-8 md:w-11 h-[6px] bg-lime-700"></p>
            <p className="hidden md:block text-sm md:text-3xl lg:py-12 text-lime-700 font-extrabold">
              FOR HOODIE LOVERS ONLY
            </p>
          </div>
          <h1 className="text-3xl hidden lg:block sm:py-3 lg:text-9xl leading-relaxed text-[#b2d12e] permanent-marker-regular text-shadow-black font-outline-3">
            FRESHES
            <span className="permanent-marker-regular text-shadow-black font-outline-3 overflow-hidden">
              T S
            </span>
            TASH
          </h1>
          <Link to="/collections">
            <div className="flex items-center sm:mt-12">
              <ShopNowButton />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
