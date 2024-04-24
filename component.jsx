=== component.jsx ===

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kgTISvcMzkw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div key="1" className="font-serif">
      <header className="bg-[url('/el-salvador.jpg')] bg-cover bg-center h-[60vh] flex items-center justify-center">
        <div className="text-black">
          <h1 className="text-5xl font-bold">Palestra Bureau</h1>
          <p className="text-xl">August 12th - 16th</p>
          <p className="text-xl">National Library</p>
        </div>
      </header>
      <main>
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Event Schedule</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-2">
                  <h3 className="text-xl font-bold">Philosophy of the State</h3>
                  <p className="text-gray-500 dark:text-gray-400">August 12th</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-2">
                  <h3 className="text-xl font-bold">Designing the State</h3>
                  <p className="text-gray-500 dark:text-gray-400">August 13th</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-2">
                  <h3 className="text-xl font-bold">The People as the Supreme Law</h3>
                  <p className="text-gray-500 dark:text-gray-400">August 14th</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-2">
                  <h3 className="text-xl font-bold">Decentralizing Sovereignty</h3>
                  <p className="text-gray-500 dark:text-gray-400">August 15th</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-2">
                  <h3 className="text-xl font-bold">The State as a Work of Art</h3>
                  <p className="text-gray-500 dark:text-gray-400">August 16th</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Ticket Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Series Ticket</CardTitle>
                    <CardDescription>August 12th - 16th</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-4xl font-bold">$299</div>
                    <Button className="w-full" variant="primary">
                      Buy Ticket
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Series Ticket + Accommodation</CardTitle>
                    <CardDescription>August 11th - 17th</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-4xl font-bold">$1799</div>
                    <Button className="w-full" variant="primary">
                      Buy Ticket
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

=== styles.css ===

body {
  font-family: var(--font-eczar), serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-caudex), serif;
}

=== layout.jsx ===

// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Caudex } from 'next/font/google'
import { Eczar } from 'next/font/google'
import './styles.css'

const caudex = Caudex({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caudex',
})
const eczar = Eczar({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-eczar',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={caudex.variable + eczar.variable}>
        {children}
      </body>
    </html>
  )
}