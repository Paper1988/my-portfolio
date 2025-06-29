import { ThemeProvider } from '@/components/ThemeProvider'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { Noto_Sans_TC, Outfit } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans_TC({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-noto'
})

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-outfit'
})

export const metadata: Metadata = {
    title: {
        default: 'Paper',
        template: '%s | Paper'
    },
    description:
        '我是 Paper，一名熱衷於打造優質使用者體驗的軟體開發者。這是一個展示我的程式專案、關於我的介紹以及聯絡方式的個人作品集網站。', // 更豐富的描述
    keywords: [
        'Paper',
        '作品集',
        '個人網站',
        '軟體開發',
        'Discord 機器人',
        'Next.js',
        '前端開發',
        '程式設計'
    ],

    openGraph: {
        title: 'Paper',
        description:
            '我是 Paper，一名熱衷於打造優質使用者體驗的軟體開發者。這是一個展示我的程式專案、關於我的介紹以及聯絡方式的個人作品集網站。',
        url: 'https://paperdesu.netlify.app',
        siteName: 'Paper',
        images: [
            {
                url: 'https://paperdesu.netlify.app/og.png',
                width: 1200,
                height: 630
            },
            // 你可以添加更多圖片，例如一個正方形的圖片
            {
                url: 'https://paperdesu.netlify.app/paper-icon.png',
                width: 400,
                height: 400
            }
        ],
        locale: 'zh_TW',
        type: 'website'
    },

    // 其他可選的 Meta Tags
    robots: 'index, follow' // 告訴搜尋引擎爬蟲是否索引和追蹤此頁面
    // icons: {
    //   icon: '/favicon.ico', // 網站圖標
    //   shortcut: '/shortcut-icon.png',
    //   apple: '/apple-touch-icon.png',
    // },
    // manifest: '/site.webmanifest' // PWA (Progressive Web App) 的 manifest 檔案
}

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const locale = await getLocale()
    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`${notoSans.variable} ${outfit.variable}`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NextIntlClientProvider>{children}</NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
