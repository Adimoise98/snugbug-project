import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { ShopContext } from "../context/ShopContext";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("collections")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="fixed top-28 w-full left-0 right-0 z-40  border-t-0 border-b-0 bg-transparent text-center">
      <div className="inline-flex items-center justify-center border-4  border-lime-700/50 font-extrabold px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          className="flex-1 outline-none bg-inherit text-base"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search"
        />
        <FaSearch className="w-6" />
      </div>

      <ImCross
        onClick={() => setShowSearch(false)}
        className="inline w-6 cursor-pointer font-extrabold text-lime-950"
      />
    </div>
  ) : null;
};

export default SearchBar;
