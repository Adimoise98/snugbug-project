import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  md:mt-40 text-lg sm:text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className=" w-full md:w-2/3 text-lime-950 ">
            Here at our shop, we`re not just selling hoodies—we`re celebrating
            them. If you`re obsessed with that perfect blend of comfort, style,
            and a little touch of swagger, you`re in the right place. Our
            mission? To bring you the best in hoodie fashion while building a
            community of like-minded legends who know that life`s better when
            you`re rocking your favorite hoodie. So, slip into something cozy,
            join the tribe, and let`s make every day a hoodie kind of day.
          </p>
        </div>

        <div>
          <p className="text-xl fonr-base mb-5">OUR STORE</p>
          <ul className="flex flex-col gap1 text-lime-950">
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/privacy">
              <li>Privacy Policy</li>
            </Link>
          </ul>
        </div>

        <div>
          <p className="text-xl font-base mb-5">CONTACT US</p>
          <ul className="flex flex-col gap1 text-lime-950">
            <li>+10-121-121-121</li>
            <li>contact@snugbug.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="h-1 bg-lime-950" />
        <p className="py-5 text-base text-center">
          Copyright 2024 @ snugbug.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
