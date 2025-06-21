"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"
import { FaAnglesDown, FaCode, FaStar } from "react-icons/fa6"
import { FiArrowDown } from "react-icons/fi"
import Link from "next/link"

gsap.registerPlugin(SplitText)

export default function SplitTextComponent() {
    const containerRef = useRef(null)
    const headingRef = useRef(null)
    const subtitleRef = useRef(null)
    const decorativeRef = useRef(null)
    const floatingElementsRef = useRef([])

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current || !headingRef.current) return

            containerRef.current.style.visibility = "visible"

            // Timeline for coordinated animations
            const tl = gsap.timeline()

            // Animate background gradient
            tl.fromTo(containerRef.current,
                {
                    background: "linear-gradient(135deg, #0f0f23 0%, #000000 100%)"
                },
                {
                    background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
                    duration: 2,
                    ease: "power2.out"
                }, 0
            )

            // Create SplitText with enhanced reveal effect
            const split = SplitText.create(headingRef.current, {
                type: "lines,words",
                linesClass: "split-line",
                wordsClass: "split-word",
                mask: "lines",
                autoSplit: true,
                onSplit(self) {
                    // Set initial state
                    gsap.set(self.lines, {
                        yPercent: 120,
                        rotationX: 45,
                        transformOrigin: "center bottom"
                    })

                    // Animate the reveal with 3D effect
                    tl.to(self.lines, {
                        yPercent: 0,
                        rotationX: 0,
                        duration: 1.6,
                        ease: "expo.out",
                        stagger: {
                            amount: 0.8,
                            from: "start"
                        }
                    }, 0.3)

                    return tl
                }
            })

            // Animate subtitle
            if (subtitleRef.current) {
                gsap.set(subtitleRef.current, {
                    opacity: 0,
                    y: 30,
                    scale: 0.9
                })

                tl.to(subtitleRef.current, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "back.out(1.7)"
                }, 1.5)
            }

            // Animate decorative elements
            if (decorativeRef.current) {
                gsap.set(decorativeRef.current.children, {
                    opacity: 0,
                    scale: 0,
                    rotation: 180
                })

                tl.to(decorativeRef.current.children, {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    stagger: 0.1
                }, 2)
            }

            // Animate floating elements
            floatingElementsRef.current.forEach((el, index) => {
                if (el) {
                    gsap.set(el, {
                        opacity: 0,
                        scale: 0,
                        x: gsap.utils.random(-100, 100),
                        y: gsap.utils.random(-100, 100)
                    })

                    tl.to(el, {
                        opacity: 0.6,
                        scale: 1,
                        x: 0,
                        y: 0,
                        duration: 1.2,
                        ease: "elastic.out(1, 0.75)",
                        delay: index * 0.2
                    }, 1.8)

                    // Continuous floating animation
                    gsap.to(el, {
                        y: "+=20",
                        duration: gsap.utils.random(2, 3),
                        ease: "sine.inOut",
                        yoyo: true,
                        repeat: -1,
                        delay: gsap.utils.random(0, 2)
                    })
                }
            })

            return () => {
                split.revert()
                tl.kill()
            }
        })
    }, [])

    const addToFloatingRefs = (el) => {
        if (el && !floatingElementsRef.current.includes(el)) {
            floatingElementsRef.current.push(el)
        }
    }

    return (
        <div
            ref={containerRef}
            className="flex flex-col justify-center items-center min-h-screen w-full text-center relative invisible overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #0f0f23 0%, #000000 100%)"
            }}
        >
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-2 h-2 bg-lime-400/30 rounded-full animate-pulse"
                     ref={addToFloatingRefs}></div>
                <div className="absolute top-1/4 right-20 w-1 h-1 bg-emerald-400/40 rounded-full animate-pulse"
                     ref={addToFloatingRefs} style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-cyan-400/20 rounded-full animate-pulse"
                     ref={addToFloatingRefs} style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 right-10 w-2 h-2 bg-lime-300/25 rounded-full animate-pulse"
                     ref={addToFloatingRefs} style={{animationDelay: '0.5s'}}></div>
            </div>

            {/* Gradient overlays */}
            <div className="absolute top-20 left-20 w-40 h-40 bg-lime-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-52 h-52 bg-emerald-400/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-lime-400/10 to-transparent rounded-full blur-2xl"></div>

            <div className="w-full max-w-6xl mx-auto px-8 relative z-10">
                {/* Decorative elements */}
                <div ref={decorativeRef} className="flex justify-center gap-4 mb-8">
                    <div className="p-3 bg-lime-400/10 rounded-full border border-lime-400/20">
                        <FaCode className="text-lime-400 text-xl" />
                    </div>
                    <div className="p-3 bg-emerald-400/10 rounded-full border border-emerald-400/20">
                        <FaStar className="text-emerald-400 text-xl" />
                    </div>
                </div>

                {/* Main heading */}
                <h1
                    ref={headingRef}
                    className="font-bold text-gray-300 leading-[1.1] m-0 w-full mb-8 perspective-1000"
                    style={{
                        fontFamily: 'Josefin Sans, sans-serif',
                        fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                        textShadow: '0 0 40px rgba(132, 204, 22, 0.3)'
                    }}
                >
                    Make yourself at{" "}
                    <span className="bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                        home
                    </span>{" "}
                    <span className="text-lime-400">—</span>{" "}
                    here's what I've been{" "}
                    <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent">
                        crafting
                    </span>
                </h1>

                {/* Subtitle */}
                <p
                    ref={subtitleRef}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                >
                    Welcome to my digital playground where creativity meets code,
                    and ideas transform into <span className="text-lime-400 font-semibold">extraordinary experiences</span>.
                </p>

                {/* Feature badges */}
                <div className="flex flex-wrap justify-center gap-3 mt-8 opacity-0" ref={subtitleRef}>
                    {['Full-Stack', 'UI/UX', 'Creative', 'Innovative'].map((badge, index) => (
                        <span
                            key={badge}
                            className="px-4 py-2 bg-slate-800/50 border border-lime-400/30 rounded-full text-sm text-lime-300 hover:bg-lime-400/10 transition-all duration-300 cursor-default hover:scale-105"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            {badge}
                        </span>
                    ))}
                </div>
            </div>

            {/* Enhanced scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll to explore</span>
                <Link href="#about" className="group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-lime-400/20 rounded-full blur group-hover:bg-lime-400/30 transition-colors duration-300"></div>
                        <div className="relative p-3 border border-lime-400/30 rounded-full group-hover:border-lime-400/60 transition-all duration-300">
                            <FiArrowDown className="text-lime-400 text-xl group-hover:text-lime-300 group-hover:animate-bounce transition-colors duration-300" />
                        </div>
                    </div>
                </Link>
            </div>

            <style jsx>{`
                .split-line {
                    overflow: hidden;
                    backface-visibility: hidden;
                    perspective: 1000px;
                }
                
                .split-word {
                    display: inline-block;
                    transform-style: preserve-3d;
                }
                
                h1 {
                    font-kerning: none;
                    text-rendering: optimizeSpeed;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    transform: translateZ(0);
                }

                .perspective-1000 {
                    perspective: 1000px;
                }

                .bg-gradient-radial {
                    background: radial-gradient(circle, var(--tw-gradient-stops));
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}