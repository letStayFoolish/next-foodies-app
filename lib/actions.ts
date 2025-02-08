"use server"

import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";
import {isInvalidText} from "@/lib/utils";
import type {TImage} from "@/types";

export const shareMealAction = async (prevState, formData: FormData): Promise<{ message: string | null }> => {
    const meal = {
        title: formData.get("title") as string,
        summary: formData.get("summary") as string,
        creator: formData.get("name") as string,
        creator_email: formData.get("email") as string,
        instructions: formData.get("instructions") as string,
        image: formData.get("image") as string | TImage,
    }

    if (!meal) {
        throw new Error("No meals found")
    }

    if (isInvalidText(meal.title)) {
        return {message: "Invalid input value: Title is required"}
    }

    if (isInvalidText(meal.summary)) {
        return {message: "Invalid input value: Summary is required"}
    }

    if (isInvalidText(meal.creator)) {
        return {message: "Invalid input value: Creator is required"}
    }

    if (isInvalidText(meal.creator_email) || meal.creator_email.indexOf("@") === -1) {
        return {message: "Invalid input value: Creator email is required"}
    }

    if (isInvalidText(meal.instructions)) {
        return {message: "Invalid input value: Instructions are required"}
    }

    if (!meal.image || (meal.image as TImage).size === 0) {
        return {message: "Invalid input: Image is required"}
    }

    await saveMeal(meal)

    redirect("/meals")

    return {message: null}
}