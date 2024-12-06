import { MdCurrencyExchange } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <MdCurrencyExchange className="w-20 h-20 m-auto mb-5" />
        <p className="font-extrabold text-lime-950">Easy Exchange Policy</p>
        <p className="text-lime-800 font-bold">
          We offer hassle free exchange policy
        </p>
      </div>
      <div>
        <TbTruckReturn className="w-20 h-20 m-auto mb-5" />
        <p className="font-extrabold text-lime-950">7 Days Return Policy</p>
        <p className="text-lime-800 font-bold">
          We provide 7 days free return policy{" "}
        </p>
      </div>
      <div>
        <MdOutlineSupportAgent className="w-20 h-20 m-auto mb-5" />
        <p className="font-extrabold text-lime-950">Best customer support</p>
        <p className="text-lime-800 font-bold">
          we provide 24/7 customer support
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
