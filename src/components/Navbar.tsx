'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    return (
        <AnimatePresence>
            <section id="navbar" className="sticky top-4 z-50 flex justify-center px-4">
                <nav className="max-w-4xl bg-card/20 backdrop-blur-md shadow-lg border border-border transition-colors duration-300 w-[calc(100%-2rem)] mx-4 p-2 flex justify-between items-center rounded-full md:w-full md:max-w-4xl md:mx-auto md:p-4">
                    <h1 className="text-2xl font-bold tracking-tight pl-4 flex-grow">Paper</h1>
                    <ul className="hidden md:flex md:flex-row md:items-center md:space-x-6 md:pr-4">
                        <li>
                            <Link
                                href="/"
                                className="text-base text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-base text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className="text-base text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#contact"
                                className="text-base text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>
                    <div className="md:hidden">
                        <DropdownMenu onOpenChange={setIsMenuOpen}>
                            <DropdownMenuTrigger asChild>
                                <button
                                    className="p-2 rounded-md text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary transition-transform duration-300 flex items-center justify-center"
                                    aria-label="Toggle navigation menu"
                                    style={{ width: 32, height: 32 }}
                                >
                                    <motion.div
                                        animate={{
                                            rotate: isMenuOpen ? 180 : 0,
                                            opacity: isMenuOpen ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        style={{
                                            position: 'absolute',
                                            visibility: isMenuOpen ? 'visible' : 'hidden'
                                        }}
                                    >
                                        <X className="h-6 w-6" />
                                    </motion.div>
                                    <motion.div
                                        animate={{
                                            rotate: isMenuOpen ? 180 : 0,
                                            opacity: isMenuOpen ? 0 : 1
                                        }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        style={{
                                            position: 'absolute',
                                            visibility: !isMenuOpen ? 'visible' : 'hidden'
                                        }}
                                    >
                                        <Menu className="h-6 w-6" />
                                    </motion.div>
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuItem asChild>
                                    <Link href="/">Home</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/about">About</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/projects">Projects</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="#contact">Contact</Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <ThemeToggle />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </nav>
            </section>
        </AnimatePresence>
    )
}
