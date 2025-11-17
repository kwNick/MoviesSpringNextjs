'use client';

import Lenis from "lenis";
import { useEffect } from "react"

const LenisWrapper = ({children}:{children: React.ReactNode}) => {
// Min version only gets the smooth scrolling effect from lenis, no ReactLenis component used; Manual raf loop implemented to sync lenis with React rendering cycle

    useEffect(() => {
        const lenis = new Lenis();

        let rafId: number;
        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            cancelAnimationFrame(rafId);
        };
    }, []);

  return (
    <>
        {children}
    </>
    )
}
export default LenisWrapper