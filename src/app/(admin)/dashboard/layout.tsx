"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/config';
import '@/assets/styles/globals.scss';
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  useEffect(() => {
    // Check if user is logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        // Redirect to /admin if user is not logged in
        router.push('/admin');
      }
    });
    // Unsubscribe from auth state changes when component unmounts
    return unsubscribe;
  }, [router]);
  return (
    <html lang="en">
      <body className="dashboard">{children}</body>
    </html>
  );
}