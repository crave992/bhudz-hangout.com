import { Header } from '@/components/templates/Header'
import Banner from '@/components/templates/Banner'
import Footer from '@/components/templates/Footer';

export default function Template({ children }: { children: React.ReactNode }) {
  return <div>
    <Header />
    <Banner />
    {children}
    <Footer/>
  </div>;
}