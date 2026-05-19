import Link from 'next/link';
import React from 'react';

const NotFound404 = () => {
    return (
        <div className='min-h-screen flex items-center justify-center flex-col gap-5'>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link href="/" className='text-blue-500 hover:underline'>Go back to Home</Link>
        </div>
    );
};

export default NotFound404;