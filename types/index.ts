export type TMeal = {
    title: string;
    id: number;
    image: string;
    summary: string;
    creator: string;
    slug: string;
    instructions?: string
    creator_email?:string;
};

export type MealResponse = {
    meals: TMeal[]
};
