import {projects} from "@/app/projects/projectData";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
    return(
        <div className="flex flex-col justify-center items-center bg-zinc-950 text-white px-4 sm:px-8 lg:px-24 py-12">
            <section id="projects" className="w-full max-w-7xl">
                <div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-lime-400 via-lime-500 to-emerald-400 bg-clip-text text-transparent">
                        Projects
                    </h1>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((item, index) => (
                            <div
                                key={index}
                                className="border border-lime-400 rounded-2xl p-4 flex flex-col h-full hover:border-lime-300 transition-colors"
                            >

                                <div className="flex-shrink-0 mb-4 ">
                                    <Image
                                        src={item.image}
                                        alt={item.imageAlt}
                                        width={500}
                                        height={250}
                                        className="rounded-xl w-full h-48 object-cover"
                                    />
                                </div>

                                <div className="flex justify-between items-center mb-3">
                                    <h2 className="text-xl font-semibold text-lime-200">{item.title}</h2>
                                    <Link
                                        href={item.liveLink}
                                        target="_blank"
                                        className="flex items-center gap-1 text-lime-400 hover:text-lime-500 transition-colors duration-300"
                                    >
                                        Live Demo <FaExternalLinkAlt />
                                    </Link>
                                </div>

                                <p className="flex-grow text-sm text-gray-300 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}