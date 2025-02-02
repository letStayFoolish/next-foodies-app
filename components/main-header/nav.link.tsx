"use client"

import React from 'react';
import Link from "next/link";
import classes from "./nav.link.module.css"
import {usePathname} from "next/navigation";

type Props = {
    href: string;
    children: React.ReactNode;
}

const NavLink:React.FC<Props> = ({href, children}) => {
    const pathname = usePathname()

    return (
        <Link href={href} className={pathname.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}>{children}</Link>
    );
};

export default NavLink;
