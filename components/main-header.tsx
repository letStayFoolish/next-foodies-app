import React from 'react';
import Link from "next/link";
import logoImage from "@/assets/logo.png"
import classes from "./main-header.module.css";
import Image from "next/image";

const MainHeader: React.FC = () => {
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logoImage} alt="a plate with food on it" priority />
                Next Level Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
