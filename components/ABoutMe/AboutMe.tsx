import { Title } from "../Title";
import { TracingBeam } from "../ui/tracing-beam";
import { dataAbout } from "./AboutMe.data";
import { AboutMeType } from "./AboutMe.types";


export function AboutMe() {
  return (
    <section className='py-20'>
      <Title text="About Me 🫣" className="flex flex-col items-center justify-center mb-16" />

      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dataAbout.map((item: AboutMeType) => (
            <div key={item.title} className="mb-10">
              <h2 className="bg-accent text-black font-bold rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.year}
              </h2>

              <p className='text-xl mb-4'>
                {item.title}
              </p>
              <p className="text-lg mb-4 bg-indigo-500 w-fit text-black font-semibold" >
                {item.subtitle}
              </p>

              <div className="text-sm">
                <p>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </section>
  )
}



