"use client"

import '@/assets/styles/globals.scss'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <html lang="en">
      <body className="home">
        {children}
      </body>
    </html>
  )
}
