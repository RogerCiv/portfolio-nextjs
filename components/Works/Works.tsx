import React from 'react'
import { Title } from '../Title'
import { dataWorks } from './Works.data'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ContainerScroll } from '../ui/container-scroll-animation'
import Image from 'next/image'

export function Works() {
  return (
    <div id='works'>
      <Title text="Works 💳" className="flex flex-col items-center justify-center" />
      <div className='grid grid-cols-1  pt-20'>
        {dataWorks.map((work) => {
          return (
            <div key={work.title} className={cn("p-5 rounded-md", work.backgroundColor)}>
              <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                  titleComponent={
                    <>
                      <h1 className="text-4xl font-semibold text-black dark:text-white">
                        {work.title} <br />
                        <p className='text-4xl md:text-[6rem] font-bold mt-1 leading-none'>{work.description}</p>
                      </h1>
                      <p className="text-base text-accent font-bold mt-1 leading-none">
                        {work.tech.join(" | ")}
                      </p>
                    </>
                  }
                >
                  <Link href={work.link} >
                    <Image
                      src={work.cover}
                      alt="hero"
                      height={720}
                      width={1400}
                      className="mx-auto rounded-2xl object-cover h-full object-center"
                      draggable={false}
                    />
                  </Link>
                </ContainerScroll>
              </div>
            </div>

          )
        })}
      </div >
    </div >
  )
}
