import '@/assets/styles/globals.scss'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="admin">
        {children}
      </body>
    </html>
  )
}
