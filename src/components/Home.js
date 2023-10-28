import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
// import image from '../avatar.svg';
import LottieAnimation from "./Lottie";
import home from "../Animation/home_animation.json";


export default function Home() {

    const [postData, setPost] = useState(null);
    useEffect(() => {
      sanityClient
        .fetch(
          `*[_type == "post"] {
                  title,
                  slug,
                  mainImage{
                      asset -> {
                          _id,
                          url
                      },
                      alt
                  }
              }`,
        )
        .then((data) => setPost(data))
        .catch(console.error);
    }, []);
  
    return (
      <main>
        
        <section className="home__main flex flex-row-reverse justify-between content-center my-8 bg-black">
          <div id="home_image--container">
            <LottieAnimation lotti={home} height={450} width={450} />
          </div>
  
          <div className="home__main--content">
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
          </div>
        </section>
  
        <section className="home__main min-h-screen p-12">
          <div className="container mx-auto">
              <h1 className="text-5xl flex justify-center cursive text-white drop-in">
                {" "}
                Case Studies
              </h1>
              <h2 className="text-lg text-gray-400 flex justify-center mb-12 drop-in-1">
                Selected case-studies are here to present my work
              </h2>
  
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 gap-4">
              {postData &&
                postData.map((post, index) => (
                  <article>
                    <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                      <span
                        className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                        key={index}
                      >
                        <img
                          src={post.mainImage.asset.url}
                          alt={post.mainImage.alt}
                          className="w-full h-full rounded-r object-cover absolute"
                        />
                        <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                          <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-green-700 text-green-100 bg-opacity-75 rounded">
                            {post.title}
                          </h3>
                        </span>
                      </span>
                    </Link>
                  </article>
                ))}
            </div>
          </div>
        </section>
        
      </main>
    );

}