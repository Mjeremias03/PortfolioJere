import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar/Navbar'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
      <Navbar/>
     <Header/>
     {children}
      </body>

    </html>
  )
}
