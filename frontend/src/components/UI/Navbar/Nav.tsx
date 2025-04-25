'use client'

import Link from "next/link";
import Button from "@/components/UX/Button";
import { pages } from "@/lib/data/navs";

const Nav = () => {
    return (
        <nav className="bg-white dark:bg-gray-800 rounded-full shadow-md mx-auto max-w-7xl px-4 py-2 my-4 flex items-center justify-between">
            <div className="flex items-center">
                <h5 className="text-xl font-bold text-gray-800 dark:text-white">Bit</h5>
            </div>
            
            <ul className="flex space-x-6">
                {pages.map((value) => (
                    <li key={value.id}>
                        <Link 
                            href={value.href} 
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                        >
                            {value.name}
                        </Link>
                    </li>
                ))}
            </ul>
            
            <div className="flex items-center space-x-4">
                <Link 
                    href="register" 
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                    Sign up
                </Link>
                <Link href="login">
                    <Button style="text-lg" text="sign in" />
                </Link>
            </div>
        </nav>
    );
};

export default Nav;