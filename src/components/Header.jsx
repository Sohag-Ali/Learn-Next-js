import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
       <header className="px-4 py-3 border-b-2 border-gray-500 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold">🐳 Dev Story</Link>

          <nav className="space-x-4">
           <Link href="/about" className="">About</Link>
           <Link href="/stories" className="">Stories</Link>
           <Link href="/tutorials" className="">Tutorials</Link>
           <Link href="/login" className="">Login</Link>
           <Link href="/register" className="">Register</Link>
           
          </nav>
        </header>
    );
};

export default Header;