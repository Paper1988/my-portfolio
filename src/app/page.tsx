'use client'

import { ProjectCard } from '@/components/ProjectCards'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Mail } from 'lucide-react'

export function Discord(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(0 0 0)"
        >
            <path
                d="M18.9419 5.55541C17.6473 4.94967 16.263 4.50945 14.8158 4.25879C14.638 4.58013 14.4304 5.01234 14.2872 5.35616C12.7488 5.1248 11.2244 5.1248 9.71431 5.35616C9.57116 5.01234 9.35878 4.58013 9.17947 4.25879C7.73069 4.50945 6.34478 4.95129 5.05016 5.5586C2.43887 9.5046 1.73099 13.3526 2.08493 17.1459C3.81688 18.4393 5.49534 19.225 7.14547 19.7391C7.55291 19.1784 7.91628 18.5823 8.22931 17.9541C7.63313 17.7276 7.06209 17.448 6.52256 17.1235C6.66569 17.0174 6.80572 16.9066 6.94097 16.7925C10.2318 18.3317 13.8074 18.3317 17.0589 16.7925C17.1958 16.9066 17.3358 17.0174 17.4774 17.1235C16.9362 17.4496 16.3637 17.7292 15.7675 17.9557C16.0805 18.5823 16.4423 19.18 16.8513 19.7407C18.503 19.2266 20.1831 18.4409 21.915 17.1459C22.3303 12.7485 21.2056 8.93585 18.9419 5.55541ZM8.67766 14.8131C7.68978 14.8131 6.87963 13.8908 6.87963 12.7678C6.87963 11.6447 7.67247 10.7209 8.67766 10.7209C9.68284 10.7209 10.493 11.6431 10.4757 12.7678C10.4772 13.8908 9.68284 14.8131 8.67766 14.8131ZM15.3223 14.8131C14.3344 14.8131 13.5243 13.8908 13.5243 12.7678C13.5243 11.6447 14.3171 10.7209 15.3223 10.7209C16.3275 10.7209 17.1376 11.6431 17.1203 12.7678C17.1203 13.8908 16.3275 14.8131 15.3223 14.8131Z"
                fill="#343C54"
            />
        </svg>
    )
}

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        // 使用 setTimeout 稍微延遲一下，避免在開發環境熱重載時頻繁觸發
        // 也可以確保頁面渲染完成
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
        }, 1000) // 延遲 1 秒

        return () => clearTimeout(timer) // 清除定時器，避免組件卸載後繼續執行
    }, []) // 空依賴陣列表示只在組件掛載時執行一次

    const t = useTranslations('Home')

    const projects = [
        {
            imageSrc: '/paper.png',
            altText: 'Paper 預覽圖',
            title: 'Paper',
            description: t('projects.paper.description'),
            technologies: ['Discord.js', 'MongoDB', 'Distube', 'Discord API', 'Railway.app'],
            demoLink: 'https://discord.com/oauth2/authorize?client_id=869166906765103135',
            githubLink: 'https://github.com/Paper1988/Paper',
            demoText: t('projects.paper.demoText')
        },
        {
            imageSrc: '/DoContrib.jpg',
            altText: 'DoContrib 預覽圖',
            title: 'DoContrib',
            description: t('projects.docontrib.description'),
            technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Vercel'],
            demoLink: 'https://docontrib.vercel.app/',
            githubLink: 'https://github.com/Paper1988/DoContrib',
            demoText: t('projects.docontrib.demoText')
        }
    ]

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* 導覽列區塊 */}
            <section
                id="navbar"
                className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm py-4 px-8 border-b border-border transition-colors duration-300"
            >
                <nav className="flex justify-between items-center max-w-6xl mx-auto">
                    <h1 className="text-2xl font-bold tracking-tight">Paper</h1>
                    <ul className="flex space-x-6 items-center">
                        <li>
                            <a
                                href="#hero"
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>
                </nav>
            </section>

            {/* Hero 區塊 */}
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
                    <Button
                        asChild
                        className="animate-scale-in bg-primary text-white hover:bg-primary/80 shadow-md rounded-xl px-6 py-3 text-sm"
                    >
                        <a href="#projects">
                            {t('hero.cta')} <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </section>

            {/* 關於我區塊 */}
            <section id="about" className="py-20 px-8 bg-muted/20">
                <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight text-center">
                    {t('about.title')}
                </h2>
                <div className="max-w-4xl mx-auto text-left space-y-6">
                    <p className="text-xl leading-relaxed mb-4 text-muted-foreground text-center">
                        {t('about.p1')}
                    </p>
                    <div className="text-lg leading-relaxed text-muted-foreground animate-scale-in">
                        {[2, 3, 4].map((i) => (
                            <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                                <br />
                                {t(`about.p${i}`)}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* 專案區塊 (Projects Section) */}
            <section id="projects" className="py-20 px-8 bg-background">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
                        我的專案
                    </h2>
                    <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 聯絡區塊 (Contact Section) */}
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

            {/* 頁尾 (Footer) */}
            <footer className="py-8 px-8 text-center text-muted-foreground border-t border-border">
                <p>&copy; {new Date().getFullYear()} Paper. 版權所有。</p>
            </footer>
        </main>
    )
}
