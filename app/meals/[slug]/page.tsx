import React from 'react';
import classes from "./page.module.css"
import {getMeal} from "@/lib/meals";
import Image from "next/image"
import {notFound} from "next/navigation";

type Props = {
    params: Promise<{
        slug: string
    }>
}

const Meal: React.FC<Props> = async ({params}) => {
    const paramsPromise = await params.catch(() => ({slug: 'not-found'}));

    const {slug} = paramsPromise;

    const meal = await getMeal(slug)

    if(!meal) {
        return notFound();
    }

    const instructions = meal.instructions?.replace(/\n/g, "<br />") as string;


    return (
      <>
      <header className={classes.header}>
          <div className={classes.image}>
              <Image src={(meal?.image as string) ?? ""} alt={meal?.title ?? ""} fill />
          </div>
          <div className={classes.headerText}>
              <h1>{meal.title}</h1>
              <p className={classes.creator}>
                  by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
              </p>
              <p className={classes.summary}>SUMMARY</p>
              <p>{meal.summary}</p>
          </div>
      </header>
          <main>
              <p className={classes.instructions} dangerouslySetInnerHTML={{
                  __html: instructions
              }}></p>
          </main>
      </>
    );
};

export default Meal;
