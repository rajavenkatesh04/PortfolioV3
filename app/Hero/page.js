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
                mask: "lines", // Creates mask elements for reveal effect
                autoSplit: true,
                onSplit(self) {
                    // Animate the mask reveal
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
            className="flex flex-col justify-center items-center min-h-screen w-full text-center bg-zinc-950 px-8 py-16 box-border relative invisible"
        >
            <div className="w-full max-w-6xl mx-auto">
                <h1
                    ref={headingRef}
                    className="font-bold text-gray-400 leading-[1.1] m-0 w-full"
                    style={{
                        fontFamily: 'Josefin Sans, sans-serif',
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)'
                    }}
                >
                    Make yourself at{" "}
                    <span className="text-lime-500">home</span>{" "}
                    <span className="text-lime-500">—</span>{" "}
                    here's what I've been{" "}
                    <span className="text-lime-500">working</span>{" "}
                    on.
                </h1>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <Link href="#about">
                    <FaAnglesDown className="animate-bounce opacity-70 text-lime-500 text-2xl hover:text-white transition-colors duration-300" />
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
            `}</style>
        </div>
    )
}