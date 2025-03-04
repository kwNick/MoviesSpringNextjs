import MouseDirection from "@/components/MouseDirection";
import HomeCursor from "../../components/cursors/HomeCursor";
import RisingBlocks from "../../components/RisingBlocks";
import ParallaxScroll from "@/components/home/ParallaxScroll";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ParallaxScroll />
            <MouseDirection />

            {/* cursor */}
            <HomeCursor />

            {children}

            {/*RisingBlocksAnimation  */}
            <RisingBlocks />
        </>
    );

};