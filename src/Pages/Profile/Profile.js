import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";


const Profile = () => {
  return (
    <div>
      <div className="flex flex-col mx-auto w-full py-[400px] lg:py-0 md:py-0 h-screen gap-6 justify-center items-center lg:flex-row md:flex-row">
        <div className="lg:w-1/2 md:w-1/2 w-full flex justify-center items-center">
          <img
            className="lg:w-96 md:w-80 w-72 drop-shadow-2xl border border-purple-500 rounded-full"
            src='https://i.ibb.co/XJvhK7s/Sazzatul.png'
            alt=""
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full p-5">
          
          <h1 className="text-4xl my-4  font-bold ">
            <span className="text-purple-500">Mohammad</span> Sazzatul Islam
          </h1>
          <p className="uppercase font-medium text-md">+8801318381393 </p>         
          <div className="flex mt-4  gap-5 items-center">          
            <div className=" flex justify-around gap-5 items-center">
              <a href="https://www.linkedin.com/in/mohammad-sazzatul-islam/">
                <FaLinkedinIn className="w-7 h-7 p-1 bg-gradient-to-r drop-shadow-xl from-white to-white "></FaLinkedinIn>
              </a>
              <a href="https://github.com/MohammadSazzatulislam">
                <FaGithub className="w-7 h-7 p-1 bg-gradient-to-r drop-shadow-xl from-white to-white "></FaGithub>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
