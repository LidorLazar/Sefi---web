
import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: 'ספי שמרוני מדריכת הורים ',
  description: 'Generated by create next app',


}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#FAF4F2]'>{children}</body>
      <Script src="/plugins/nagishli_beta.js" defer />
    </html>
  )
}
