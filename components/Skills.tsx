import Image from "next/image";
import Html from "../app/public/assets/html.png";
import Css from "../app/public/assets/css.png";
import Javascript from "../app/public/assets/javascript.png";
import ReactImg from "../app/public/assets/react.png";
import NextJS from "../app/public/assets/nextjs.png";
import Tailwind from "../app/public/assets/tailwind.png";
import Github from "../app/public/assets/github.png";
import Firebase from "../app/public/assets/firebase.png";
import { cn } from "@/lib/utils";

const SkillSet = [
  {
    id: 1,
    ImageSrc: Html,
    skillName: "HTML",
    className: "m-auto",
  },
  {
    id: 2,
    ImageSrc: Css,
    skillName: "CSS",
    className: "m-auto",
  },
  {
    id: 3,
    ImageSrc: Javascript,
    skillName: "Javascript",
    className: "m-auto",
  },
  {
    id: 4,
    ImageSrc: ReactImg,
    skillName: "REACTJS",
    className: "m-auto",
  },
  {
    id: 5,
    ImageSrc: NextJS,
    skillName: "NextJS",
    className: "m-auto dark:bg-white",
  },
  {
    id: 6,
    ImageSrc: Tailwind,
    skillName: "TailwindCSS",
    className: "m-auto",
  },
  {
    id: 7,
    ImageSrc: Firebase,
    skillName: "Firebase",
    className: "m-auto",
  },
  {
    id: 8,
    ImageSrc: Github,
    skillName: "GitHUB",
    className: "m-auto bg-black",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full md:px-20 lg:h-screen p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="py-4 dark:text-white text-green-800">Skills I Use</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {SkillSet.map((skill) => (
            <div
              key={skill.id}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className={skill.className}>
                  <Image src={skill.ImageSrc} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center dark:text-white">
                  <h3>{skill.skillName}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
