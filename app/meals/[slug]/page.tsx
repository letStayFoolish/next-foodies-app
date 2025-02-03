import React from 'react';

type Props = {
    params: Promise<{
        slug: string
    }>
}

const Meal: React.FC<Props> = async ({params}) => {
    const paramsPromise = await params.catch(() => ({slug: 'not-found'}));

    const {slug} = paramsPromise;

    return (
        <div>
            <h1>{slug}</h1>
        </div>
    );
};

export default Meal;
