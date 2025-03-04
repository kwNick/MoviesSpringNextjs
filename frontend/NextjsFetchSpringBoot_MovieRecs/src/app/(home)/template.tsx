import MouseDirection from "@/components/MouseDirection";
import HomeCursor from "../../components/cursors/HomeCursor";
import RisingBlocks from "../../components/RisingBlocks";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <MouseDirection />
            {/* cursor */}
            <HomeCursor />

            {children}

            {/*RisingBlocksAnimation  */}
            <RisingBlocks />
        </>
    );

};