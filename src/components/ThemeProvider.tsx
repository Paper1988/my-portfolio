'use client'

import type { ThemeProviderProps } from 'next-themes'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </NextThemesProvider>
    )
}
