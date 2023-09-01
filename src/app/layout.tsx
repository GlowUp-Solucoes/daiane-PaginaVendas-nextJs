import FacebookPixel from '../components/FacebookPixel/FacebookPixel'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '500']
})

export const metadata: Metadata = {
  title: 'Daiane Heringer',
  description: 'Te ensino Nanopigmentação de forma simples e prática com meu método exclusivo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="PT-BR">
      <body className={poppins.className}>
        {children}
        <FacebookPixel />
      </body>
    </html>
  )
}
