import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { Skills } from "@/components/Skills/Skills";
import { Works } from "@/components/Works/Works";


export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative" >
        <div className="max-w-7xl mx-auto p-5">
          <Header />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-34 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full "></div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <Works />
        <Footer />
      </div>
    </main>
  );
}
