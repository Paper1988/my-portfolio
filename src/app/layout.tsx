import { ThemeProvider } from '@/components/ThemeProvider' // 引入我們剛剛建立的 ThemeProvider
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Paper - 個人作品集',
    description: '這是一個展示我的程式專案的個人作品集。'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="zh-Hant" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    )
}
