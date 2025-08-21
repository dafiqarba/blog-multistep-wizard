import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { Footer, Nav, BlogProviders } from '@/components/layout'

import './globals.css'
import { BlogProvider } from '@/contexts/BlogProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'Create and Read Blog Post',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <BlogProvider>
          <Nav />
          <div className="min-h-dvh grid grid-rows-[auto,1fr,auto]">
            <main className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10">
              {children}
            </main>
          </div>
          <Footer />
        </BlogProvider>
      </body>
    </html>
  )
}
