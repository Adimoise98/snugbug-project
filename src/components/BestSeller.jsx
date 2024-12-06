import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct);
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-7xl ">
        <Title text={"ON FIRE NOW"} />
        <p className="w-3/4 m-auto text-xl pt-10 sm:text-2xl md:text-3xl text-lime-950 font-bold">
          People like these products the most; maybe the fabric, maybe the brand
          or who knows... What we know, is that our customers are always right.
          Check it out yourself!
        </p>
      </div>

      {/**RENDERING PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-8 gap-y-8">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
