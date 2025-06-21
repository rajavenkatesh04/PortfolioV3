"use client"

import Link from "next/link";
import {useState, useEffect} from "react";
import Image from "next/image";
import {IoMdContact, IoMdClose} from "react-icons/io";
import {GoProjectRoadmap} from "react-icons/go";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { CiMenuBurger } from "react-icons/ci";
import { FaHome, FaUser } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside or on link
    const closeMobileMenu = () => {
        setIsOpen(false);
    };

    const navItems = [
        { href: "/", label: "Home", icon: FaHome },
        { href: "/#about", label: "About", icon: FaUser },
        { href: "/#projects", label: "Projects", icon: GoProjectRoadmap },
        { href: "/contact", label: "Contact", icon: IoMdContact },
    ];

    return(
        <>
            <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-black/50 backdrop-blur-xl border-b border-lime-400/20 shadow-lg shadow-lime-400/5'
                    : 'bg-transparent backdrop-blur-sm'
            }`}>
                <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0 group">
                            <Link href="/" onClick={closeMobileMenu}>
                                <div className="relative">
                                    <Image
                                        src="/logo light.png"
                                        alt="Logo"
                                        width={150}
                                        height={100}
                                        className="transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-emerald-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:block">
                            <ul className="flex items-center space-x-1">
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="group relative px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-lime-400/10 flex items-center gap-2"
                                        >
                                            <item.icon className="text-lime-400 text-sm group-hover:text-lime-300 transition-colors duration-300" />
                                            <span className="text-white group-hover:text-lime-300 transition-colors duration-300">
                                                {item.label}
                                            </span>
                                            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-lime-400 to-emerald-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                                        </Link>
                                    </li>
                                ))}

                                {/* Resume Download Button */}
                                <li className="ml-4">
                                    <a
                                        href="/raja_resume.pdf"
                                        download
                                        className="group relative px-6 py-2 bg-gradient-to-r from-lime-400 to-emerald-400 text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/25 hover:-translate-y-0.5 flex items-center gap-2"
                                    >
                                        <span className="relative z-10">Resume</span>
                                        <LiaFileDownloadSolid className="relative z-10 text-lg group-hover:animate-bounce" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="relative p-2 rounded-lg bg-slate-800/50 border border-lime-400/30 hover:bg-lime-400/10 transition-all duration-300"
                                aria-label="Toggle menu"
                            >
                                <div className="relative w-6 h-6">
                                    <CiMenuBurger
                                        className={`absolute text-xl text-lime-400 transition-all duration-300 ${
                                            isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                                        }`}
                                    />
                                    <IoMdClose
                                        className={`absolute text-xl text-lime-400 transition-all duration-300 ${
                                            isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                                        }`}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`lg:hidden transition-all duration-300 ease-in-out ${
                        isOpen
                            ? 'max-h-96 opacity-100'
                            : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                        <div className="border-t border-lime-400/20 bg-slate-900/50 backdrop-blur-lg rounded-b-2xl mt-2">
                            <ul className="py-4 space-y-2 px-4">
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            onClick={closeMobileMenu}
                                            className="group flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-white hover:bg-lime-400/10 hover:text-lime-300 transition-all duration-300"
                                        >
                                            <item.icon className="text-lime-400 text-lg group-hover:text-lime-300 transition-colors duration-300" />
                                            {item.label}
                                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}

                                {/* Mobile Resume Button */}
                                <li className="pt-2 border-t border-slate-700/50">
                                    <a
                                        href="/raja_resume.pdf"
                                        download
                                        className="group w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-lime-400 to-emerald-400 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/25"
                                        onClick={closeMobileMenu}
                                    >
                                        <span>Download Resume</span>
                                        <LiaFileDownloadSolid className="text-lg group-hover:animate-bounce" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                    onClick={closeMobileMenu}
                ></div>
            )}
        </>
    )
}