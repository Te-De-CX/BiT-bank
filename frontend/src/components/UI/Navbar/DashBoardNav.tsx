'use client'

import { useState } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { useUserProfile } from '@/lib/hooks/useAuth';
import { FiMenu, FiX, FiHome, FiSettings, FiUser, FiPieChart, FiLogOut } from 'react-icons/fi';
// import Image from 'next/image';

type NavItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

export default function DashboardNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: user } = useUserProfile();
  // const router = useRouter();

  const navItems: NavItem[] = [
    { name: 'Dashboard', href: '/dashboard', icon: <FiHome /> },
    { name: 'Analytics', href: '/analytics', icon: <FiPieChart /> },
    { name: 'Profile', href: '/profile', icon: <FiUser /> },
    { name: 'Settings', href: '/settings', icon: <FiSettings /> },
  ];

  return (
    <>
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div
        className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out z-40 w-64 bg-white border-r border-gray-200 flex flex-col`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <Link href="/" className="text-xl font-semibold text-gray-900">
            YourLogo
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-1 rounded-md text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <FiX size={20} />
          </button>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              // className={`flex items-center px-4 py-3 text-sm font-medium rounded-md ${router.pathname === item.href ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
              // href={item.href}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-md bg-indigo-50 text-indigo-700`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="px-4 py-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">{user?.username}</p>
              <button className="text-xs font-medium text-gray-500 hover:text-gray-700">
                View profile
              </button>
            </div>
          </div>
          <button className="flex items-center w-full mt-4 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
            <FiLogOut className="mr-3" />
            Sign out
          </button>
        </div>
      </div>
    </>
  );
}