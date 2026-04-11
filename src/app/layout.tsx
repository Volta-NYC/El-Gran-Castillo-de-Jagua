import "./globals.css"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"

export const metadata = {
 title: {
    default: "El Gran Castillo de Jagua",
    template: "%s | El Gran Castillo de Jagua",
  },
  description: "Authentic Dominican cuisine in Brooklyn, NY.",
  icons: {
    icon: '/Logo.png', 
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}