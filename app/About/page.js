"use client";

import Image from "next/image";

export default function About() {
    return (
        <div>
            <section
                id="about"
                className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 sm:px-8 lg:px-24"
            >
                <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-lime-400 via-lime-500 to-emerald-400 bg-clip-text text-transparent">
                    About Me
                </h1>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Profile Image */}
                    <div className="w-50 h-50 relative rounded-full overflow-hidden shadow-lg border-4 border-lime-400">
                        <Image
                            src="/Raja.png"
                            alt="Raja"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Bio */}
                    <div className="max-w-xl text-center md:text-left space-y-4">
                        <p className="text-lg text-gray-300">
                            I’m Raja — a full-stack developer obsessed with clean design, seamless UX, and the logic
                            behind the magic. I thrive at the intersection of creativity and code, building interfaces
                            that are both elegant and efficient.
                        </p>
                        <p className="text-lg text-gray-300">
                            My toolkit includes <span className="text-lime-400">Next.js</span>, <span
                            className="text-lime-400">Java</span>, and <span className="text-lime-400">Tailwind CSS</span> —
                            and I’m constantly leveling up.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}



