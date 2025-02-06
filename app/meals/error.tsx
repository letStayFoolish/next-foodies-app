"use client"

import React from 'react';

type Props = {
    error: any
}

const Error: React.FC<Props> = ({error}) => {
    return (
        <main className="error">
            <h1>An error occurred!</h1>
            <p>{error.message}</p>
        </main>
    );
};

export default Error;