import Bubble from "@/components/movies/create/Bubble";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>

            <Bubble t={50} l={10} w={20} h={20} />
            <Bubble t={20} l={70} w={15} h={15} />
            <Bubble t={80} l={40} w={10} h={10} />
            <Bubble t={30} l={30} w={25} h={25} />
            <Bubble t={60} l={80} w={18} h={18} />
            {children}
        </>
    );

};