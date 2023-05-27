'use client';

import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from './components/layout/Navbar';
import RightBar from './components/layout/RightBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Салык Сервис',
  description: 'Салык Сервис',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-full flex-row">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
