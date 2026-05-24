import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Growth of AI',
  description: 'Exploring the exponential growth of Artificial Intelligence in recent years',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
