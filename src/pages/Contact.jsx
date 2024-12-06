import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32">
      {/* Header Section */}
      <div className="text-center text-xl sm:text-2xl lg:pt-36 border-t pt-8">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* Content Section */}
      <div className="my-10 flex flex-col justify-center items-center md:flex-row md:items-start gap-10 md:gap-16 mb-20">
        <div className="flex flex-col justify-center items-center  gap-6 sm:gap-8 lg:gap-12">
          {/* Store Information */}
          <p className="text-3xl lg:text-4xl permanent-marker-regular text-shadow-black-small primary-color font-outline-1">
            Our Store
          </p>
          <p className="text-xl text-black font-semibold text-center md:text-left">
            13431 Str. XXXXXXXX <br /> Suite 32, Brasov, Romania
          </p>
          <p className="text-xl text-black font-semibold text-center md:text-left">
            Tel: (+40) 765-712-224 <br /> Email: snugbug@store.com
          </p>

          {/* Careers Section */}
          <p className="text-3xl  lg:text-4xl permanent-marker-regular text-shadow-black-small primary-color font-outline-1">
            Careers at Forever
          </p>
          <p className="text-xl text-black font-semibold text-center md:text-left">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-9 sm:px-8 py-3 sm:py-4 text-xl hover:bg-[#b1d02b] hover:text-white transition-all duration-500 shadow-md shadow-black text-black font-extrabold">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Newsletter Box */}
      <NewsletterBox />
    </div>
  );
};

export default Contact;
