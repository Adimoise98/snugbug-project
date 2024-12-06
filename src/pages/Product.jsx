import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";

import RelatedProducts from "../components/RelatedProducts";
import { IoArrowBack } from "react-icons/io5";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [bgColor, setBgColor] = useState("");
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);

        setImage(item.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration opacity-100 h-full">
      <Link to="/collections">
        <div className="mt-16">
          <IoArrowBack className="h-12 w-12" />
        </div>
      </Link>
      {/*Product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*Product Images */}
        <div className="flex-1 shadow-lg shadow-[#aaba62] flex flex-col-reverse items-center gap-3 sm:flex-row mt-15 h-auto">
          <div className="flex sm:flex-col p-2  bg-transparent overflow-y-auto overflow-x-hidden justify-between sm:justify-around sm:w-[20%] w-full h-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] shadow-xl hover:scale-110 transition ease-in-out duration-300 sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer object-cover"
                alt=""
              />
            ))}
          </div>
          <div className="w-full flex items-center h-full">
            <img className="w-full h-full object-contain" src={image} alt="" />
          </div>
        </div>
        {/*---------------------PRODUCT INFORMATION--------------------------- */}

        <div className="flex-1 items-start">
          <h1 className="text-4xl  sm:mt-24 permanent-marker-regular primary-color font-outline-1 text-shadow-black-small">
            {productData.name}
          </h1>

          <div className="flex items-center gap-4 mt-6">
            <GoStarFill className="w-6" />
            <GoStarFill className="w-6" />
            <GoStarFill className="w-6" />
            <GoStarFill className="w-6" />
            <GoStar className="w-6" />
            <p className="pl-2">(120)</p>
          </div>
          <p className="mt-5 text-3xl font-bold">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-xl sm:text-lg text-lime-950 font-extrabold md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-8 my-8 items-start font-extrabold">
            <div>
              <p className="">Select Size</p>
              <div className="flex gap-8">
                {productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setBgColor(item)}
                    className={`font-bold shadow-md hover: shadow-black border-1 hover:scale-110 transition ease-in-out duration-300 border-black  py-2 px-4 bg-[#b1d02b] ${
                      item === bgColor ? "bg-lime-600" : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div onClick={() => addToCart(productData._id, bgColor)}>
              <button className="border border-black px-9 sm:px-8 py-3 sm:py-4 text-xl hover:bg-[#b1d02b] hover:text-white transition-all duration-500 shadow-md shadow-black text-black font-extrabold">
                Add to Cart
              </button>
            </div>
            <hr className="mt-8 sm:w-4/5 h-1 bg-lime-900" />
            <div className="text-lg sm:text-sm text-lime-950 mt-5 flex flex-col gap-4">
              <p>100% Original Product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy.</p>
            </div>
          </div>
        </div>
      </div>

      {/*-------------Description & Review ------------ */}
      <div className="sm:mt-20 ">
        <p className="border-black border-2 bg-[#b1d02b] shadow-md shadow-black px-5 py-3 text-xl sm:w-1/5 text-center">
          Reviews
        </p>
      </div>
      <div className="flex flex-col  gap-4 border-black border-2 px-6 py-6 text-base sm:text-sm">
        <p>
          ★★★★★ `Best Purchase This Year` - Michael T. As someone who`s pretty
          particular about clothing, I was skeptical about buying another
          hoodie. But this one completely exceeded my expectations. The material
          feels premium - it`s substantial without being bulky, and the color
          doesn`t fade even after multiple machine washes. The attention to
          detail is remarkable: the zipper glides smoothly, the pockets are deep
          and well-constructed, and the hood actually stays up when it`s windy.
          I`ve recommended this to three of my friends already, and they`ve all
          had the same positive experience. Absolutely stellar product!
        </p>
      </div>

      {/*-----------Related Products---------------- */}

      <RelatedProducts subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
