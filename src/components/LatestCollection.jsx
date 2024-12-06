import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(1, 5));
  }, []);

  //   console.log(products);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-7xl ">
        <Title text={"NEW  IN  THE  HOOD"} />
        <p className="w-3/4 m-auto text-xl pt-10 sm:text-2xl md:text-3xl text-lime-950 font-bold">
          Every week, we keep you up to date with the latest products on the
          market from the top HOODIE makers.
        </p>
      </div>

      {/**RENDERING PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-8 gap-y-8">
        {latestProducts.map((item, index) => (
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

export default LatestCollection;
