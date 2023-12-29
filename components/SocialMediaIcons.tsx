import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const SocialMediaIcons = () => {
  return (
    <div className="pt-2 md:hidden ">
      <div className="flex items-center justify-between my-4 w-full sm:w-[80%] ">
        <a
          href="https://www.linkedin.com/in/kunwarabhi7/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg dark:text-white shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <BsLinkedin />
          </div>
        </a>
        <a
          href="https://github.com/kunwarabhi7"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg dark:text-white shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <BsGithub />
          </div>
        </a>
        <Link target="_blank" href="https://www.twitter.com/kunwarabhi7">
          <div className="rounded-full shadow-lg shadow-gray-400 dark:text-white p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <BsTwitter />
          </div>
        </Link>
        <a href="mailto:iamdevabhi@gmail.com">
          <div className="rounded-full shadow-lg shadow-gray-400 dark:text-white p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <SiGmail />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
