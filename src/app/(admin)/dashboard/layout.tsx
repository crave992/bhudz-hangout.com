import '@/assets/styles/globals.scss'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dashboard">
        {children}
      </body>
    </html>
  )
}
