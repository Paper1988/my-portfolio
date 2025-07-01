'use client'

import clsx from 'clsx'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { JSX, useEffect, useRef, useState } from 'react'

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

const AnimatedTimelineEventCard = ({ event, delay }: { event: TimelineEvent; delay: number }) => {
    const itemRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.2
            }
        )

        if (itemRef.current) {
            observer.observe(itemRef.current)
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current)
            }
        }
    }, [])

    return (
        <div
            ref={itemRef}
            className={clsx(
                'bg-card p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl relative pl-16 pt-10',
                {
                    'animate-fade-in-up': isVisible,
                    'opacity-0': !isVisible
                }
            )}
            style={{ animationDelay: isVisible ? `${delay}ms` : '0ms' }}
        >
            <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 text-primary">
                {event.title}
            </h3>
            <p className="text-muted-foreground mb-4 font-sans">{event.description}</p>
            {event.technologies && event.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {event.technologies.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}

const charDelay = 0.01

export default function AboutPage() {
    const t = useTranslations('Home')

    let totalEventDelay = 0

    return (
        <motion.div initial="hidden" whileInView="visible" transition={{ staggerChildren: 0.04 }}>
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
                        <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-center mb-12 tracking-tight">
                            關於我
                        </h1>
                        <div className="max-w-4xl mx-auto text-left space-y-6">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                className="font-heading text-xl leading-relaxed text-muted-foreground text-center"
                            >
                                {t('about.p1')}
                            </motion.p>
                            <div className="text-lg leading-relaxed text-muted-foreground whitespace-pre-wrap">
                                {
                                    ([2, 3, 4] as const).reduce(
                                        (acc, i) => {
                                            const chars = Array.from(t(`about.p${i}`))
                                            const baseDelay = acc.totalChars * charDelay
                                            acc.totalChars += chars.length
                                            acc.elements.push(
                                                <p
                                                    key={i}
                                                    className="text-lg leading-relaxed text-muted-foreground"
                                                >
                                                    {chars.map((char, charIdx) => (
                                                        <motion.span
                                                            key={charIdx}
                                                            className="inline-block"
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            variants={{
                                                                hidden: {
                                                                    filter: 'blur(10px)',
                                                                    transform: 'translateY(20%)',
                                                                    opacity: 0
                                                                },
                                                                visible: {
                                                                    filter: 'blur(0)',
                                                                    transform: 'translateY(0)',
                                                                    opacity: 1
                                                                }
                                                            }}
                                                            transition={{
                                                                duration: 1,
                                                                ease: [0.25, 0.1, 0.25, 1],
                                                                delay:
                                                                    baseDelay + charIdx * charDelay
                                                            }}
                                                        >
                                                            {char === ' ' ? '\u00A0' : char}
                                                        </motion.span>
                                                    ))}
                                                </p>
                                            )
                                            return acc
                                        },
                                        { totalChars: 0, elements: [] as JSX.Element[] }
                                    ).elements
                                }
                            </div>
                        </div>
                        <div className="h-8 md:h-10"></div>
                    </div>
                </section>

                <section className="py-16 px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="font-heading text-3xl md:text-5xl font-bold text-center mb-10 tracking-tight"
                        >
                            Timeline
                        </motion.h1>

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

                                    <div className="grid gap-6">
                                        {yearGroup.events.map((event, eventIndex) => {
                                            const currentEventDelay = totalEventDelay
                                            totalEventDelay += 150

                                            return (
                                                <AnimatedTimelineEventCard
                                                    key={`${yearGroup.year}-${eventIndex}`}
                                                    event={event}
                                                    delay={currentEventDelay}
                                                />
                                            )
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </motion.div>
    )
}
