'use client'
import Image from 'next/image';
import Marquee from "react-fast-marquee";

const Awards = () => {
  return (
    <Marquee className='border-y border-[#5b564a] my-10 md:my-0 py-10'>
      <Image className='mx-10' width={100} height={100} src='/1.webp' alt='Award 1' />
      <Image className='mx-10' width={100} height={100} src='/2.webp' alt='Award 2' />
      <Image className='mx-10' width={100} height={100} src='/3.webp' alt='Award 3' />
      <Image className='mx-10' width={100} height={100} src='/4.webp' alt='Award 4' />
      <Image className='mx-10' width={100} height={100} src='/5.webp' alt='Award 5' />
      <Image className='mx-10' width={100} height={100} src='/6.webp' alt='Award 6' />
      <Image className='mx-10' width={100} height={100} src='/7.webp' alt='Award 7' />
      <Image className='mx-10' width={100} height={100} src='/8.webp' alt='Award 8' />
      <Image className='mx-10' width={100} height={100} src='/9.webp' alt='Award 9' />
    </Marquee>
  )
}

export default Awards