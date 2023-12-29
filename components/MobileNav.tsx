import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavItems from "./NavItems";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Items = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Skills",
    path: "/#skills",
  },
  {
    id: 3,
    name: "Projects",
    path: "/#projects",
  },
  {
    id: 4,
    name: "Experience",
    path: "/#experience",
  },
  {
    id: 5,
    name: "Contact",
    path: "/#contact",
  },
];

export function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>My Portfolio</SheetTitle>
            <Separator />
          </SheetHeader>

          <nav className="flex items-center flex-col  justify-around space-5">
            <div className="flex items-center   flex-col md:flex-row gap-3">
              {Items.map((item) => (
                <div key={item.id}>
                  <Link href={item.path}>
                    <SheetClose asChild>
                      <Button type="submit" variant={"link"}>
                        {item.name}
                      </Button>
                    </SheetClose>
                  </Link>
                </div>
              ))}
            </div>
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
                <Link href="https://www.twitter.com/kunwarabhi7">
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
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
