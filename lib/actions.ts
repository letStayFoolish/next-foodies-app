"use server"

import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";

export const shareMealAction = async (formData: FormData) => {
    const meal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        creator: formData.get("name"),
        creator_email: formData.get("email"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
    }

    if(!meal) {
        throw new Error("No meals found")
    }

    await saveMeal(meal)

    redirect("/meals")
}