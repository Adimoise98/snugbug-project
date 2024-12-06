import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import SubTitle from "../components/SubTitle";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <Link to="/collections">
        <div className="mt-20 ">
          <IoArrowBack className="h-12 w-12" />
        </div>
      </Link>
      <div className="mt-8 mb-8 text-3xl">
        <SubTitle text={"MY ORDERS"} />
      </div>

      <div className="space-y-6">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="bg-transparent rounded-lg shadow-md overflow-hidden border border-lime-100"
          >
            {/* Mobile & Desktop Layout */}
            <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr] p-4 sm:p-6 gap-4">
              {/* Product Details */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                {/* Product Image */}
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-24 sm:w-32 h-24 sm:h-32 object-cover rounded-md mx-auto sm:mx-0"
                />

                {/* Product Information */}
                <div className="flex flex-col gap-2 text-center sm:text-left w-full">
                  <h3 className="text-lg sm:text-2xl permanent-marker-regular text-lime-900">
                    {item.name}
                  </h3>

                  {/* Details Wrapper for Mobile */}
                  <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 text-sm sm:text-base">
                    <p className="font-bold">
                      {currency}
                      {item.price}
                    </p>
                    <span className="hidden sm:inline">•</span>
                    <p>Quantity: 1</p>
                    <span className="hidden sm:inline">•</span>
                    <p>Size: M</p>
                  </div>

                  <p className="text-sm sm:text-base font-semibold mt-2">
                    Date: <span className="text-black">25, July, 2024</span>
                  </p>
                </div>
              </div>

              {/* Order Status & Tracking */}
              <div className="flex flex-col sm:items-end space-y-3">
                {/* Status Indicator */}
                <div className="flex items-center justify-center sm:justify-end gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-sm font-bold text-green-700">
                    Ready to Ship
                  </span>
                </div>

                {/* Track Order Button */}
                <button
                  className="w-full sm:w-auto flex items-center justify-center gap-2 
                  bg-[#b1d02b]/80 text-black 
                  py-2 px-4 rounded-md 
                  hover:bg-[#b1d02b] 
                  transition-colors 
                  font-bold 
                  shadow-md hover:shadow-lg"
                >
                  TRACK ORDER
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
