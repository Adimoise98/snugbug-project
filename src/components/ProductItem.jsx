import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      className="text-lime-950 cursor-pointer flex flex-col w-full"
      to={`/product/${id}`}
    >
      <div className="w-full aspect-square flex items-center justify-center overflow-hidden">
        <img
          className="max-w-full max-h-full object-contain hover:scale-110 transition ease-in-out duration-300"
          src={image[0]}
          alt={name}
        />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <p className="pt-4 pb-2 text-xl font-extrabold truncate">{name}</p>
        <p className="text-xl font-semibold">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

ProductItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.array.isRequired, // Change to array
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductItem;
