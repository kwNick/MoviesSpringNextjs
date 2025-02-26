import HomeCursor from "../../components/cursors/HomeCursor";
import RisingBlocks from "../../components/RisingBlocks";

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