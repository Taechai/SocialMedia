import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Social Media Generator',
  description: 'Generate engaging text and images for your social media posts using AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  )
}
