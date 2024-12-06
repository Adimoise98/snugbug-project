import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

import { IoIosArrowDropdown } from "react-icons/io";

import ProductItem from "../components/ProductItem";

const Collections = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [sortType, setSortType] = useState("relevent");

  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  //filter logic-----------------------------------------
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  //-------------------------------------------

  //sort by filter.....................................................
  const sortProduct = () => {
    let filteredProductsCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(
          filteredProductsCopy.sort((a, b) => a.price - b.price)
        );
        break;

      case "high-low":
        setFilterProducts(
          filteredProductsCopy.sort((a, b) => b.price - a.price)
        );
        break;
      default:
        applyFilter();
        break;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-32 ">
      {/*FILTER OPTIONS */}

      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className=" my-2 text-xl font-extrabold flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <IoIosArrowDropdown
            className={`h-14 sm:hidden ${showFilter ? "rotate-180" : ""}`}
          />
        </p>
        {/*GENDER/CATEGORY FILTER */}
        <div
          className={`shadow-md shadow-black border-2 border-lime-800  pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-3xl permanent-marker-regular text-shadow-black-small primary-color font-outline-1">
            FOR
          </p>
          <div className="flex flex-col gap-2 text-2xl text-lime-950">
            <p className="flex gap-6  permanent-marker-regular ">
              <input
                className="w-8"
                value={"Men"}
                type="checkbox"
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-6  permanent-marker-regular">
              <input
                className="w-8"
                value={"Women"}
                type="checkbox"
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
          </div>
        </div>

        {/* Brand Filter */}
        <div
          className={`shadow-md shadow-black border-2 border-lime-800 pl-5 py-3 my-8 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-3xl permanent-marker-regular text-shadow-black-small primary-color font-outline-1">
            BRANDS
          </p>
          <div className="flex flex-col gap-2 text-2xl font-light text-lime-950">
            <p className="flex  gap-6 permanent-marker-regular ">
              <input
                className="w-8"
                value={"Carhartt"}
                type="checkbox"
                onChange={toggleSubCategory}
              />
              Carhartt
            </p>
            <p className="flex gap-6 permanent-marker-regular ">
              <input
                className="w-8"
                value={"RipNdip"}
                type="checkbox"
                onChange={toggleSubCategory}
              />
              RipNdip
            </p>
            <p className="flex gap-6 permanent-marker-regular ">
              <input
                className="w-8"
                value={"Dime"}
                type="checkbox"
                onChange={toggleSubCategory}
              />
              Dime
            </p>
          </div>
        </div>
        {/*Product Sort */}
        <select
          onChange={(e) => setSortType(e.target.value)}
          className="border-2 border-lime-800 text-3xl text-lime-600 primary-color  sm:primary-color font-outline-1 text-shadow-black-small sm:text-shadow-black-small permanent-marker-regular sm:px-2 bg-transparent shadow-md shadow-black sm:w-full h-[50px] sm:h-16 text-center "
        >
          <option value="" disabled selected>
            Sort by...
          </option>
          <option className="sm:text-xl" value="low-high">
            Price: Low to High
          </option>
          <option className="sm:text-xl" value="high-low">
            Price: High to Low
          </option>
        </select>
      </div>

      {/**RIGHT SIDE */}

      <div className="flex-1 lg:mt-20">
        <div className=" flex justify-between text-3xl sm:text-2xl mb-4"></div>

        {/*Map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
