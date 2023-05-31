import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '700',
  subsets: ['latin']
})

export const metadata = {
  title: 'UI Youtube',
  description: 'UI of Youtube Website made with ❤️ by Felipe Cepluki',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
