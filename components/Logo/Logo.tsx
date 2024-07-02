'use client';

import Image from 'next/image'
import { useRouter } from 'next/navigation';


export function Logo() {
  const router = useRouter();
  return (
    <div className=' cursor-pointer '
      onClick={() => router.push("/")}>
      <Image src='/logo.svg' width={100} height={100} alt='logo' priority   />
    </div>
  )
}
