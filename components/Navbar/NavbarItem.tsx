'use client';
import { usePathname } from "next/navigation"

import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavbarItemType } from "./Navbaritem.types";


export function NavbarItem(props: NavbarItemType){

  const { item } = props
  const { href, label } = item

  const pathname = usePathname()
  const itemActive = href === pathname
  
  return (
    <Link href={href}
    className={cn(`flex gap-x-2 mt-2 text-foreground text-xl items-center
      hover:text-accent-hover transition-all p-2 rounded-lg cursor-pointer`, 
      itemActive && `text-accent border-b-2 border-accent`)}
    >
      {label}
    </Link>
  )
}