"use client"

import Link from "next/link";
import {useState, useEffect} from "react";
import Image from "next/image";
import {IoMdContact, IoMdClose} from "react-icons/io";
import {GoProjectRoadmap} from "react-icons/go";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { CiMenuBurger } from "react-icons/ci";
import { PiArticleNyTimesFill } from "react-icons/pi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: "/contact", label: "Contact", icon: IoMdContact },
        { href: "#projects", label: "Projects", icon: GoProjectRoadmap },
        { href: "#blog", label: "Blog", icon: PiArticleNyTimesFill },
        { href: "/raja_resume.pdf", label: "Resume", icon: LiaFileDownloadSolid, download: true }
    ];

    return(
        <nav className={`w-full fixed top-0 z-50 transition-all duration-700 ease-out ${
            scrolled
                ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-lime-400/5'
                : 'bg-transparent backdrop-blur-sm'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex justify-between items-center transition-all duration-500 ${
                    scrolled ? 'h-14' : 'h-20'
                }`}>
                    {/* Logo with glow effect */}
                    <div className="flex-shrink-0 group">
                        <Link href="/" className="block relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-emerald-400/20 rounded-full blur-xl scale-0 group-hover:scale-110 transition-transform duration-500"></div>
                            <Image
                                src="/logo light.png"
                                alt="Logo"
                                width={150}
                                height={100}
                                className={`relative z-10 transition-all duration-500 ${
                                    scrolled ? 'h-8 w-auto' : 'h-12 w-auto'
                                }`}
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu with creative hover effects */}
                    <div className="hidden md:block">
                        <ul className="flex items-center space-x-2">
                            {navItems.map((item, index) => (
                                <li key={index} className="relative group">
                                    {item.download ? (
                                        <a
                                            href={item.href}
                                            download
                                            className="relative flex items-center px-6 py-3 text-sm font-medium text-zinc-300 hover:text-white transition-all duration-300 overflow-hidden"
                                        >
                                            {/* Animated background */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-lime-400/10 to-emerald-400/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

                                            {/* Animated underline */}
                                            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-lime-400 to-emerald-400 group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out"></div>

                                            {/* Content */}
                                            <span className="relative z-10 mr-2">{item.label}</span>
                                            <item.icon className="relative z-10 text-lg text-lime-400 group-hover:text-emerald-400 group-hover:rotate-12 transition-all duration-300" />

                                            {/* Floating particles effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-lime-400 rounded-full animate-ping"></div>
                                                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-ping animation-delay-200"></div>
                                            </div>
                                        </a>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="relative flex items-center px-6 py-3 text-sm font-medium text-zinc-300 hover:text-white transition-all duration-300 overflow-hidden"
                                        >
                                            {/* Animated background */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-lime-400/10 to-emerald-400/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

                                            {/* Animated underline */}
                                            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-lime-400 to-emerald-400 group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out"></div>

                                            {/* Content */}
                                            <span className="relative z-10 mr-2">{item.label}</span>
                                            <item.icon className="relative z-10 text-lg text-lime-400 group-hover:text-emerald-400 group-hover:rotate-12 transition-all duration-300" />

                                            {/* Floating particles effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-lime-400 rounded-full animate-ping"></div>
                                                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-ping animation-delay-200"></div>
                                            </div>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Menu Button with morphing animation */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative p-3 rounded-xl bg-gradient-to-r from-lime-400/10 to-emerald-400/10 border border-lime-400/20 hover:border-lime-400/40 transition-all duration-300 group"
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-6 h-6">
                                <div className={`absolute inset-0 transition-all duration-500 ease-out ${
                                    isOpen ? 'rotate-180 scale-75' : 'rotate-0 scale-100'
                                }`}>
                                    {isOpen ?
                                        <IoMdClose className="w-full h-full text-lime-400" /> :
                                        <CiMenuBurger className="w-full h-full text-lime-400" />
                                    }
                                </div>
                            </div>

                            {/* Pulsing ring effect */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-lime-400/20 to-emerald-400/20 scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu with slide and fade animation */}
                <div className={`md:hidden overflow-hidden transition-all duration-700 ease-out ${
                    isOpen
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                }`}>
                    <div className="border-t border-gradient-to-r from-lime-400/20 to-emerald-400/20 bg-black/95 backdrop-blur-xl">
                        <ul className="py-6 space-y-2">
                            {navItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={`transform transition-all duration-500 ease-out ${
                                        isOpen
                                            ? 'translate-x-0 opacity-100'
                                            : 'translate-x-8 opacity-0'
                                    }`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    {item.download ? (
                                        <a
                                            href={item.href}
                                            download
                                            className="relative group flex items-center px-6 py-4 text-sm font-medium text-zinc-300 hover:text-white transition-all duration-300 overflow-hidden"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {/* Mobile hover effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-lime-400/5 to-emerald-400/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                                            <span className="relative z-10 mr-3">{item.label}</span>
                                            <item.icon className="relative z-10 text-xl text-lime-400 group-hover:text-emerald-400 transition-all duration-300" />

                                            {/* Side accent line */}
                                            <div className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-lime-400 to-emerald-400 group-hover:h-full transition-all duration-300"></div>
                                        </a>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="relative group flex items-center px-6 py-4 text-sm font-medium text-zinc-300 hover:text-white transition-all duration-300 overflow-hidden"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {/* Mobile hover effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-lime-400/5 to-emerald-400/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                                            <span className="relative z-10 mr-3">{item.label}</span>
                                            <item.icon className="relative z-10 text-xl text-lime-400 group-hover:text-emerald-400 transition-all duration-300" />

                                            {/* Side accent line */}
                                            <div className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-lime-400 to-emerald-400 group-hover:h-full transition-all duration-300"></div>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}