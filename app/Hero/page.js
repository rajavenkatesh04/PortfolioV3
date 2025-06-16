"use client"
import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"
import { FaAnglesDown } from "react-icons/fa6";
import Link from "next/link";
import {Josefin_Sans} from "next/font/google";

export default function SplitText() {
    const containerRef = useRef(null)

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return

            containerRef.current.style.visibility = "visible"

            const h1Element = containerRef.current.querySelector("h1")
            if (!h1Element) return

            const { words } = splitText(h1Element)

            animate(
                words,
                { opacity: [0, 1], y: [10, 0] },
                {
                    type: "spring",
                    duration: 3,
                    bounce: 0,
                    delay: stagger(0.20),
                }
            )
        })
    }, [])

    return (
        <div className="container" ref={containerRef}>
            <div className={`font-josefin `}><h1 className="h1 ">
                {/*This portfolio runs on passion, pixels, and late-night debugging. Welcome!*/}
                {/*Hello and thank you for visiting here’s a peek into my developer journey.*/}
                Make yourself at home <span className={`text-lime-500`}>—</span> here’s what I’ve been working on.
            </h1></div>

            <div className="down-icon">
                <Link href={`#about`}>
                    <FaAnglesDown
                    className="animate-bounce opacity-70 text-lime-500 text-2xl hover:text-white transition-colors duration-300"/>
                </Link>
            </div>
            <Stylesheet />
        </div>

    )
}

function Stylesheet() {
    return (
        <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100vw;
                height: 100vh;
                text-align: center;
                visibility: hidden;
                background: #0a0a0a;
                padding: 2rem;
                box-sizing: border-box;
            }
            .h1 {
                font-family: Josefin Sans;
                // font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                font-size: clamp(3rem, 12vw, 5rem);
                font-weight: 600;
                line-height: 1.1;
                color: grey;
                margin: 0;
                max-width: 100%;
            }
            
            .split-word {
                will-change: transform, opacity;
                display: inline-block;
            }
            
            .down-icon {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
}
            
            /* Make sure body and html don't have margins/padding */
            body, html {
                margin: 0;
                padding: 0;
                overflow-x: hidden;
            }
        `}</style>
    )
}