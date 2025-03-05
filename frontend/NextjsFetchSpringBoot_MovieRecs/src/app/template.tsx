import ClickRippleEffect from "@/components/cursors/ClickRippleEffect";
import HomeCursor from "@/components/cursors/HomeCursor";
import RisingBlocks from "@/components/RisingBlocks";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* cursor */}
            <HomeCursor />

            <ClickRippleEffect />

            {children}

            {/*RisingBlocksAnimation  */}
            <RisingBlocks />
        </>
    );

};