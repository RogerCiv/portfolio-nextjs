import React from 'react'
import { Title } from '../Title'
import { dataWorks } from './Works.data'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '../ui/direction-aware-hover'

export function Works() {
  return (
    <section className='relative h-screen py-10 p-5 sm:p-0'>
      <Title text='Works' className='flex flex-col items-center justify-center' />

      <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
        {dataWorks.map((work) => {
          return <Link href={work.link} key={work.title}>
            <div className={cn("p-5 rounded-md", work.backgroundColor)}>
              <DirectionAwareHover
                imageUrl={work.cover}
                className='w-full h-72 space-y-5 cursor-pointer'
              >
                <div className='space-y-5'>

                  <h1 className='text-2xl font-bold'>{work.title}</h1>
                  <div className='flex items-center gap-5'>
                    {work.tech.map((Icon, index) => {
                      return <Icon key={index} className='size-8' />
                    })}
                  </div>
                </div>
              </DirectionAwareHover>
            </div>
          </Link>
        })}
      </div>
    </section>
  )
}
