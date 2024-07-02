'use client';
import { Menu } from "lucide-react"
import { NavbarData } from "./Navbar.data"

// components
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { NavbarItem } from "./NavbarItem";
import { Logo } from "../Logo/Logo";

export default function NavbarMobile() {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center">
        <Menu className="text-accent" />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <SheetDescription className="sr-only">Navigation menu</SheetDescription>
        <div className="flex justify-center mt-32 mb-20">
          <Logo />
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {NavbarData.map((item) => (
            <NavbarItem key={item.label} item={item} />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
