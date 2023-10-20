import React from "react";
// import image from '../avatar.svg';
import LottieAnimation from "./Lottie";
import home from "../Animation/home_animation.json";

export default function Home() {
  return (
    <main className="home__main flex flex-row-reverse justify-between content-center my-8 bg-black-100">
      <div id="home_image--container">
        {/* <img id="home_image--container" src={image} alt='avatar for profile' /> */}
        <LottieAnimation lotti={home} height={450} width={450} />
      </div>
      <section className="home__main--content">
        <div class ="overflow-hidden">
          <h1 className="text-3xl bold pr-6 mr-6">
            <span className=" text-2xl home__main--heading-span text-green-400 drop-in">
              {" "}
              Hello!{" "}
              <span
                role="img"
                aria-label="Hi wave"
                className="wavy_hands wavy_hands--animation"
              >
                👋
              </span>{" "}
              I am <div> {"\n"} </div>{" "}
            </span>
            <span className="home_header-span text-2xl leading-2 text-white md:text-6xl drop-in-1">
              Shashank Agarwal
            </span>
            <span className="text-green-400">.</span>
          </h1>
          <div className=" overflow-hidden home_header-p mt-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <p className="sm:text-xs  uppercase md:text-2xl text-white drop-in-2">
              {" "}
              Multidiscipilinary Product Designer 
              <span className="text-green-400">.</span>
            </p> 
          </div>
           
        </div>
        
        <p className="sm:text-xs text-lg mt-4 md:text-xl text-white">
          <span className="home_p-span text-gray-400">
            I am known for belief in the power of
          </span>
          <span className="p_creativity text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            creativity
          </span>
          ,
          <span className="p_minimalism text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
            minimalism
          </span>
          <span className="text-gray-500">&amp;</span>
          <span className="p_problem text-transparent bg-clip-text bg-gradient-to-r from-red-500  to-red-800">
            problem solving
          </span>
          {/* <div> {"\n"} </div>{" "} */}
          <span className="home_p-span text-gray-400">
            to create a more inclusive communities
          </span>
          <span className="text-green-400">.</span>
        </p>
      </section>
    </main>
  );
}
