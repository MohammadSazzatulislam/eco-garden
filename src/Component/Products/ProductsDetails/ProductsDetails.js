import React from "react";
import { useLoaderData } from "react-router-dom";
import ScrollToTopOnMount from "../../ScrollToTop/ScrollToTop";

const ProductsDetails = () => {
  const products = useLoaderData();

  return (
    <div>
      <ScrollToTopOnMount></ScrollToTopOnMount>
      <div className="2xl:container 2xl:mx-auto lg:py-10 lg:px-20 md:py-5 md:px-3 py-2 px-2 ">
        <div className="flex justify-center items-center lg:flex-row flex-col-reverse gap-6">
          {/* <!--  Div --> */}

          <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
              {products.title}
            </h2>
            <h2 className="font-semibold lg:text-xl text-lg lg:leading-9 leading-7 text-gray-800 mt-4">
              {products.description}
            </h2>
            <h1 className="font-semibold text-lg my-3  ">
              Benefits Of {products.title}
            </h1>
            <div className="">
              {products.benefits?.map((detail, i) => (
                <ul key={i} className="list-disc">
                  <li>{detail}</li>
                </ul>
              ))}
            </div>
          </div>

          {/* <!-- Preview Images Div For larger Screen--> */}

          <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-3 gap-2">
            <div className=" w-full bg-gray-100 flex justify-center items-center">
              <img className="h-full" src={products.img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
