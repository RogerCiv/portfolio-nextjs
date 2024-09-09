import { AboutMe } from "@/components/ABoutMe";
import { Footer2 } from "@/components/Footer/Footer2";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import Navbar2 from "@/components/Navbar2/Navbar2";
import { Skills } from "@/components/Skills/Skills";
import { Works } from "@/components/Works/Works";


export default function Home() {
  return (
    <main className="h-screen bg-black ">
      <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative" >
        <div className="max-w-7xl mx-auto p-5 h-screen">
          {/* <Header /> */}
          <Navbar2 />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-34 bg-gradient-to-t from-black absolute -bottom-20 md:-bottom-5 left-0 xl:bottom-0 w-full "></div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-44 md:mt-20">
        <Works />
        <AboutMe />
        <Skills />
        <Footer2 />
      </div>
    </main>
  );
}
