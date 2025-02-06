import sql from "better-sqlite3"
import { TMeal} from "@/types";

const db = sql("meals.db")


export async function fetchMeals():  Promise<TMeal[] | null> {
    try {
        await new Promise((resolve) => setTimeout(resolve, 2000))

        const response = db.prepare("SELECT * FROM meals").all() as TMeal[];

        if(!response || response.length === 0) {
            throw new Error("No meals found")
        }

        return response;
    }
    catch (error: any) {
        console.log(error);

        return null;
    }
}

export async function getMeal (slug: string): Promise<TMeal | undefined> {
    try {
        return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as TMeal;
    }
    catch(error: any) {
        console.log(error);
    }
}
