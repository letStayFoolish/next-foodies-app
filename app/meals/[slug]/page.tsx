import React from 'react';

type Props = {
    params: {
        slug: string
    }
}

const Meal: React.FC<Props> = ({params}) => {
    return (
        <div>
            <h1>{params.slug}</h1>
        </div>
    );
};

export default Meal;
