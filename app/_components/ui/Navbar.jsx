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
import {ThemeContext} from "styled-components";
import {useTheme} from "next-themes";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const { theme } = useTheme();
    const logoSrc = theme === "dark" ? "/logo light.png" : "/logo dark.png";

    return (
        <nav className="w-full fixed top-0 z-50 bg-white dark:bg-transparent dark:backdrop-blur-xl text-gray-900 dark:text-white dark:sm:bg-black/10 transition-colors duration-200">
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
                            <li>
                                <ThemeToggle />
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-lime-500 transition-colors duration-300 inline-flex items-center"
                                >
                                    Contact
                                    <IoMdContact className="mx-2 text-indigo-600 dark:text-lime-400 text-xl" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#projects"
                                    className="py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-lime-500 transition-colors duration-300 inline-flex items-center"
                                >
                                    Projects
                                    <GoProjectRoadmap className="mx-2 text-indigo-600 dark:text-lime-400 text-xl" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#blog"
                                    className="py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-lime-500 transition-colors duration-300 inline-flex items-center"
                                >
                                    Blog
                                    <PiArticleNyTimesFill className="mx-2 text-indigo-600 dark:text-lime-400 text-xl" />
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="/raja_resume.pdf"
                                    download
                                    className="py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-lime-500 transition-colors duration-300 inline-flex items-center"
                                >
                                    Resume
                                    <LiaFileDownloadSolid className="mx-2 text-indigo-600 dark:text-lime-400 text-xl" />
                                </a>
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
                            <li>
                                <Link
                                    href="/contact"
                                    className="py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-lime-500 transition-colors duration-300 inline-flex items-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact
                                    <IoMdContact className="mx-2 text-indigo-600 dark:text-lime-500 text-xl" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#projects"
                                    className="py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-lime-500 transition-colors duration-300 inline-flex items-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Projects
                                    <GoProjectRoadmap className="mx-2 text-indigo-600 dark:text-lime-500 text-xl" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#blog"
                                    className="py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-lime-500 transition-colors duration-300 inline-flex items-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Blog
                                    <PiArticleNyTimesFill className="mx-2 text-indigo-600 dark:text-lime-500 text-xl" />
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="/raja_resume.pdf"
                                    download
                                    className="py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-lime-500 transition-colors duration-300 inline-flex items-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Resume
                                    <LiaFileDownloadSolid className="mx-2 text-indigo-600 dark:text-lime-500 text-xl" />
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}