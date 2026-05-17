"use client";
import { useRouter } from 'next/navigation';
import React from 'react';


const Banner = () => {
    const route = useRouter();
    const handleShareStory = () => {
        const password = prompt("Please enter the password to share your story:");

        if (password === "1234") {
            console.log(route);
            route.push("/dashboard");
        }
    }
    return (
        <div className='text-center space-y-5 bg-linear-60 to-sky-100 from-sky-300 text-black p-10'>
            <h2 className='text-4xl font-bold'>Welcome to Dev Story</h2>
            <button className='bg-sky-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-black duration-200' onClick={handleShareStory}>
                Share story
            </button>
        </div>
    );
};

export default Banner;