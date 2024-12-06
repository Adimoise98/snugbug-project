import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsCartFill } from "react-icons/bs";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  // ANIMATION
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.nav
      className={`fixed left-0 right-0 top-0 z-50 bg-zinc-950/0 py-3 transition-colors ${
        scrolled ? "bg-lime-950/20 backdrop-blur" : ""
      }`}
    >
      <div className="flex items-center justify-around px-12 font-medium">
        <Link to="/">
          <img src={assets.logo} className="w-48" alt="Logo" />
        </Link>

        <ul className="hidden sm:flex sm:px-6 gap-5 text-2xl text-lime-700">
          <NavLink
            to="/"
            className="flex flex-col items-center gap1 group relative py-2 transition-colors duration-[400ms] font-bold hover:text-lime-500"
          >
            <p>HOME</p>
            <hr className="absolute bottom-0 right-0 h-[5px] w-0 bg-lime-700 transition-all delay-200 duration-100 group-hover:w-full"></hr>
          </NavLink>
          <NavLink
            to="/collections"
            className="flex flex-col items-center gap1 group relative py-2 transition-colors duration-[400ms] font-bold hover:text-lime-500"
          >
            <p>COLLECTIONS</p>
            <hr className="absolute bottom-0 right-0 h-[5px] w-0 bg-lime-700 transition-all delay-200 duration-100 group-hover:w-full"></hr>
          </NavLink>
          <NavLink
            to="/about"
            className="flex flex-col items-center gap1 group relative py-2 transition-colors duration-[400ms] font-bold hover:text-lime-500"
          >
            <p>ABOUT</p>
            <hr className="absolute bottom-0 right-0 h-[5px] w-0 bg-lime-700 transition-all delay-200 duration-100 group-hover:w-full"></hr>
          </NavLink>
          <NavLink
            to="/contact"
            className="flex flex-col items-center gap1 group relative py-2 transition-colors duration-[400ms] font-bold hover:text-lime-500"
          >
            <p>CONTACT</p>
            <hr className="absolute bottom-0 right-0 h-[5px] w-0 bg-lime-700 transition-all delay-200 duration-100 group-hover:w-full"></hr>
          </NavLink>
        </ul>

        <div className="flex items-center gap-8">
          <FaSearch
            onClick={() => setShowSearch(true)}
            className="h-7 w-7 fill-lime-700 cursor-pointer"
          />
          <div className="group relative">
            <Link to="/login">
              <RiAccountCircleLine className="h-10 w-10 fill-lime-700 cursor-pointer" />
            </Link>
          </div>

          <Link to="/cart" className="relative">
            <BsCartFill className="h-8 w-8 fill-lime-700" />

            <p className="absolute right-[-8px] bottom-[-6px] w-6 text-center leading-6 bg-lime-800 text-white aspect-square rounded-full text-[12px]">
              {getCartCount()}
            </p>
          </Link>
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-8 cursor-pointer sm:hidden"
            alt="Menu"
          />
        </div>

        {visible && (
          <div className="fixed top-0 right-0 left-0 flex flex-col items-center gap-16 h-screen w-full text-extrabold bg-[#b1d02b] text-lime-950 z-50">
            {/* Menu content */}
            <div className="flex items-center pt-6">
              <p
                onClick={() => setVisible(false)}
                className="text-3xl font-bold"
              >
                GO BACK
              </p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 text-3xl font-bold pt-12 border-t-2 border-black w-3/4 text-center"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 text-3xl font-bold"
              to="/collections"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 text-3xl font-bold"
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 text-3xl font-bold"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
