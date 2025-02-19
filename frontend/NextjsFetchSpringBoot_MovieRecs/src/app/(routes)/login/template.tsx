import HomeCursor from "@/app/components/cursors/HomeCursor";
import RisingBlocks from "@/app/components/RisingBlocks";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* cursor */}
            <HomeCursor />

            {children}

            {/*RisingBlocksAnimation  */}
            <RisingBlocks />
        </>
    );

};