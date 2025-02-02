import React from 'react';

type Props = {
    children: React.ReactNode
}

const MealsLayout: React.FC<Props> = ({children}) => {
    return (
        <>
         <p>Meals Layout</p>
            {children}
        </>
    );
};

export default MealsLayout;
