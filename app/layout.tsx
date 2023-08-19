import './globals.css'
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'

const fira = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beebek Limbu',
  description: 'Beebek Limbu\' Website Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={fira.className}>
        {children}
      </body>

      
    </html>
  )
}
