import React, {Suspense} from 'react';
import classes from "./page.module.css"
import Link from "next/link";
import MealsGrid from "@/components/meals/meals.grid";
import LoadingMeals from "@/components/meals/loading";
import {fetchMeals} from "@/lib/meals";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'All Meals',
    description: 'Delicious meals, shared by a food-loving community.',
};

const Meals = async () => {
    const meals = await fetchMeals()

    return meals && <MealsGrid meals={meals}/>
}

const MealsPage: React.FC = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>Delicious meals created <span className={classes.highlight}>by you</span></h1>
                <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share Your Favorite Recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<LoadingMeals/>}>
                    <Meals/>
                </Suspense>
            </main>
        </>
    );
};

export default MealsPage;
