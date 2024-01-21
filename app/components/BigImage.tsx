'use client'
import Image from "next/image"
import { Parallax } from 'react-parallax';

const BigImage = () => {
    return (
        <div className='container my-10'>
            <div className="md:p-10">
                <div className="md:p-10">
                    <div className="p-5 border">
                        <Parallax bgImage='outside.webp' strength={100}>
                            <p className="p-5">Outside sitting</p>
                            <div className="block xs:hidden" style={{ height: '120px' }} />
                            <div className="hidden sm:block md:hidden" style={{ height: '200px' }} />
                            <div className="hidden md:block lg:hidden" style={{ height: '250px' }} />
                            <div className="hidden lg:block xl:hidden" style={{ height: '400px' }} />
                            <div className="hidden xl:block" style={{ height: '475px' }} />
                        </Parallax>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigImage