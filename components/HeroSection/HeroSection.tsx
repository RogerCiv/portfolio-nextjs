import Link from "next/link";
import { MovingBorderBtn } from "../ui/moving-border";

import { TypewriterEffect } from "../ui/typewriter-effect";
import { Title } from "../Title";





export function HeroSection() {
  const words = [
    {
      text: "Nice",
    },
    {
      text: "to",
    },
    {
      text: "meet",
    },
    {
      text: "you!",

    },
    {
      text: "I'm",
    },
    {
      text: "RogerCiv",
      className: "dark:text-indigo-500 text-left",
    },
  ];
  return (
    <div className=" min-h-[80vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-around lg:justify-between  mt-10 md:mt-0 ">
      <div className="space-y-10 text-center md:text-left">
        <TypewriterEffect words={words} className="text-4xl lg:text-7xl font-bold " cursorClassName="bg-accent" />
        {/* <h1 className="text-4xl lg:text-7xl font-bold">Nice to meet you! 🖖 <br /> <span className="underline underline-offset-8 decoration-accent">{"I'm RogerCiv"}</span></h1> */}
        <p className="md:w-96 text-lg text-gray-300">
          {" Based in Spain, I'm a Front-end developer passionate about building a modern web application than users love."}
        </p>
        <Link href={"mailto:rogercivdev@gmail.com"} className="inline-block group">
          <Title text="Contact Me 📫" className="" />
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] ">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500">
            </div>
            <div className="w-32 h-32 rounded-full bg-indigo-500">
            </div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500">
            </div>
            <div className="w-32 h-32 rounded-full bg-green-500">
            </div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p>📢 Avalible for work </p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  )
}
