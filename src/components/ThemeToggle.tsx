'use client' // 這表示這是一個客戶端元件

import { Moon, Sun } from 'lucide-react' // 引入月亮和太陽圖標
import { useTheme } from 'next-themes'
import * as React from 'react'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    // 如果尚未渲染到客戶端，則不渲染任何內容，避免 hydration 錯誤
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null // 或者你可以返回一個加載狀態的按鈕
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            aria-label="切換主題"
        >
            {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
                <Moon className="h-5 w-5 text-blue-500" />
            )}
        </button>
    )
}
