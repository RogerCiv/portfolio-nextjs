"use client";
import Link from "next/link"
import { NavbarData } from "./Navbar.data"
import { usePathname } from "next/navigation"
// import { ToggleTheme } from "../ToggleTheme";

export function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="flex gap-8 items-center">
      {NavbarData.map((item) => (
        <Link key={item.label} href={item.href} className={`${item.href === pathname && "text-accent border-b-2 border-accent"}
       capitalize font-medium hover:text-accent transition-all`}>
          {item.label}
        </Link>
      ))}
      {/* <ToggleTheme /> */}
    </nav>
  )
}
