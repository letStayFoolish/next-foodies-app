import React from 'react';
import classes from "./meal-item.module.css"
import Image from "next/image";
import Link from "next/link";
import {TMeal} from "@/types";

type Props = Omit<TMeal, "id">

const MealItem: React.FC<Props> = ({image, slug, creator, summary, title}) => {
    return (
        <article className={classes.meal}>
            <header>
                <div className={classes.image}>
                    {/*We can use "fill" prop instead of width/height whenever we have an image where we do not know dimensions in advance (while build time)*/}
                    <Image src={image} alt={title} fill />
                </div>
                <div className={classes.headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={classes.content}>
                <p className={classes.summary}>{summary}</p>
                <div className={classes.actions}>
                    <Link href={`/meals/${slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    );
};

export default MealItem;
