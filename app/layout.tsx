import './globals.css'

export const metadata = {
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#FAF4F2]'>{children}</body>
    </html>
  )
}
