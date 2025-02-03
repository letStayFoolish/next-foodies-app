import React from 'react';
import classes from "./page.module.css"
import Link from "next/link";
import MealsGrid from "@/components/meals/meals.grid";
import {fetchMeals} from "@/lib/meals";

const MealsPage: React.FC = async () => {
    const meals = await fetchMeals()

    return (
     <>
         <header>
             <h1>Delicious meals created <span className={classes.highlight}>by you</span></h1>
             <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
             <p className={classes.cta}>
                 <Link href="/meals/share">Share Your Favorite Recipe</Link>
             </p>
         </header>
         <main className={classes.main}>
             {meals && <MealsGrid meals={meals} />}
         </main>
     </>
    );
};

export default MealsPage;
