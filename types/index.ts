export type TMeal = {
    title: string;
    id: number;
    image: TImage | string;
    summary: string;
    creator: string;
    slug?: string;
    instructions?: string
    creator_email?: string;
};

export type TImage = {
    name: string;
    arrayBuffer: () => Promise<string> // ??
    size: number;
    type: string;
};

export type MealResponse = {
    meals: TMeal[]
};

export type TError = string | Error | { message: string };
