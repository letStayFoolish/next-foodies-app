import sql from "better-sqlite3"
import type {TImage, TMeal} from "@/types";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs" // file system

const db = sql("meals.db")


export async function fetchMeals(): Promise<TMeal[] | null> {
    try {
        await new Promise((resolve) => setTimeout(resolve, 2000))

        const response = db.prepare("SELECT * FROM meals").all() as TMeal[];

        if (!response || response.length === 0) {
            throw new Error("No meals found")
        }

        return response;
    } catch (error: any | unknown) {
        console.log(error);

        return null;
    }
}

export async function getMeal(slug: string): Promise<TMeal | undefined> {
    try {
        return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as TMeal;
    } catch (error: any | unknown) {
        console.log(error);
    }
}

export async function saveMeal(meal: Omit<TMeal, "id">) {
    try {
        meal.slug = slugify(meal.title, {lower: true});
        meal.instructions = xss(meal.instructions as string);

        // Preparing the image to be saved on db
        // Naming
        const extension = (meal.image as TImage).name.split(".").pop();
        const fileName = `${meal.slug}.${extension}`

        // ...
        const stream = fs.createWriteStream(`public/images/${fileName}`);
        const bufferedImage = await (meal.image as TImage).arrayBuffer()

        // Save image to public folder
        stream.write(Buffer.from(bufferedImage), (error: any | unknown) => {
            if (error) {
                throw new Error("Saving image failed!")
            }
        })

        meal.image = `/images/${fileName}`

        db.prepare(`
            INSERT INTO meals
                (title, summary, instructions, creator, creator_email, image, slug)
            VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
        `).run(meal)


    } catch (error: any | unknown) {
        console.log(error);
    }
}
