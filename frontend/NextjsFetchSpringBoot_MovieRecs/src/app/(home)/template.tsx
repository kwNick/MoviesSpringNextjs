import MouseDirection from "@/components/MouseDirection";
import ParallaxScroll from "@/components/home/ParallaxScroll";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ParallaxScroll />
            <MouseDirection />

            {children}
        </>
    );

};