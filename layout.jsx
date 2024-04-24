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