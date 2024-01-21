'use client'

import { Gowun_Batang } from 'next/font/google';
const gowunBatang = Gowun_Batang({ subsets: ['latin'], weight: '400' });
import { Parallax } from 'react-parallax';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Gallery = () => {
  return (
    <div className={`${gowunBatang.className} container my-10`}>
      <div className="md:p-10">
        <div className="md:p-10">
          <h2 className='uppercase text-lg md:text-xl lg:text-2xl my-4 accent'>Gallery</h2>
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              <CarouselItem key={1} className="md:basis-1/2 lg:basis-1/2">
                <Parallax bgImage='food1.webp' strength={50} className='hidden md:block' >
                  <div style={{ height: '350px' }} />
                </Parallax>
                <Parallax bgImage='food1.webp' strength={30} className='block md:hidden' >
                  <div style={{ height: '200px' }} />
                </Parallax>
              </CarouselItem>
              <CarouselItem key={2} className="md:basis-1/2 lg:basis-1/2">
                <Parallax bgImage='food2.webp' strength={50} className='hidden md:block' >
                  <div style={{ height: '350px' }} />
                </Parallax>
                <Parallax bgImage='food2.webp' strength={30} className='block md:hidden' >
                  <div style={{ height: '200px' }} />
                </Parallax>
              </CarouselItem>
              <CarouselItem key={3} className="md:basis-1/2 lg:basis-1/2">
                <Parallax bgImage='food3.webp' strength={50} className='hidden md:block' >
                  <div style={{ height: '350px' }} />
                </Parallax>
                <Parallax bgImage='food3.webp' strength={30} className='block md:hidden' >
                  <div style={{ height: '200px' }} />
                </Parallax>
              </CarouselItem>
              <CarouselItem key={4} className="md:basis-1/2 lg:basis-1/2">
                <Parallax bgImage='food4.webp' strength={50} className='hidden md:block' >
                  <div style={{ height: '350px' }} />
                </Parallax>
                <Parallax bgImage='food4.webp' strength={30} className='block md:hidden' >
                  <div style={{ height: '200px' }} />
                </Parallax>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className='left-5 md:left-10' />
            <CarouselNext className='right-5 md:right-10' />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Gallery