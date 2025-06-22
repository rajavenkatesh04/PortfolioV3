"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"
import { FaAnglesDown } from "react-icons/fa6"
import Link from "next/link"

gsap.registerPlugin(SplitText)

export default function SplitTextComponent() {
    const containerRef = useRef(null)
    const headingRef = useRef(null)

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current || !headingRef.current) return
            containerRef.current.style.visibility = "visible"

            // Create SplitText with masking for reveal effect
            const split = SplitText.create(headingRef.current, {
                type: "lines",
                linesClass: "split-line",
                mask: "lines",
                autoSplit: true,
                onSplit(self) {
                    gsap.set(self.lines, {
                        yPercent: 100
                    })
                    return gsap.to(self.lines, {
                        yPercent: 0,
                        duration: 1.8,
                        ease: "expo.out",
                        stagger: {
                            amount: 1.2,
                            from: "start"
                        },
                        delay: 0.5
                    })
                }
            })

            return () => {
                split.revert()
            }
        })
    }, [])

    return (
        <div
            ref={containerRef}
            className="flex flex-col justify-center items-center min-h-screen w-full text-center bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 px-8 py-16 box-border relative invisible transition-colors duration-200 overflow-hidden"
        >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-30 dark:opacity-20">
                <div className="grid-background"></div>
            </div>

            {/* Floating Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="floating-dot floating-dot-1"></div>
                <div className="floating-dot floating-dot-2"></div>
                <div className="floating-dot floating-dot-3"></div>
                <div className="floating-dot floating-dot-4"></div>
                <div className="floating-dot floating-dot-5"></div>
            </div>

            <div className="w-full max-w-6xl mx-auto relative z-10">
                <h1
                    ref={headingRef}
                    className="font-bold text-gray-600 dark:text-gray-400 leading-[1.1] m-0 w-full"
                    style={{
                        fontFamily: 'Josefin Sans, sans-serif',
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)'
                    }}
                >
                    Make yourself at{" "}
                    <span className="text-indigo-600 dark:text-lime-500">home</span>{" "}
                    <span className="text-indigo-600 dark:text-lime-500">—</span>{" "}
                    here's what I've been{" "}
                    <span className="text-indigo-600 dark:text-lime-500">working</span>{" "}
                    on.
                </h1>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <Link href="#about">
                    <FaAnglesDown className="animate-bounce opacity-70 text-indigo-600 dark:text-lime-500 text-2xl hover:text-gray-900 dark:hover:text-white transition-colors duration-300" />
                </Link>
            </div>

            <style jsx>{`
                .split-line {
                    overflow: hidden;
                    backface-visibility: hidden;
                }

                h1 {
                    font-kerning: none;
                    text-rendering: optimizeSpeed;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    transform: translateZ(0);
                }

                .grid-background {
                    width: 100%;
                    height: 100%;
                    background-image:
                        linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
                    background-size: 50px 50px;
                    animation: gridMove 20s linear infinite;
                }

                :global(.dark) .grid-background {
                    background-image:
                        linear-gradient(rgba(163, 230, 53, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(163, 230, 53, 0.1) 1px, transparent 1px);
                }

                @keyframes gridMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(50px, 50px); }
                }

                .floating-dot {
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    background: rgba(99, 102, 241, 0.5);
                    border-radius: 50%;
                    animation: float 6s ease-in-out infinite;
                }

                :global(.dark) .floating-dot {
                    background: rgba(163, 230, 53, 0.5);
                }

                .floating-dot-1 {
                    top: 20%;
                    left: 10%;
                    animation-delay: 0s;
                    animation-duration: 8s;
                }

                .floating-dot-2 {
                    top: 60%;
                    right: 15%;
                    animation-delay: -2s;
                    animation-duration: 10s;
                }

                .floating-dot-3 {
                    bottom: 30%;
                    left: 20%;
                    animation-delay: -4s;
                    animation-duration: 7s;
                }

                .floating-dot-4 {
                    top: 40%;
                    right: 30%;
                    animation-delay: -1s;
                    animation-duration: 9s;
                }

                .floating-dot-5 {
                    bottom: 20%;
                    right: 10%;
                    animation-delay: -3s;
                    animation-duration: 11s;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) translateX(0px) scale(1);
                        opacity: 0.5;
                    }
                    33% {
                        transform: translateY(-30px) translateX(15px) scale(1.5);
                        opacity: 0.8;
                    }
                    66% {
                        transform: translateY(15px) translateX(-10px) scale(0.8);
                        opacity: 0.6;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .grid-background,
                    .floating-dot {
                        animation: none;
                    }
                }
            `}</style>
        </div>
    )
}
