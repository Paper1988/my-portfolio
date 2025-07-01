'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsPage() {
    const t = useTranslations('Home')
    const projectsData = [
        {
            id: 1,
            title: 'Paper',
            description: t('projects.paper.description'),
            imageSrc: '/paper.png',
            technologies: ['Discord.js', 'MongoDB', 'Distube', 'Discord API', 'Railway.app'],
            linkText: t('projects.paper.demoText'),
            linkHref: 'https://discord.com/oauth2/authorize?client_id=869166906765103135'
        },
        {
            id: 2,
            title: 'DoContrib(開發中，尚未開放)',
            description: t('projects.docontrib.description'),
            imageSrc: '/DoContrib.jpg',
            technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Vercel'],
            linkText: t('projects.docontrib.demoText'),
            linkHref: '#'
        }
    ]

    return (
        <main className="min-h-screen bg-background text-foreground py-16 px-8">
            <div className="max-w-4xl mx-auto">
                <div className="px-0 py-8">
                    <Link
                        href="/"
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" /> 返回首頁
                    </Link>
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-5xl md:text-6xl font-extrabold text-center mb-12 tracking-tight"
                >
                    我的專案
                </motion.h1>

                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.map((project, i) => (
                        <div
                            key={project.id}
                            className="bg-card p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col"
                        >
                            {project.imageSrc && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                    className="relative w-full h-40 mb-4 bg-muted rounded-md overflow-hidden flex items-center justify-center"
                                >
                                    <Image
                                        src={project.imageSrc}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="contain"
                                        className="p-4"
                                    />
                                </motion.div>
                            )}
                            <h3 className="text-2xl font-bold mb-2 text-primary">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex-grow" />
                            <motion.a
                                href={project.linkHref}
                                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 font-semibold"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileTap={{ scale: 0.95 }}
                            >
                                {project.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                            </motion.a>
                        </div>
                    ))}
                </motion.div>
            </div>
        </main>
    )
}
