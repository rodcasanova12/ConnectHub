// app/layout.tsx
import '../globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TIE IN',
  description: 'A Next.js 13 Meta Threads APP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
              <div className='w-full flex justify-center items-center min-h-screen'>
                {children}
              </div>
            </body>
      </html>
    </ClerkProvider>
  )
}
