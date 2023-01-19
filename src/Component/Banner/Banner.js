import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Banner = () => {
  return (
    <div className="mb-28 ">
      <div className=" w-full px-5 mx-auto h-[600px] flex justify-center">
        <div className=" w-full h-[600px] ">
          {/* Carousel for Small-Sized Screen */}
          <CarouselProvider
            className="relative block sm:hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={3}
            visibleSlides={1}
            step={1}
            infinite={true}
          >
            <div className="js-flickity flex justify-center items-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="w-7 h-20 flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-0 focus:outline-none focus:bg-gray-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <Slider>
                <Slide index={0}>
                  <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-[600px]">
                    <div className="relative w-full h-[600px] lg:block hidden">
                      <img
                        src="https://img.freepik.com/free-photo/tasty-red-apples-isolated-white_114579-73119.jpg?w=2000"
                        alt="sitting area"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pt-6 lg:pl-8 lg:pt-8 absolute left-5 top-10">
                        <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium ">
                          Welcome <br />
                          to fruits garden
                        </h1>
                      </div>
                    </div>
                    <div className="relative w-full h-[600px] lg:hidden">
                      <img
                        src="https://img.freepik.com/free-photo/tasty-red-apples-isolated-white_114579-73119.jpg?w=2000"
                        alt="sitting area"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pt-6 lg:pl-8 lg:pt-8 absolute left-5 top-10">
                        <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium ">
                          Welcome <br />
                          to fruits garden
                        </h1>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-[600px]">
                    <div className="relative w-full h-[600px] lg:block hidden">
                      <img
                        src="https://chefsmandala.com/wp-content/uploads/2018/03/Orange.jpg"
                        alt="sitting area"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pt-6 lg:pl-8 lg:pt-8 absolute left-5 top-10">
                        <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium ">
                          Welcome <br />
                          to fruits garden
                        </h1>
                      </div>
                    </div>
                    <div className="relative w-full h-[600px] lg:hidden">
                      <img
                        src="https://chefsmandala.com/wp-content/uploads/2018/03/Orange.jpg"
                        alt="sitting area"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pt-6 lg:pl-8 lg:pt-8 absolute left-5 top-10">
                        <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium ">
                          Welcome <br />
                          to fruits garden
                        </h1>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-[600px]">
                    <div className="relative w-full h-[600px] lg:block hidden">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0099/7828/2065/products/image_2bd08ae0-69c8-4586-aaa9-55dc3c159942_1000x.jpg?v=1633442155"
                        alt="sitting area"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pt-6 lg:pl-8 lg:pt-8 absolute left-5 top-10">
                        <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium ">
                          Welcome <br />
                          to fruits garden
                        </h1>
                      </div>
                    </div>
                    <div className="relative w-full h-[600px] lg:hidden">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0099/7828/2065/products/image_2bd08ae0-69c8-4586-aaa9-55dc3c159942_1000x.jpg?v=1633442155"
                        alt="sitting area"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pt-6 lg:pl-8 lg:pt-8 absolute left-5 top-10">
                        <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium ">
                          Welcome <br />
                          to fruits garden
                        </h1>
                      </div>
                    </div>
                  </div>
                </Slide>
              </Slider>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="w-7 h-20  flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-0 focus:outline-none cursor-pointer "
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>

          {/* Carousel for Medium and Large-Sized Screen */}
          <CarouselProvider
            className="relative hidden sm:block"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={3}
            visibleSlides={1}
            step={1}
            infinite={true}
            currentSlide={1}
          >
            <div className="js-flickity flex justify-center items-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="w-7 h-20 flex justify-center items-center bg-gray-300 border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-0 focus:outline-none focus:bg-gray-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <Slider className="carousel__sliderLarge">
                <Slide className="carousel__inner-slideLarge" index={0}>
                  <div className="gallery-cell w-full h-[600px]">
                    <div className="relative w-full h-[600px] lg:block hidden">
                      <img
                        src="https://img.freepik.com/free-photo/tasty-red-apples-isolated-white_114579-73119.jpg?w=2000"
                        alt="sitting area"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pt-6 md:-pt-5  md:pl-8 absolute left-5 top-32">
                        <h1 className=" md:text-2xl lg:text-5xl  font-medium ">
                          Welcome <br />
                          to fruits garden
                        </h1>
                        <h2 className=" md:text-sm lg:text-lg mt-5 lg:leading-normal font-medium ">
                          fresh healthy and tasty fruits in our garden
                        </h2>
                      </div>
                    </div>
                    <div className="relative w-full h-[600px] lg:hidden">
                      <img
                        src="https://img.freepik.com/free-photo/tasty-red-apples-isolated-white_114579-73119.jpg?w=2000"
                        alt="sitting area"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pt-6 md:pt-12 md:pl-8 absolute left-5 top-32">
                        <h1 className="md:text-2xl lg:text-5xl  font-medium ">
                          Welcome <br />
                          to fruits garden
                        </h1>
                        <h2 className=" md:text-sm lg:text-lg mt-5 lg:leading-normal font-medium ">
                          fresh healthy and tasty fruits in our garden
                        </h2>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide className="carousel__inner-slideLarge" index={1}>
                  <div className="gallery-cell w-full h-[600px]">
                    <div className="relative w-full h-[600px] lg:block hidden">
                      <img
                        src="https://chefsmandala.com/wp-content/uploads/2018/03/Orange.jpg"
                        alt="sitting area"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pt-6 md:-pt-5  md:pl-8 absolute left-5 top-32">
                        <h1 className=" md:text-2xl lg:text-5xl  font-medium ">
                          Welcome <br />
                          to fruits garden
                        </h1>
                        <h2 className=" md:text-sm lg:text-lg mt-5 lg:leading-normal font-medium ">
                          fresh healthy and tasty fruits in our garden
                        </h2>
                      </div>
                    </div>
                    <div className="relative w-full h-[600px] lg:hidden">
                      <img
                        src="https://chefsmandala.com/wp-content/uploads/2018/03/Orange.jpg"
                        alt="sitting area"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pt-6 md:-pt-5  md:pl-8 absolute left-5 top-32">
                        <h1 className=" md:text-2xl lg:text-5xl  font-medium ">
                          Welcome <br />
                          to fruits garden
                        </h1>
                        <h2 className=" md:text-sm lg:text-lg mt-5 lg:leading-normal font-medium ">
                          fresh healthy and tasty fruits in our garden
                        </h2>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide className="carousel__inner-slideLarge" index={2}>
                  <div className="gallery-cell w-full h-[600px]">
                    <div className="relative w-full h-[600px] lg:block hidden">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0099/7828/2065/products/image_2bd08ae0-69c8-4586-aaa9-55dc3c159942_1000x.jpg?v=1633442155"
                        alt="sitting area"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pt-6 md:-pt-5  md:pl-8 absolute left-5 top-32">
                        <h1 className=" md:text-2xl lg:text-5xl  font-medium ">
                          Welcome <br />
                          to fruits garden
                        </h1>
                        <h2 className=" md:text-sm lg:text-lg mt-5 lg:leading-normal font-medium ">
                          fresh healthy and tasty fruits in our garden
                        </h2>
                      </div>
                    </div>
                    <div className="relative w-full h-[600px] lg:hidden">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0099/7828/2065/products/image_2bd08ae0-69c8-4586-aaa9-55dc3c159942_1000x.jpg?v=1633442155"
                        alt="sitting area"
                        className="object-center object-cover w-full h-full"
                      />
                      <div className="pl-6 pt-6 md:-pt-5  md:pl-8 absolute left-5 top-32">
                        <h1 className=" md:text-2xl lg:text-5xl  font-medium ">
                          Welcome <br />
                          to fruits garden
                        </h1>
                        <h2 className=" md:text-sm lg:text-lg mt-5 lg:leading-normal font-medium ">
                          fresh healthy and tasty fruits in our garden
                        </h2>
                      </div>
                    </div>
                  </div>
                </Slide>
              </Slider>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="w-7 h-20  flex justify-center items-center bg-gray-300 border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-0 focus:outline-none cursor-pointer"
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
};

export default Banner;


 