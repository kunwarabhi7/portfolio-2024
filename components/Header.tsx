import Link from "next/link";
import { DarkThemeToggler } from "./DarkThemeToggler";
import { MobileNav } from "./MobileNav";
import NavItems from "./NavItems";
import Image from "next/image";
import Logo from "@/app/public/assets/logo.png";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { CgMenuGridR } from "react-icons/cg";
import { GiCrossedSwords } from "react-icons/gi";
// import Resume from "../public/resume.pdf";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-2 sticky bg-white dark:bg-black top-0 left-0 right-0 z-50">
      <Link href="/">
        <Image
          src={Logo}
          alt="/"
          width="204"
          height="90"
          className="cursor-pointer w-64 h-20  dark:text-white"
        />
      </Link>
      <div className="hidden md:flex">
        <NavItems />
      </div>
      <MobileNav />
      <DarkThemeToggler />
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-500 bg-gray-500">
            <a
              className="flex justify-between items-center w-full text-gray-300 bg-gray-500"
              href="https://www.linkedin.com/in/kunwarabhi7/"
            >
              Linkedin
              <BsLinkedin size={35} className="mr-2" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-500 bg-blue-400">
            <a
              className="flex justify-between items-center w-full text-gray-100 bg-blue-400"
              href="https://twitter.com/kunwarabhi7"
            >
              Twitter
              <BsTwitter size={35} className="mr-2 bg-blue-400" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-500 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300 bg-[#333333]"
              href="https://github.com/kunwarabhi7"
            >
              GitHub
              <BsGithub size={35} className="mr-2 bg-[#333333]" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-500 bg-blue-800">
            <a
              className="flex justify-between items-center w-full text-gray-300 bg-blue-800"
              href="mailto:iamdevabhi@gmail.com"
            >
              E-Mail
              <SiGmail size={35} className="mr-2 bg-blue-800" />
            </a>
          </li>
          {/* <li className="w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-500 bg-blue-800">
            <a
              className="flex justify-between items-center w-full text-gray-300 bg-blue-800"
              href={Resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
              <SiGmail size={35} className="mr-2 bg-blue-800" />
            </a>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
