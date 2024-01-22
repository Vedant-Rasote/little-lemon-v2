'use client'
import React from 'react';
import { Parallax } from 'react-parallax';

const Hero = () => {
    return (
        <>
            <div className="container mt-4 pt-4 md:mt-10 md:pt-10 relative hidden lg:block" id='hero-large'>
                <Parallax bgImage="inside.webp" bgImageAlt="little_lemon_interior" strength={200} className='h-[calc(87vh)] flex justify-center items-center overflow-hidden'>
                    <div className='text-center max-w-screen-lg mx-auto px-4 radial-gradient' style={{ backgroundPosition: '50% 30%' }}>
                        <h1 className="font-display text-6xl md:text-7xl lg:text-9xl radial-gradient">Little Lemon</h1>
                        <p className="mt-3 text-lg md:text-xl lg:text-2xl radial-gradient">Discover the flavors of the Mediterranean</p>
                    </div>
                </Parallax>
            </div>
            <div className="container mt-4 pt-4 md:mt-10 md:pt-10 relative lg:hidden" id='hero-small'>
                <Parallax bgImage="inside_small.webp" bgImageAlt="little_lemon_interior" strength={200} className='h-[calc(87vh)] flex justify-center items-center overflow-hidden'>
                    <div className='text-center max-w-screen-lg mx-auto px-4 radial-gradient' style={{ backgroundPosition: '50% 30%' }}>
                        <h1 className="font-display text-6xl md:text-7xl lg:text-9xl radial-gradient">Little Lemon</h1>
                        <p className="mt-3 text-lg md:text-xl lg:text-2xl radial-gradient">Discover the flavors of the Mediterranean</p>
                    </div>
                </Parallax>
            </div>
        </>
    );
};

export default Hero;