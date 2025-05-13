'use client'

import ProtectedRoute from '@/lib/routes/ProtectedRoute';
import { ReactNode } from 'react';
import DashboardNav from '@/components/UI/Navbar/DashBoardNav';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <ProtectedRoute>
        <div className="min-h-screen bg-gray-50">
        <DashboardNav />
        <div className="lg:pl-64">
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}