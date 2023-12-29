import Image from "next/image";
import React from "react";
import Html from "../app/public/assets/html.png";
import Css from "../app/public/assets/css.png";
import Javascript from "../app/public/assets/javascript.png";
import ReactImg from "../app/public/assets/react.png";
import Tailwind from "../app/public/assets/tailwind.png";
import Github from "../app/public/assets/github.png";
import Firebase from "../app/public/assets/firebase.png";
import NextJS from "../app/public/assets/nextjs.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full md:px-20 lg:h-screen p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="py-4 dark:text-white text-green-800">Skills I Use</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center dark:text-white">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center dark:text-white">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center dark:text-white">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center dark:text-white">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center dark:text-white">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Firebase} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center dark:text-white">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto bg-black">
                <Image src={Github} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center b dark:text-white">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto dark:bg-white ">
                <Image src={NextJS} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center dark:text-white">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
