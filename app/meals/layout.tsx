import React from 'react';

type Props = {
    children: React.ReactNode
}

const MealsLayout: React.FC<Props> = ({children}) => {
    return (
        <>
            {children}
        </>
    );
};

export default MealsLayout;
