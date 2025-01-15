'use client';

import { usePathname } from "next/navigation"

const FooterNavItem = ({ x }: { x: { value: string, href: string } }) => {
    const pathname = usePathname();
    // console.log(pathname);
    return (
        <li className={`${x.href == pathname && 'text-accent decoration-colour '} hover:text-accent`}>
            {x.value}
        </li >
    )
}
export default FooterNavItem