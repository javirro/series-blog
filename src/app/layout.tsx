import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import Script from 'next/script'


const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})


export const metadata: Metadata = {
  title: 'Series Blog',
  description: 'Be ready to remember all the good moments of your childhood when reading this blog about the best series between 1996-2004. Choose your favorite series and read about the best moments, the best characters, and the best episodes.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
            <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive" // Load it before the main app runs
        />
      </head>
      <body className={`${geistSans.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
