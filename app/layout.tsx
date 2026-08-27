import type { Metadata } from 'next'
import '../app/globals.css'
import { Navigation } from '@/components/Navigation'
import { Sidebar } from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Orbitra | Invest Smart, Trade Fast',
  description: 'The next generation crypto and stock investment platform',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-slate-950 text-slate-50 antialiased">
        <div className="flex h-screen overflow-hidden bg-slate-950">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <Navigation />
            <main className="flex-1 overflow-y-auto">
              <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
