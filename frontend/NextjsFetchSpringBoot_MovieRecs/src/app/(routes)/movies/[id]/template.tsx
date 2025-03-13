import Clock from "@/components/movies/update/Clock";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Clock />
            {children}
        </>
    );
};