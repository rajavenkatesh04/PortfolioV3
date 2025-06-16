"use client"
import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"
import { FaAnglesDown } from "react-icons/fa6";

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
            <h1 className="h1">
                Namaste, Welcome to my portfolio.
            </h1>

            <div className={``}>
                <span className={`w-full mx-auto `}><FaAnglesDown className={  `text-white`} /></span>
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
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                font-size: clamp(3rem, 12vw, 8rem);
                font-weight: 600;
                line-height: 1.1;
                color: white;
                margin: 0;
                max-width: 100%;
            }
            .split-word {
                will-change: transform, opacity;
                display: inline-block;
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