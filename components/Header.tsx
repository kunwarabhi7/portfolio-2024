import Link from "next/link";
import { DarkThemeToggler } from "./DarkThemeToggler";
import { MobileNav } from "./MobileNav";
import NavItems from "./NavItems";
import Image from "next/image";
import Logo from "@/app/public/assets/logo.png";

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
    </header>
  );
};

export default Header;
