"use client"

import { usePathname } from 'next/navigation';


const Banner = () => {
  const IsPageActive = (pathname: string) => usePathname() === pathname;
  return (
    <div id="banner" className={(IsPageActive('/') ? 'banner-height' : 'md:h-64') + (" pt-20 pb-5 md:pt-36")}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className={(IsPageActive('/') ? '' : 'hidden') + (" md:w-1/3 w-full")}>
          <p className="font-capture-it text-3xl mb-3">THE INNOVATOR OF OUR FAMOUS</p>
          <p className="font-abril-fatface text-6xl">Hangout Pizza</p>
        </div><div className={(IsPageActive('/') ? '' : 'hidden') + (" md:w-1/3 w-full")}>
          <p className="font-abril-fatface text-5xl md:text-right mb-3">Catering Available</p>
          <p className="font-capture-it text-2xl md:text-right">We’re serving up more than just delectable meals. Enjoy our Al fresco dining</p>
        </div>
      </div>
      <img src="/images/pizza.png" alt="" className={(IsPageActive('/') ? 'pizza' : 'hidden')}/>
    </div>
  )
}

export default Banner;