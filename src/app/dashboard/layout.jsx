import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-12 gap-5 min-h-screen'>
            <div className='col-span-3 border-r-2'>
                <h2>Navigation</h2>
                <div className='flex flex-col gap-5 mt-10'>
                    <Link href="/dashboard/add-story" className='mx-4 w-full block py-2 px-4 hover:bg-gray-700 rounded'>Add Story</Link>
                    <Link href="/dashboard/my-profile" className='mx-4 w-full block py-2 px-4 hover:bg-gray-700 rounded'>My Profile</Link>
                    <Link href="/dashboard/settings" className='mx-4 w-full block py-2 px-4 hover:bg-gray-700 rounded'>Settings</Link>
                    
                </div>
            </div>
            <div className='col-span-9'>{children}</div>
        </div>
    );
};

export default DashboardLayout;