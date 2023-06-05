"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/config';
import '@/assets/styles/globals.scss';
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  useEffect(() => {
    // Check if user is logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Redirect to /dashboard if user is logged in
        router.push('/dashboard');
      }
    });
    // Unsubscribe from auth state changes when component unmounts
    return unsubscribe;
  }, [router]);
  return (
    <html lang="en">
      <body className="admin">{children}</body>
    </html>
  );
}
