import { Button } from '@/components/ui/button'
import { ArrowRight, Github } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
    imageSrc: string
    altText: string
    title: string
    description: string
    technologies: string[]
    demoLink?: string
    githubLink: string
    demoText?: string
}

export function ProjectCard({
    imageSrc,
    altText,
    title,
    description,
    technologies,
    demoLink,
    githubLink,
    demoText = '查看demo'
}: ProjectCardProps) {
    return (
        <div className="relative group overflow-hidden rounded-lg border bg-card text-card-foreground shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
            <Image
                src={imageSrc}
                alt={altText}
                width={400}
                height={225}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 tracking-tight">{title}</h3>
                <p className="text-muted-foreground text-base mb-4 line-clamp-3">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                    {demoLink && ( // 只有當 demoLink 存在時才渲染這個按鈕
                        <Button
                            variant="link"
                            asChild
                            className="text-primary hover:underline p-0 h-auto"
                        >
                            <a href={demoLink} target="_blank" rel="noopener noreferrer">
                                {demoText}{' '}
                                <ArrowRight className="ml-1 h-4 w-4 inline-block transition-transform duration-200 group-hover:translate-x-1" />
                            </a>
                        </Button>
                    )}
                    <Button variant="ghost" asChild className="hover:bg-muted p-0 h-auto">
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors duration-200" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
