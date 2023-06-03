import Banner from '@/components/templates/Banner'
import '../../../public/styles/globals.scss'
import { Header } from '@/components/templates/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="home">
        <Header/>
        <Banner/>
        {children}
      </body>
    </html>
  )
}
