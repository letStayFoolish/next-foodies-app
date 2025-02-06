import React from 'react';
import Link from "next/link";

const Notfound:React.FC = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Page not found</h1>
            <Link href="/" >Go to the home page</Link>
        </div>
    );
};

export default Notfound;