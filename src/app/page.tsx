import { ProjectCard } from '@/components/ProjectCards'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github, LinkedinIcon, Mail } from 'lucide-react'
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
                                首頁
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                關於我
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                專案
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                聯絡
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
                        alt="頭像"
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
                <div className="max-w-3xl mx-auto text-left space-y-6">
                    <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                        {t('about.p1')}
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground">{t('about.p2')}</p>
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
                        <Button
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
                        </Button>
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
