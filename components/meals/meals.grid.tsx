import React from 'react';
import classes from "./meals.grid.module.css"
import MealItem from "@/components/meals/meal-item";
import type {TMeal} from "@/app/types";

type Props = {
    meals: Array<TMeal>
}

const MealsGrid: React.FC<Props> = ({meals}) => {
    return (
        <ul className={classes.meals}>
            {meals.map((meal) => (
                <li
                key={meal.id}
                >
                    <MealItem {...meal} />
                </li>

            ))}
        </ul>
    );
};

export default MealsGrid;
