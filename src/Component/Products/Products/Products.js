import React, { memo } from "react";
import ScrollToTopOnMount from "../../ScrollToTop/ScrollToTop";
import { Link } from "react-router-dom";

const Products = memo(() => {
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
        {/*  */}
        <div className="w-full  md:w-[350px] lg:w-[400px] rounded overflow-hidden shadow-xl ">
          <img
            className="w-full  "
            src="https://previews.123rf.com/images/happyalex/happyalex1309/happyalex130900095/22671838-apple-garden.jpg"
            alt="Mountain"
          />
          <div className="p-3">
            <div className="font-bold text-xl mb-2">Red Delicious Apple</div>
            <p className="text-gray-700 text-base">
              Red Delicious is a type of apple with a red exterior and sweet
              taste that was first recognized in Madison County, Iowa, in 1872.
              Today, the name Red Delicious comprises more than 50 cultivars.
              From 1968 to 2018, it was the most produced cultivar in the United
              States
            </p>
            <Link
              className="w-full py-2 flex justify-center items-center"
              to="/details"
            >
              <button className="px-3 py-1 rounded-full bg-blue-400 hover:bg-blue-700 text-white font-semibold outline-none ">
                Details
              </button>
            </Link>
          </div>
        </div>
        ;{/*  */}
        {/*  */}
        <div className="w-full  md:w-[350px] lg:w-[400px] rounded overflow-hidden shadow-xl ">
          <img
            className="w-full "
            src="https://live.staticflickr.com/5549/11721097603_9d171d0298_b.jpg"
            alt="Mountain"
          />
          <div className="p-3">
            <div className="font-bold text-xl mb-2">Acid-less Orange</div>
            <p className="text-gray-700 text-base">
              Lima oranges, botanically classified as Citrus sinensis, are an
              acidless variety growing on evergreen trees that can reach up to
              ten meters in height and belongs to the Rutaceae or citrus family.
            </p>
            <Link
              className="w-full py-2 flex justify-center items-center"
              to="/details"
            >
              <button className="px-3 py-1 rounded-full bg-blue-400 hover:bg-blue-700 text-white font-semibold outline-none ">
                Details
              </button>
            </Link>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="w-full md:w-[350px] lg:w-[400px] rounded overflow-hidden shadow-xl ">
          <img
            className="w-full  "
            src="https://img.freepik.com/free-photo/grapes-vineyards-plant-sunny-day_1398-5016.jpg?w=2000"
            alt="Mountain"
          />
          <div className="p-3">
            <div className="font-bold text-xl mb-2">Red grapes</div>
            <p className="text-gray-700 text-base">
              Grapes contain powerful antioxidants known as polyphenols. These
              are thought to have anti-inflammatory and antioxidant properties.
              One of these is resveratrol.
            </p>
            <Link
              className="w-full py-2 flex justify-center items-center"
              to="/details"
            >
              <button className="px-3 py-1 rounded-full bg-blue-400 hover:bg-blue-700 text-white font-semibold outline-none ">
                Details
              </button>
            </Link>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
});

export default Products;
