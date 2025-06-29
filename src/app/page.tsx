'use client'

import Discord from '@/components/icon/Discord'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { Github, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        const timer = setTimeout(() => {
            fetch('/api/visit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    // 如果你想在前端發送額外數據到後端，可以放在這裡
                    // 例如：page: 'home'
                })
            })
                .then((response) => {
                    if (response.ok) {
                        console.log('Visit notification sent to backend successfully.')
                    } else {
                        console.error('Failed to send visit notification to backend.')
                    }
                })
                .catch((error) => {
                    console.error('Error sending visit notification:', error)
                })
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    const t = useTranslations('Home')

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* navbar section */}
            <section id="navbar" className="sticky top-4 z-50 flex justify-center px-4">
                <nav className="flex justify-between items-center w-full max-w-4xl bg-card/40 backdrop-blur-md p-4 rounded-full shadow-lg border border-border transition-colors duration-300">
                    <h1 className="text-2xl font-bold tracking-tight pl-4">Paper</h1>
                    <ul className="flex space-x-6 items-center pr-4">
                        <li>
                            <Link
                                href="/"
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#contact"
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>
                </nav>
            </section>

            {/* hero section */}
            <section
                id="hero"
                className="min-h-[calc(100vh-69px)] flex items-center justify-center text-center p-8"
            >
                <div>
                    <Image
                        src="/avatar.jpg"
                        alt="avatar"
                        width={180}
                        height={180}
                        className="rounded-full mx-auto mb-8 shadow-lg border-2 border-border animate-fade-in"
                    />
                    <h2 className="text-[40px] md:text-[56px] font-extrabold mb-4 tracking-tight animate-slide-up">
                        {t('hero.greeting')}
                    </h2>
                    <p className="text-md md:text-xl max-w-2xl mx-auto mb-10 text-muted-foreground animate-fade-in-delay">
                        {t('hero.description')}
                    </p>
                    <div className="flex flex-col md:flex-row justify-center space-x-4">
                        <Link
                            href="/projects"
                            className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg"
                        >
                            {t('hero.cta')}
                        </Link>
                        <Link
                            href="/about"
                            className="px-8 py-3 border border-border text-foreground rounded-full text-lg font-semibold hover:bg-muted transition-colors duration-300"
                        >
                            {t('hero.about')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* contact section */}
            <section id="contact" className="py-20 px-8 bg-muted/20">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">聯絡我</h2>
                    <p className="text-lg mb-8 text-muted-foreground">
                        如果你有任何問題、合作機會，或是想聊聊技術，歡迎隨時聯絡我！
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Button asChild size="lg" className="w-40 flex items-center justify-center">
                            <a href="mailto:ericliu8888824@gmail.com">
                                <Mail className="mr-2 h-4 w-4" /> 電子郵件
                            </a>
                        </Button>
                        {/* <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="w-40 flex items-center justify-center"
                        >
                            <a
                                href="https://www.linkedin.com/in/%E7%B4%99%E9%A1%9E-%E5%8A%89-099198330/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedinIcon className="mr-2 h-4 w-4" /> LinkedIn
                            </a>
                        </Button> */}
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="w-40 flex items-center justify-center"
                        >
                            <a
                                href="https://github.com/Paper1988"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="mr-2 h-4 w-4" /> GitHub
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="w-40 flex items-center justify-center"
                        >
                            <a
                                href="https://discord.com/users/538639229220028416"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Discord className="mr-2 h-4 w-4" /> Discord
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* footer section */}
            <footer className="py-8 px-8 text-center text-muted-foreground border-t border-border">
                <p>&copy; {new Date().getFullYear()} Paper. 版權所有。</p>
            </footer>
        </main>
    )
}
