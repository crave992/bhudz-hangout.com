"use client"

// export default Navigation;
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const IsActive = (pathname: string) => usePathname() === pathname;
  return (
    <nav className="bg-gray-100 w-full fixed top-0 left-0 right-0 md:sticky">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center md:hidden">
            <div className="flex-shrink-0">
              <h1 className="text-gray-950 font-bold">Bhudz Hangout Calle Uno</h1>
            </div>
          </div>
          <div className="hidden md:w-full md:flex justify-between items-center">
            <ul className="flex items-center justify-start w-1/3 space-x-4">
              <li className={(IsActive('/') ? 'active' : '') + (" justify-self-start")}>
                <Link href="/" className="block text-gray-800 text-xs lg:text-sm xl:text-base px-5 py-2.5 hover:bg-red-700 hover:text-gray-100 hover:transition-all duration-200 uppercase hover:font-bold">Home</Link>
              </li>
              <li className={(IsActive('/about-us') ? 'active' : '') + (" justify-self-start")}>
                <Link href="/about-us" className="block text-gray-800 text-xs lg:text-sm xl:text-base px-5 py-2.5 hover:bg-red-700 hover:text-gray-100 hover:transition-all duration-200 uppercase hover:font-bold">About Us</Link>
              </li>
              <li className={(IsActive('/gallery') ? 'active' : '') + (" justify-self-start")}>
                <Link href="/gallery" className="block text-gray-800 text-xs lg:text-sm xl:text-base px-5 py-2.5 hover:bg-red-700 hover:text-gray-100 hover:transition-all duration-200 uppercase hover:font-bold">Gallery</Link>
              </li>
            </ul>
            <div className="text-gray-950 font-bold">Bhudz Hangout Calle Uno Logo</div>
            <ul className="flex items-center justify-end w-1/3 space-x-4">
              <li className={(IsActive('/reviews') ? 'active' : '') + (" justify-self-end")}>
                <Link href="/reviews" className="block text-gray-800 text-xs lg:text-sm xl:text-base px-5 py-2.5 hover:bg-red-700 hover:text-gray-100 hover:transition-all duration-200 uppercase hover:font-bold">Reviews</Link>
              </li>
              <li className={(IsActive('/menu') ? 'active' : '') + (" justify-self-end")}>
                <Link href="/menu" target="_blank" className="block text-gray-800 text-xs lg:text-sm xl:text-base px-5 py-2.5 hover:bg-red-700 hover:text-gray-100 hover:transition-all duration-200 uppercase hover:font-bold">Menu</Link>
              </li>
              <li className={(IsActive('/contact-us') ? 'active' : '') + (" justify-self-end")}>
                <Link href="/contact-us" className="block text-gray-800 text-xs lg:text-sm xl:text-base px-5 py-2.5 hover:bg-red-700 hover:text-gray-100 hover:transition-all duration-200 uppercase hover:font-bold">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <li className={IsActive('/') ? 'active' : ''}>
              <Link href="/" className="block text-gray-800 px-5 py-2.5 hover:bg-red-700 hover:text-gray-100 uppercase hover:font-bold">Home</Link>
            </li>
            <li className={IsActive('/about-us') ? 'active' : ''}>
              <Link href="/about-us" className="block text-gray-800 px-5 py-2.5 hover:bg-red-700 hover:text-gray-100 uppercase hover:font-bold">About Us</Link>
            </li>
            <li className={IsActive('/gallery') ? 'active' : ''}>
              <Link href="/gallery" className="block text-gray-800 px-5 py-2.5 hover:bg-red-700 hover:text-gray-100 uppercase hover:font-bold">Gallery</Link>
            </li>
            <li className={IsActive('/reviews') ? 'active' : ''}>
              <Link href="/reviews" className="block text-gray-800 px-5 py-2.5 hover:bg-red-700 hover:text-gray-100 uppercase hover:font-bold">Reviews</Link>
            </li>
            <li className={IsActive('/menu') ? 'active' : ''}>
              <Link href="/menu" className="disabled block text-gray-800 px-5 py-2.5 hover:bg-red-700 hover:text-gray-100 uppercase hover:font-bold">Menu</Link>
            </li>
            <li className={IsActive('/contact-us') ? 'active' : ''}>
              <Link href="/contact-us" className="block text-gray-800 px-5 py-2.5 hover:bg-red-700 hover:text-gray-100 uppercase hover:font-bold">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;