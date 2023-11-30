import './contacts.css'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"]
});

export const metadata = {
  title: 'Контакты',
  description: 'UrFU Student Recovery and Transfer Service',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}