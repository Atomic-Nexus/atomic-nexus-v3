import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { cn } from "@/lib/utils"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: 'Atomic Nexus - AI Education and Strategic Consulting',
  description:
      'Atomic Nexus empowers forward-thinking entrepreneurs with AI education and strategic consulting. Drive growth, enhance customer experiences, and optimize operations.',
  keywords:
      'AI, Automation, Consulting, Education, Strategy, Business, Innovation, SaaS, Startups'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn("min-h-screen bg-rich-black font-sans antialiased", poppins.variable)}
        suppressHydrationWarning={true}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}