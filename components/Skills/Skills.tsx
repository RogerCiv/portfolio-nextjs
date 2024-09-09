"use client";
import { Title } from "../Title";
import { HoverEffect } from "../ui/card-hover-effect";
import { skills } from "./Skills.data";



export  function Skills() {

  return (
    <div className="max-w-5xl mx-auto px-8 py-20">
      <Title text="Skills 🔪" className="flex flex-col items-center justify-center" />

      <HoverEffect items={skills}/>
    </div>
  )
}
