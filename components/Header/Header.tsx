import Link from "next/link";
import { Navbar } from "../Navbar";
import { Button } from "../ui/button";
import NavbarMobile from "../Navbar/NavbarMobile";


export function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href='/'>
          <h1 className="text-4xl font-semibold">
            Nombre <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex gap-8">
        <Navbar />
        <Link href="/contact">
        <Button>
          Hire me
        </Button>
        </Link>
        </div>

    {/* Mobile nav */}
    <div className="xl:hidden flex space-x-4 items-center">
          <NavbarMobile />
        </div>
      </div>
    </header>
  )
}
