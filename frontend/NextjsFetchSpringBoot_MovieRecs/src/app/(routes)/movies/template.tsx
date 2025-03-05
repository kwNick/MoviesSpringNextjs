import MouseTrail from "@/components/cursors/MouseTrail";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <MouseTrail />

            {children}

        </>
    );

};