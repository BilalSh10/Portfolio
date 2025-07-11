import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Bilal Shweike Portfolio',
  description: 'This is Bilal Shweike portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
