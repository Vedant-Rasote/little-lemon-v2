'use client'

import Link from 'next/link';
import { Parallax } from 'react-parallax';

const About = () => {
    return (
        <div className='container' id='about'>
            <div className="md:p-10 md:flex lg:flex">
                <div className="sm:w-full md:w-1/2 flex flex-col md:p-10 justify-center">
                    <h2 className='uppercase text-lg md:text-xl lg:text-2xl my-4 accent'>About</h2>
                    <h1 className='text-4xl my-3'>Prize winning Mediterreanean cuisine</h1>
                    <p className='text-xl my-3'>We are a family-owned Mediterranean restaurant located in Chicago, Illinois. Our restaurant is known for its focus on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish cultures to create a unique fusion of flavors.</p>
                    <div className="flex my-4 space-x-3">
                        <Link href='' className='inline hover-bg-accent p-2 border border-[#5b564a]'>
                            <p>Reserve</p>
                        </Link>
                        <Link href='' className='inline hover-bg-accent p-2 border border-[#5b564a]'>
                            <p>Go to Menu</p>
                        </Link>
                    </div>
                </div>
                <div className="sm:w-full md:w-1/2 flex flex-col md:p-10">
                    <div className='hidden md:block'>
                        <Parallax bgImage='about.webp' strength={300}>
                            <div style={{ height: '500px' }} />
                        </Parallax>
                    </div>
                    <div className='block md:hidden'>
                        <Parallax bgImage='about.webp' strength={200}>
                            <div style={{ height: '300px' }} />
                        </Parallax>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About