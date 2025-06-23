"use client"

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { IoMdContact, IoMdClose } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { CiMenuBurger } from "react-icons/ci";
import { PiArticleNyTimesFill } from "react-icons/pi";
import ThemeToggle from "@/app/_components/ThemeToggle";
import { useTheme } from "next-themes";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const { theme } = useTheme();
    const logoSrc = theme === "dark" ? "/logo light.png" : "/logo dark.png";

    return (
        <nav className="w-full fixed top-0 z-50 bg-white/10 backdrop-blur-xl dark:bg-transparent dark:backdrop-blur-xl text-gray-900 dark:text-white dark:sm:bg-black/10 transition-colors duration-200">
            <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-2">
                <div className="flex justify-between items-center h-16 md:border-b md:border-b-indigo-300 dark:md:border-b-lime-300">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                src={logoSrc}
                                alt="Logo"
                                width={150}
                                height={100}
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <ul className="flex space-x-8 items-center">
                            <li className="relative group">
                                <Link
                                    href="#contact"
                                    className="relative flex items-center py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-lime-500 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Animated background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-teal-400/10 dark:from-lime-400/10 dark:to-emerald-400/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

                                    {/* Animated underline */}
                                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-teal-400 dark:from-lime-400 dark:to-emerald-400 group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out"></div>

                                    {/* Content */}
                                    <span className="relative z-10 mr-2">Contact</span>
                                    <IoMdContact className="relative z-10 text-xl text-indigo-600 dark:text-lime-400 group-hover:text-teal-400 dark:group-hover:text-emerald-400 group-hover:rotate-12 transition-all duration-300" />

                                    {/* Floating particles effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-indigo-400 dark:bg-lime-400 rounded-full animate-ping"></div>
                                        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-teal-400 dark:bg-emerald-400 rounded-full animate-ping animation-delay-200"></div>
                                    </div>
                                </Link>
                            </li>
                            <li className="relative group">
                                <Link
                                    href="#projects"
                                    className="relative flex items-center py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-lime-500 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Animated background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-teal-400/10 dark:from-lime-400/10 dark:to-emerald-400/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

                                    {/* Animated underline */}
                                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-teal-400 dark:from-lime-400 dark:to-emerald-400 group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out"></div>

                                    {/* Content */}
                                    <span className="relative z-10 mr-2">Projects</span>
                                    <GoProjectRoadmap className="relative z-10 text-xl text-indigo-600 dark:text-lime-400 group-hover:text-teal-400 dark:group-hover:text-emerald-400 group-hover:rotate-12 transition-all duration-300" />

                                    {/* Floating particles effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-indigo-400 dark:bg-lime-400 rounded-full animate-ping"></div>
                                        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-teal-400 dark:bg-emerald-400 rounded-full animate-ping animation-delay-200"></div>
                                    </div>
                                </Link>
                            </li>
                            <li className="relative group">
                                <Link
                                    href="https://blog.rajavenkatesh.me"
                                    target="_blank"
                                    className="relative flex items-center py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-lime-500 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Animated background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-teal-400/10 dark:from-lime-400/10 dark:to-emerald-400/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

                                    {/* Animated underline */}
                                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-teal-400 dark:from-lime-400 dark:to-emerald-400 group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out"></div>

                                    {/* Content */}
                                    <span className="relative z-10 mr-2">Blog</span>
                                    <PiArticleNyTimesFill className="relative z-10 text-xl text-indigo-600 dark:text-lime-400 group-hover:text-teal-400 dark:group-hover:text-emerald-400 group-hover:rotate-12 transition-all duration-300" />

                                    {/* Floating particles effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-indigo-400 dark:bg-lime-400 rounded-full animate-ping"></div>
                                        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-teal-400 dark:bg-emerald-400 rounded-full animate-ping animation-delay-200"></div>
                                    </div>
                                </Link>
                            </li>
                            <li className="relative group">
                                <a
                                    href="/raja_resume.pdf"
                                    download
                                    className="relative flex items-center py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-lime-500 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Animated background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-teal-400/10 dark:from-lime-400/10 dark:to-emerald-400/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

                                    {/* Animated underline */}
                                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-teal-400 dark:from-lime-400 dark:to-emerald-400 group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out"></div>

                                    {/* Content */}
                                    <span className="relative z-10 mr-2">Resume</span>
                                    <LiaFileDownloadSolid className="relative z-10 text-xl text-indigo-600 dark:text-lime-400 group-hover:text-teal-400 dark:group-hover:text-emerald-400 group-hover:rotate-12 transition-all duration-300" />

                                    {/* Floating particles effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-indigo-400 dark:bg-lime-400 rounded-full animate-ping"></div>
                                        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-teal-400 dark:bg-emerald-400 rounded-full animate-ping animation-delay-200"></div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <ThemeToggle />
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex gap-4">
                        <ThemeToggle />
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? (
                                <IoMdClose className="text-2xl text-indigo-600 dark:text-lime-400" />
                            ) : (
                                <CiMenuBurger className="text-2xl text-indigo-600 dark:text-lime-400" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Navigation */}
                {isOpen && (
                    <div className="border-t border-t-indigo-300 dark:border-t-lime-300 mb-5 md:hidden">
                        <ul className="py-5 space-y-5">
                            <li className="relative group">
                                <Link
                                    href="/contact"
                                    className="relative flex items-center py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-lime-500 transition-all duration-300 overflow-hidden"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {/* Mobile hover effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/5 to-teal-400/5 dark:from-lime-400/5 dark:to-emerald-400/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                                    <span className="relative z-10 mr-3">Contact</span>
                                    <IoMdContact className="relative z-10 text-xl text-indigo-600 dark:text-lime-400 group-hover:text-teal-400 dark:group-hover:text-emerald-400 transition-all duration-300" />

                                    {/* Side accent line */}
                                    <div className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-indigo-400 to-teal-400 dark:from-lime-400 dark:to-emerald-400 group-hover:h-full transition-all duration-300"></div>
                                </Link>
                            </li>
                            <li className="relative group">
                                <Link
                                    href="#projects"
                                    className="relative flex items-center py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-lime-500 transition-all duration-300 overflow-hidden"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {/* Mobile hover effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/5 to-teal-400/5 dark:from-lime-400/5 dark:to-emerald-400/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                                    <span className="relative z-10 mr-3">Projects</span>
                                    <GoProjectRoadmap className="relative z-10 text-xl text-indigo-600 dark:text-lime-400 group-hover:text-teal-400 dark:group-hover:text-emerald-400 transition-all duration-300" />

                                    {/* Side accent line */}
                                    <div className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-indigo-400 to-teal-400 dark:from-lime-400 dark:to-emerald-400 group-hover:h-full transition-all duration-300"></div>
                                </Link>
                            </li>
                            <li className="relative group">
                                <Link
                                    href="#blog"
                                    className="relative flex items-center py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-lime-500 transition-all duration-300 overflow-hidden"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {/* Mobile hover effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/5 to-teal-400/5 dark:from-lime-400/5 dark:to-emerald-400/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                                    <span className="relative z-10 mr-3">Blog</span>
                                    <PiArticleNyTimesFill className="relative z-10 text-xl text-indigo-600 dark:text-lime-400 group-hover:text-teal-400 dark:group-hover:text-emerald-400 transition-all duration-300" />

                                    {/* Side accent line */}
                                    <div className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-indigo-400 to-teal-400 dark:from-lime-400 dark:to-emerald-400 group-hover:h-full transition-all duration-300"></div>
                                </Link>
                            </li>
                            <li className="relative group">
                                <a
                                    href="/raja_resume.pdf"
                                    download
                                    className="relative flex items-center py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-lime-500 transition-all duration-300 overflow-hidden"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {/* Mobile hover effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/5 to-teal-400/5 dark:from-lime-400/5 dark:to-emerald-400/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                                    <span className="relative z-10 mr-3">Resume</span>
                                    <LiaFileDownloadSolid className="relative z-10 text-xl text-indigo-600 dark:text-lime-400 group-hover:text-teal-400 dark:group-hover:text-emerald-400 transition-all duration-300" />

                                    {/* Side accent line */}
                                    <div className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-indigo-400 to-teal-400 dark:from-lime-400 dark:to-emerald-400 group-hover:h-full transition-all duration-300"></div>
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}