"use client";

import Image from "next/image";

export default function About() {
    return (
        <div>
            <section
                id="about"
                className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white px-4 sm:px-8 lg:px-24 relative overflow-hidden"
            >
                {/* Background decoration */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-900/20 via-transparent to-transparent"></div>

                <div className="relative z-10 max-w-6xl mx-auto">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-center mb-16 bg-gradient-to-r from-lime-300 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                        About Me
                    </h1>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Profile Section */}
                        <div className="flex flex-col items-center space-y-6">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-lime-400/50 shadow-2xl">
                                    <Image
                                        src="/Raja.png"
                                        alt="Raja"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Tech badges */}
                            <div className="flex flex-wrap justify-center gap-3">
                                {['Next.js', 'Java', 'PostgreSQL', 'TypeScript', 'React'].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-slate-800/50 border border-lime-400/30 rounded-full text-sm text-lime-300 hover:bg-lime-400/10 transition-colors duration-300 cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Bio Section */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-lime-400 mb-4">
                                    Hi, I'm Raja 👋
                                </h2>

                                <div className="space-y-4 text-lg leading-relaxed">
                                    <p className="text-gray-300 relative pl-6">
                                        <span className="absolute left-0 top-2 w-2 h-2 bg-lime-400 rounded-full"></span>
                                        A <span className="text-lime-400 font-semibold">full-stack developer</span> obsessed with clean design, seamless UX, and the logic behind the magic.
                                    </p>

                                    <p className="text-gray-300 relative pl-6">
                                        <span className="absolute left-0 top-2 w-2 h-2 bg-emerald-400 rounded-full"></span>
                                        I thrive at the <span className="text-emerald-400 font-semibold">intersection of creativity and code</span>, building interfaces that are both elegant and efficient.
                                    </p>

                                    <p className="text-gray-300 relative pl-6">
                                        <span className="absolute left-0 top-2 w-2 h-2 bg-cyan-400 rounded-full"></span>
                                        Always <span className="text-cyan-400 font-semibold">learning, growing, and pushing boundaries</span> in the ever-evolving world of web development.
                                    </p>
                                </div>
                            </div>

                            {/* Stats or highlights */}
                            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-700/50">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-lime-400">∞</div>
                                    <div className="text-sm text-gray-400">Lines of Code</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-emerald-400">24/7</div>
                                    <div className="text-sm text-gray-400">Learning Mode</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-20 left-10 w-4 h-4 bg-lime-400/20 rounded-full animate-bounce"></div>
                <div className="absolute bottom-20 right-10 w-6 h-6 bg-emerald-400/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-5 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"></div>
            </section>
        </div>
    );
}