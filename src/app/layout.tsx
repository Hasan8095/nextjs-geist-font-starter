import type { Metadata } from "next"
import { GeistSans, GeistMono } from "geist/font"
import "./globals.css"

export const metadata: Metadata = {
  title: "Next.js Geist Font Starter",
  description: "A Next.js starter template with Geist fonts and shadcn/ui components",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}