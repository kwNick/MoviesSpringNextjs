import { Hind_Siliguri } from 'next/font/google';
import localFont from "next/font/local";

export const hind = Hind_Siliguri({
    variable: "--font-hind",
    weight: "500",
});

export const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
export const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});