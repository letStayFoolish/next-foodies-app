"use server"

import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";

export const shareMealAction = async (formData: FormData) => {
    const meal = {
        title: formData.get("title") as string,
        summary: formData.get("summary") as string,
        creator: formData.get("name") as string,
        creator_email: formData.get("email") as string,
        instructions: formData.get("instructions") as string,
        image: formData.get("image") as string,
    }

    if (!meal) {
        throw new Error("No meals found")
    }

    await saveMeal(meal)

    redirect("/meals")
}