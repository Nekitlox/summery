import React from "react";
import cats from "../assets/introImg/cats.png";
import dogs from "../assets/introImg/dogs.png";
import birds from "../assets/introImg/birds.png";
import fishes from "../assets/introImg/fishes.png";

export const Intro = () => {
  return (
    <>
      <div className="w-full h-[551px] flex flex-col items-center mt-[164px] justify-center">
        <input
          type="text"
          placeholder="Search"
          class="w-[452px] h-[62px] px-4 py-2 rounded-full border border-black text-gray-500 outline-none placeholder-gray-500 placeholder:text-[30px] placeholder: pl-[70px] placeholder: pt-[16px]"
        />
        <div className="w-[1000px] flex flex-col justify-between h-[320px] mt-[50px]">
          <h1 className="text-[23px] ml-[30px] font-medium">Select your pet</h1>
          <div className="flex justify-around text-white">
            <div className="relative w-48 h-64 rounded-xl overflow-hidden">
              <img
                src={cats}
                alt="catsImg"
                className="rounded-4xl object-cover w-full h-full"
              />
              <h2 className="absolute bottom-4 left-4 text-white text-[48px] font-semibold">
                Cats
              </h2>
            </div>
            <div className="relative w-48 h-64 rounded-xl overflow-hidden">
              <img
                src={dogs}
                alt="dogsImg"
                className="rounded-4xl rounded-4xl object-cover w-full h-full"
              />
              <h2 className="absolute bottom-4 left-4 text-white text-[48px] font-semibold">
                Dogs
              </h2>
            </div>
            <div className="relative w-48 h-64 rounded-xl overflow-hidden">
              <img
                src={birds}
                alt="birdsImg"
                className="rounded-4xl object-cover w-full h-full"
              />
              <h2 className="absolute bottom-4 left-4 text-white text-[48px] font-semibold">
                Birds
              </h2>
            </div>
            <div className="relative w-48 h-64 rounded-xl overflow-hidden">
              <img
                src={fishes}
                alt="fishesImg"
                className="rounded-4xl object-cover w-full h-full"
              />
              <h2 className="absolute bottom-4 left-4 text-white text-[48px] font-semibold">
                Fishes
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
