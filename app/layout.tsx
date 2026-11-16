import type { Metadata } from 'next'
import { Inter, Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansKR = Noto_Sans_KR({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-kr'
})

export const metadata: Metadata = {
  title: 'ITL CO., LTD. - Professional Logistics & Freight Forwarding',
  description: 'Dedicated to delivering excellence in logistics and freight forwarding services across global corridors.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} ${notoSansKR.variable}`}>
        {children}
      </body>
    </html>
  )
}
