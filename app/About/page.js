"use client";

import Image from "next/image";
import { HiCode, HiLightBulb } from "react-icons/hi";
import { HiRocketLaunch } from "react-icons/hi2";
import { FaJava } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiReact, SiPostgresql, SiTailwindcss, SiMongodb  } from "react-icons/si";

export default function About() {
    const highlights = [
        {
            icon: <HiCode className="text-xl" />,
            title: "System Design",
            description: "Architecting scalable solutions for millions of users"
        },
        {
            icon: <HiLightBulb className="text-xl" />,
            title: "Problem Solving",
            description: "Optimizing algorithms and data structures for performance"
        },
        {
            icon: <HiRocketLaunch className="text-xl" />,
            title: "Innovation",
            description: "Building products that shape the future of technology"
        }
    ];

    const techStack = [
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <FaJava />, name: "Java" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiMongodb />, name: "MongoDB"}

    ];

    return (
        <section
            id="about"
            className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-4 sm:px-8 lg:px-24 py-20 transition-colors duration-200"
        >
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 dark:border-lime-400/30 bg-indigo-500/5 dark:bg-lime-400/5 mb-6">
                        <div className="w-2 h-2 bg-indigo-500 dark:bg-lime-400 rounded-full animate-pulse" />
                        <span className="text-sm text-indigo-500 dark:text-lime-400 font-medium tracking-wide">Building the Future</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white tracking-wide mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-600 dark:from-lime-400 dark:to-emerald-400">Me</span>
                    </h1>
                    <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-indigo-600 to-teal-600 dark:from-lime-400 dark:to-emerald-400 mx-auto"></div>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

                    {/* Left: Image and Quick Stats */}
                    <div className="flex flex-col items-center space-y-10">
                        {/* Profile Image */}
                        <div className="relative">
                            <div className="w-72 h-72 relative rounded-full overflow-hidden shadow-2xl border-4 border-indigo-600 dark:border-lime-400 bg-gradient-to-r from-indigo-600 to-teal-600 dark:from-lime-400 dark:to-emerald-400 p-1">
                                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-black">
                                    <Image
                                        src="/Raja.png"
                                        alt="Raja Venkatesh"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                            {/* Floating accent */}
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-indigo-600 to-teal-600 dark:from-lime-400 dark:to-emerald-400 rounded-full animate-pulse"></div>
                        </div>

                        {/* Achievement Stats */}
                        <div className="grid grid-cols-3 gap-6 w-full max-w-md">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-indigo-600 dark:text-lime-400 mb-1">50+</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">DSA Problems</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-teal-600 dark:text-emerald-400 mb-1">2+</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-indigo-600 dark:text-lime-400 mb-1">7.2+</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">CGPA</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Bio and Details */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 dark:text-white">
                                Full-Stack Developer & <span className="text-indigo-600 dark:text-lime-400">Future Googler</span>
                            </h2>

                            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                <p>
                                    I'm Raja — a passionate full-stack developer who lives at the intersection of
                                    <span className="text-indigo-600 dark:text-lime-400 font-medium"> elegant design</span>,
                                    <span className="text-teal-600 dark:text-emerald-400 font-medium"> clean architecture</span>, and
                                    <span className="text-indigo-600 dark:text-lime-400 font-medium"> scalable solutions</span>.
                                </p>
                                <p>
                                    Currently mastering computer science fundamentals while shipping production applications.
                                    I'm obsessed with writing code that doesn't just work — but works beautifully,
                                    efficiently, and at scale.
                                </p>
                                <p>
                                    My mission? To join <span className="text-teal-600 dark:text-emerald-400 font-medium">Google, Meta, or Amazon </span>
                                    and help build the next generation of products that connect and empower billions of users worldwide.
                                </p>
                            </div>
                        </div>

                        {/* Key Strengths */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Core Strengths</h3>
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 p-3 rounded-lg border border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-gray-900/30 hover:bg-gray-200 dark:hover:bg-gray-900/50 transition-colors">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-600/20 to-teal-600/20 dark:from-lime-400/20 dark:to-emerald-400/20 flex items-center justify-center text-indigo-600 dark:text-lime-400 border border-indigo-600/30 dark:border-lime-400/30">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white text-sm">{item.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="text-center">
                    <h3 className="text-xl font-light text-indigo-600 dark:text-white mb-2">Technical Arsenal</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">Technologies I leverage to build exceptional products</p>

                    <div className="flex flex-wrap justify-center gap-6">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="group flex flex-col items-center gap-3 p-4 rounded-lg border border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-gray-900/30 hover:border-indigo-600/50 dark:hover:border-lime-400/50 hover:bg-indigo-600/5 dark:hover:bg-lime-400/5 transition-all duration-300"
                            >
                                <div className="text-2xl text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-lime-400 group-hover:scale-110 transition-all duration-300">
                                    {tech.icon}
                                </div>
                                <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-20">
                    <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-indigo-600/50 dark:border-lime-400/50 bg-gradient-to-r from-indigo-600/10 to-teal-600/10 dark:from-lime-400/10 dark:to-emerald-400/10 hover:from-indigo-600/20 hover:to-teal-600/20 dark:hover:from-lime-400/20 dark:hover:to-emerald-400/20 transition-all duration-300">
                        <span className="text-indigo-600 dark:text-lime-400 font-medium">Let's build something extraordinary together</span>
                        <div className="w-2 h-2 bg-teal-600 dark:bg-emerald-400 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}