import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Providers } from "@/components/providers"
import { SiteBlob } from "@/components/site-blob"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers> 
            {/* providers are important for react context providers components to work properly
            this why we wrap the page with the default provider. */}
          <div className="relative flex min-h-screen flex-col">
            {/* site header content */}
            <SiteHeader />
            {/* site bloob content */}
            <SiteBlob />
            <div className="flex-1">{children}</div>
            {/* site footer */}
            <SiteFooter />
          </div>
          </Providers>
        </body>
      </html>
    </>
  )
}
