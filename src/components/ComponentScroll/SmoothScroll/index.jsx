'use client';
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScroll({children}) {

    useEffect( () => {
        window.scrollTo(0,0);
        
        const lenis = new Lenis()
        
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    }, [children])

    return children
}

