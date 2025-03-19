import Bubble from "@/components/movies/create/Bubble";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>

            <Bubble />
            {children}
        </>
    );

};