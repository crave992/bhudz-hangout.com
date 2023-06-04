import { SocialIcon } from "react-social-icons";
import Navigation from "./Nav";
export const Header = () => {
  return  (
    <header className="flex flex-wrap flex-column">
      <div className="container mx-auto py-2.5 w-full hidden md:block">
        <div className="header-top flex justify-content-center items-center">
          <div className="header-top__left sm:w-1/4 w-full">
            <p className="uppercase text-sm text-red-700">Follow us</p>
            <div className="social-icons mt-2.5">
              <span>
                <SocialIcon
                  style={{ width: 25, height: 25 }}
                  url="https://facebook.com/bhudzhangoutcalleuno"
                  fgColor="#000000"
                  bgColor="#ffffff"
                />
              </span>
            </div>
          </div>
          <div className="header-top__center sm:w-1/2 w-full">
            <p className="address font-bold lg:text-2xl md:text-base text-center">
              3 First Road (Josefa Llanes Escoda) cor. Naguilian Road, Quezon Hill, Baguio City, Philippines
            </p>
          </div>
          <div className="header-top__right sm:w-1/4 w-full sm:text-right">
            <p className="uppercase text-sm text-red-700">CALLUS AT</p>
            <p className="text-xl font-bold"><a href="tel:+639688559748">0968 855 9748</a></p>
          </div>
        </div>
      </div>
      <Navigation/>
    </header>
  )
}