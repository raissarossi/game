"use client" 
import React from 'react'
import Image from "next/image";
import img from "./../../images/404.png"
import title404 from "./../../images/titles/404title.png"
import home from "./../../images/buttons/home.png"
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  return (
    <div className='w-full bg-custom min-h-screen lg:h-screen flex flex-col items-center justify-center'>
      <Image src={title404} alt="" className='w-4/5 lg:max-w-xl' />
      <Image src={img} alt="" className='w-full lg:w-2/6 lg:-my-28' />
      <button className='hover:translate-y-1' onClick={() => router.push("/games")}>
        <Image src={home} alt="" className='w-40 lg:w-48' />
      </button>
    </div>
  )
}
