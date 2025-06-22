"use client";

import Image from "next/image";

export default function About() {
    return (
        <div>
            <section
                id="about"
                className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 sm:px-8 lg:px-24"
            >
                <div className="text-center mb-16 sm:mb-20">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-wide">
                        About Me
                    </h1>
                    <div
                        className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-lime-400 to-emerald-400 mx-auto mt-4 sm:mt-6"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Profile Image */}
                    <div className="w-50 h-50 relative rounded-full overflow-hidden shadow-lg border-4 border-lime-400 absolute bg-gradient-to-r from-lime-400 to-emerald-400 ">
                        <Image
                            src="/Raja.png"
                            alt="Raja"
                            fill
                            className="object-cover "
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
                            className="text-lime-400">Java</span>, and <span className="text-lime-400">Postgres SQL</span> —
                            and I’m constantly leveling up.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}