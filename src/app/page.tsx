import { ProjectCard } from '@/components/ProjectCards' // 引入我們剛剛創建的 ProjectCard 元件
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github, LinkedinIcon, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
    // 定義專案資料陣列
    const projects = [
        {
            imageSrc: '/paper.png',
            altText: 'Paper 預覽圖',
            title: 'Paper',
            description:
                '這個專案是一個 Discord 機器人。它可以幫助你管理你的 Discord 伺服器、播放音樂、創建抽獎活動，以及更多功能。',
            technologies: ['Discord.js', 'MongoDB', 'Distube', 'Discord API', 'Railway.app'],
            demoLink: 'https://discord.com/oauth2/authorize?client_id=869166906765103135',
            githubLink: 'https://github.com/Paper1988/Paper',
            demoText: '邀請機器人' // 自訂演示連結文字
        },
        {
            imageSrc: '/DoContrib.jpg',
            altText: 'DoContrib 預覽圖',
            title: 'DoContrib',
            description:
                '這個專案是一個貢獻追蹤網頁。它使用了Next.js、TailwindCSS、MUI、TypeScript，並使用Supabase資料庫、Vercel託管服務。',
            technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'TypeScript'],
            demoLink: 'https://docontrib.vercel.app/', // 替換為你的 DoContrib 演示連結
            githubLink: 'https://github.com/Paper1988/DoContrib' // 替換為你的 DoContrib GitHub 連結
            // demoText 會使用預設值 "查看演示"
        }
        // 如果未來有新專案，直接在這裡新增一個物件即可
        // {
        //   imageSrc: "/your-new-project-image.jpg",
        //   altText: "新專案預覽圖",
        //   title: "新專案名稱",
        //   description: "新專案的簡短描述。",
        //   technologies: ["React", "Express"],
        //   demoLink: "#",
        //   githubLink: "#",
        // },
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

            {/* 首頁區塊 (Hero Section) */}
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
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight animate-slide-up">
                        嗨，我是 <span className="text-primary">Paper</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-muted-foreground animate-fade-in-delay">
                        プログラミングに夢中の高校生です
                        <br />
                        ユーザー体験を一番に考えて、コードを書くのが大好きです
                        <br />
                        小さな画面から、わくわくするような何かを生み出していきたいと思っています
                    </p>
                    <Button asChild className="animate-scale-in">
                        <a href="#projects">
                            查看我的專案 <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </section>

            {/* 關於我區塊 (About Section) */}
            <section id="about" className="py-20 px-8 bg-muted/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">關於我</h2>
                    <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                        我是一名來自台灣的高中生，專注於Javascript
                        專案的開發，像是Discord機器人、網站等。
                        我熱衷於解決問題，並透過程式碼創造有價值的產品。我喜歡學習新技術，並不斷提升自己的技能。
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        在我的業餘時間，我喜歡、看書、玩遊戲、聽音樂...
                        我相信持續學習和探索是成為一名優秀開發者的關鍵。
                    </p>
                </div>
            </section>

            {/* 專案區塊 (Projects Section) */}
            <section id="projects" className="py-20 px-8 bg-background">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
                        我的專案
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
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
