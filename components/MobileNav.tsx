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

import { Separator } from "@/components/ui/separator";
import Link from "next/link";

import { Items } from "./Items";
import SocialMediaIcons from "./SocialMediaIcons";

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
            <SocialMediaIcons />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
