import SubTitle from "../components/SubTitle";
import { FaPaypal } from "react-icons/fa";

import { SiRevolut } from "react-icons/si";
import PlaceOrderButton from "../components/PlaceOrderButton";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import CartTotal from "../components/CartTotal";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");

  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <Link to="/collections">
        <div className="mt-20 ">
          <IoArrowBack className="h-12 w-12" />
        </div>
      </Link>
      {/*LEFT SIDE */}

      <div className="flex flex-col gap-6 w-full sm:mt-36 sm:max-w-[480px]">
        <div
          className="text-3xl
         sm:text-4xl sm:mt-2 sm:mb-10"
        >
          <SubTitle text={"DELIVERY INFORMATION"} />
        </div>
        <div className="flex gap-6">
          <input
            type="text"
            placeholder="First Name"
            className="tex-xl font-bold text-black border-2 border-lime-950  py-2 px-4 w-full shadow-black shadow-md placeholder-black bg-[#b1d02b]/70"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="tex-xl font-bold text-black border-2 border-lime-950  py-2 px-4 w-full shadow-black shadow-md placeholder-black bg-[#b1d02b]/70"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="tex-xl font-bold text-black border-2 border-lime-950  py-2 px-4 w-full shadow-black shadow-md placeholder-black bg-[#b1d02b]/70"
        />
        <input
          type="text"
          placeholder="Street"
          className="tex-xl font-bold text-black border-2 border-lime-950  py-2 px-4 w-full shadow-black shadow-md placeholder-black bg-[#b1d02b]/70"
        />
        <div className="flex gap-6">
          <input
            type="text"
            placeholder="City"
            className="tex-xl font-bold text-black border-2 border-lime-950  py-2 px-4 w-full shadow-black shadow-md placeholder-black bg-[#b1d02b]/70"
          />
          <input
            type="text"
            placeholder="County"
            className="tex-xl font-bold text-black border-2 border-lime-950  py-2 px-4 w-full shadow-black shadow-md placeholder-black bg-[#b1d02b]/70"
          />
        </div>
        <div className="flex gap-6">
          <input
            type="number"
            placeholder="Postal Code"
            className="tex-xl font-bold text-black border-2 border-lime-950  py-2 px-4 w-full shadow-black shadow-md placeholder-black bg-[#b1d02b]/70"
          />
          <input
            type="text"
            placeholder="Country"
            className="tex-xl font-bold text-black border-2 border-lime-950  py-2 px-4 w-full shadow-black shadow-md placeholder-black bg-[#b1d02b]/70"
          />
        </div>
        <input
          type="number"
          placeholder="Phone Number"
          className="tex-xl font-bold text-black border-2 border-lime-950  py-2 px-4 w-full shadow-black shadow-md placeholder-black bg-[#b1d02b]/70"
        />
      </div>

      {/*Right Side */}
      <div className="flex-1 w-full sm:mt-8 flex flex-col items-center justify-center">
        <div className="w-[80%] sm:mt-24 min-w-80">
          <CartTotal />
        </div>
        <div className="sm:mt-24 mb-6 text-center text-3xl">
          <SubTitle text={"PAYMENT METHOD"} />
          {/*PAYMENT METHOD SELECTION */}

          <div className="flex mt-4 gap-6 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("Paypal")}
              className="flex items-center gap-3 border-2 border-lime-900 bg-[#b1d02b]/80 shadow-black shadow-md   p-2 px-3 cursor-pointer "
            >
              <p
                className={`min-w-6 h-6 border-2 border-black rounded-full ${
                  method === "Paypal" ? "bg-lime-100" : ""
                } `}
              ></p>
              <FaPaypal className="w-full h-8" />
            </div>
            <div
              onClick={() => setMethod("Revolut")}
              className="flex items-center gap-3 border-2 border-lime-900 bg-[#b1d02b]/80 shadow-black shadow-md p-2 px-3 cursor-pointer  "
            >
              <p
                className={`min-w-6 h-6 border-2 border-black rounded-full  ${
                  method === "Revolut" ? "bg-lime-100" : ""
                }`}
              ></p>
              <SiRevolut className="w-full h-8" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border-2 border-lime-900 bg-[#b1d02b]/80 shadow-black shadow-md  p-2 px-3 cursor-pointer "
            >
              <p
                className={`min-w-6 h-6 border-2 border-black rounded-full ${
                  method === "cod" ? "bg-lime-100" : ""
                }`}
              ></p>
              <p className="text-black text-xl font-extrabold mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          <div
            onClick={() => navigate("/orders")}
            className="w-full text-center mt-8"
          >
            <PlaceOrderButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
