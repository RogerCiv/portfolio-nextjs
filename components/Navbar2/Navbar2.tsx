import React from 'react'
import { dataSocial } from './Navbar2.data'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Navbar2({ className }: { className?: string }) {
  return (
    <nav className={cn('py-10 flex justify-between items-center', className)}>
      <h1 className="text-2xl font-semibold">
        Roger<span className="text-accent">Civ</span>
      </h1>
      <div className='flex items-center gap-5'>
        {dataSocial.map((social) => {
          const Icon = social.icon
          return <Link href={social.url} key={social.name} aria-label={social.name}>
            <Icon className="size-5 hover:opacity-75 hover:scale-125 hover:text-accent-hover transition-all" />
          </Link>
        })}
      </div>
    </nav>
  )
}
