import HomeCursor from "@/components/cursors/HomeCursor";
import MouseTrail from "@/components/cursors/MouseTrail";
import RisingBlocks from "@/components/RisingBlocks";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <MouseTrail />
            {/* cursor */}
            <HomeCursor />

            {children}

            {/*RisingBlocksAnimation  */}
            <RisingBlocks />
        </>
    );

};