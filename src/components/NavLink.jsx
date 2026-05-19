import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    return <Link href={href} className={`${pathname.startsWith(href) && 'text-blue-500 py-2 px-3'}`} >
        {children}
    </Link>;
};

export default NavLink;