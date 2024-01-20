'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import { ReactLenis } from '@studio-freight/react-lenis'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      <ParallaxProvider>
        {children}
      </ParallaxProvider>
    </ReactLenis>
  )
}
