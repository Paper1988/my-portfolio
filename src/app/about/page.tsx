import { ArrowLeft } from 'lucide-react' // 導入返回圖標
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'About',
    description: '我的程式設計心路歷程與個人介紹。'
}

interface TimelineEvent {
    title: string
    description: string
    technologies?: string[]
}

interface TimelineYearGroup {
    year: string
    events: TimelineEvent[]
}

const timelineData: TimelineYearGroup[] = [
    {
        year: '2021',
        events: [
            {
                title: '初識程式：Discord.py',
                description:
                    '當時經營Discord伺服器風氣正夯，我也順應風氣想經營一個伺服器，因此接觸到了Discord裡的「機器人」功能。後來發現許多機器人需要付費，因此我想嘗試自創機器人，而開啟了我的程式設計旅程。透過在Youtube上自學，我成功地創造出了第一版 Paper 機器人。',
                technologies: ['Discord.py', 'Python', 'Discord API']
            }
        ]
    },
    {
        year: '2022',
        events: [
            {
                title: '探索網頁前端：HTML, CSS, JavaScript',
                description: '因為想要嘗試製作機器人的Dashboard，而開始學習網頁開發基礎。',
                technologies: ['HTML', 'CSS', 'JavaScript']
            },
            {
                title: '踏上新的航道：Javascript',
                description:
                    '發現discord.js的社群遠比discord.py活躍，且為了突破Python舒適圈，因此開始學習 Node.js 並接觸 discord.js(v13)。',
                technologies: ['Discord.js', 'Node.js', 'JavaScript']
            }
        ]
    },
    {
        year: '2024',
        events: [
            {
                title: '新機器人開發：Node.js 與 Discord.js',
                description:
                    '為了滿足社群需求開發許多新功能，並發布了我的第二版機器人「Paper📄」，同時重塑了機器人形象。',
                technologies: ['Node.js', 'Discord.js', 'MongoDB', 'Discord API']
            }
        ]
    },
    {
        year: '2025',
        events: [
            {
                title: '擁抱現代前端框架：Next.js 與 React 生態系',
                description:
                    '為了提升開發效率和網站性能，轉向學習 Next.js 和 React。理解組件化開發，並應用於作品集網站的重構。',
                technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
            }
        ]
    },
    {
        year: '現在',
        events: [
            {
                title: '持續學習與專案實踐',
                description:
                    '目前正積極探索更多領域，如資料庫優化、後端部署與演算法等，期待能打造出更多有影響力的產品。',
                technologies: ['AI', 'Algorithm', 'Full stack', 'Database']
            }
        ]
    }
]

export default function AboutPage() {
    const t = useTranslations('Home')
    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="max-w-4xl mx-auto px-8 py-8">
                <Link
                    href="/"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
                >
                    <ArrowLeft className="mr-2 h-5 w-5" /> 返回首頁
                </Link>
            </div>

            <section className="min-h-screen flex items-center justify-center py-16 px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 tracking-tight">
                        關於我
                    </h1>
                    <div className="max-w-4xl mx-auto text-left space-y-6">
                        <p className="text-xl leading-relaxed text-muted-foreground text-center">
                            {t('about.p1')}
                        </p>
                        <div className="text-lg leading-relaxed text-muted-foreground">
                            {[2, 3, 4].map((i) => (
                                <p
                                    key={i}
                                    className="text-lg leading-relaxed text-muted-foreground"
                                >
                                    {t(`about.p${i}`)}
                                    <br />
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="h-8 md:h-10"></div>
                </div>
            </section>

            <section className="py-16 px-8">
                {' '}
                {/* 時間線區塊的頂部和底部 padding */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-tight">
                        我的程式設計時間線
                    </h2>

                    <div className="relative border-l-2 border-border pl-6 ml-4 md:ml-8">
                        {timelineData.map((yearGroup, yearIndex) => (
                            <div key={yearIndex} className="mb-12 last:mb-0 relative">
                                <div className="absolute -left-12 top-0 flex items-center justify-end w-20 pr-4 h-8 bg-secondary text-secondary-foreground rounded-r-full shadow-md z-10">
                                    {yearGroup.year === '現在' ? (
                                        <span className="text-lg">~Now</span>
                                    ) : (
                                        <span className="text-sm font-semibold">
                                            {yearGroup.year}
                                        </span>
                                    )}
                                </div>

                                {/* 該年份下的所有事件 */}
                                <div className="grid gap-6">
                                    {yearGroup.events.map((event, eventIndex) => (
                                        <div
                                            key={eventIndex}
                                            className="bg-card p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl relative pl-16 pt-10"
                                        >
                                            <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">
                                                {event.title}
                                            </h3>
                                            <p className="text-muted-foreground mb-4">
                                                {event.description}
                                            </p>
                                            {event.technologies &&
                                                event.technologies.length > 0 && (
                                                    <div className="flex flex-wrap gap-2">
                                                        {event.technologies.map(
                                                            (tech, techIndex) => (
                                                                <span
                                                                    key={techIndex}
                                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
