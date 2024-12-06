import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import SubTitle from "../components/SubTitle";
import { ImBin } from "react-icons/im";
import ProceedToCheckoutButton from "../components/ProceedToCheckoutButton";
import CartTotal from "../components/CArtTotal";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  // Extract and format cart data from the context whenever cartItems change
  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-32 min-h-screen px-4 md:px-12 lg:px-20">
      <Link to="/collections">
        <div className="mt-2 mb-8">
          <IoArrowBack className="h-12 w-12" />
        </div>
      </Link>
      {/* Header Section */}

      <div className="text-3xl sm:text-4xl mb-3">
        <SubTitle text={"YOUR CART"} />
      </div>

      {/* Cart Items Section */}
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="py-8 border-t-2 border-b-2  text-gray-700 grid grid-cols-[3fr_1fr_0.5fr] sm:grid-cols-[3fr_1.5fr_0.5fr] md:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 bg-transparent rounded-lg shadow-md overflow-hidden border border-lime-100"
            >
              {/* Product Details Section */}
              <div className="flex items-start gap-4 sm:gap-6">
                <img
                  className="w-16 sm:w-20 md:w-24 object-cover"
                  src={productData.image[0]}
                  alt={productData.name}
                />
                <div>
                  <p className="text-xs sm:text-lg md:text-xl font-bold">
                    {productData.name}
                  </p>
                  <div className="flex items-center text-sm sm:text-xl md:text-2xl font-extrabold gap-3 sm:gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 py-1 border bg-[#b1d02b] font-bold border-black shadow-lg">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quantity Input Section */}
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                className=" max-w-[3rem] sm:max-w-[4rem] md:max-w-[5rem] px-1 text-center bg-transparent font-extrabold text-sm sm:text-xl md:text-2xl rounded-lg shadow-md overflow-hidden border border-lime-100"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />

              {/* Delete Icon Section */}
              <ImBin
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 cursor-pointer text-red-500 hover:text-red-700"
              />
            </div>
          );
        })}
      </div>

      {/* Cart Total and Checkout Section */}
      <div className="flex justify-end my-10">
        <div className="w-full sm:w-[450px] md:w-[600px]">
          {/* Cart Total Component */}
          <CartTotal />

          {/* Proceed to Checkout Button */}
          <div
            onClick={() => navigate("/place-order")}
            className="w-full pt-10 text-end"
          >
            <ProceedToCheckoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
