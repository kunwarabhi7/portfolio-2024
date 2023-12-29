import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavItems from "./NavItems";
import { Separator } from "@/components/ui/separator";

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

            <NavItems />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
