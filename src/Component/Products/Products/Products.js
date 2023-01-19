import React, { memo, useState } from "react";
import ScrollToTopOnMount from "../../ScrollToTop/ScrollToTop";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../../Loading/Loading";

const Products = memo(() => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://eco-garden-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  console.log(allProducts);

  if (!allProducts) {
    return <Loading></Loading>;
  }
  return (
    <div className="px-5 w-full ">
      <ScrollToTopOnMount></ScrollToTopOnMount>
      <div className="w-full mb-28">
        <h1 className="text-2xl lg:text-5xl md:text-4xl font-bold ">
          <span className="text-pink-500 border-l-8 pl-2 border-blue-500 ">
            Our
          </span>
          <br /> <span className="pl-2">Letest Fruits</span>
        </h1>
      </div>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {allProducts?.map((p) => (
          <div
            key={p.id}
            className="w-full  md:w-[350px] lg:w-[400px] rounded overflow-hidden shadow-xl "
          >
            <img className="w-full  " src={p.img} alt="Mountain" />
            <div className="p-3">
              <div className="font-bold text-xl mb-2">{p.title}</div>
              <p className="text-gray-700 text-base">{p.description}</p>
              <Link
                className="w-full py-2 flex justify-center items-center"
                to={`/details/${p.id}`}
              >
                <button className="px-3 py-1 rounded-full bg-blue-400 hover:bg-blue-700 text-white font-semibold outline-none ">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Products;
