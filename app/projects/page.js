import {projects} from "@/app/projects/projectData";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

export default function Projects() {
    return(
        <div className="flex flex-col justify-center items-center bg-zinc-950 text-white px-4 sm:px-8 lg:px-24 py-12">
            <section id="projects" className="w-full max-w-6xl">
                <div>
                    {/* Simplified heading that matches your education section */}
                    <h1 className="text-3xl font-light text-center mb-16 bg-gradient-to-r from-lime-400 via-lime-500 to-emerald-400 bg-clip-text text-transparent tracking-wide">
                        Projects
                    </h1>

                    {/* Refined projects grid with better spacing */}
                    <div className="space-y-12">
                        {projects.map((item, index) => (
                            <div
                                key={index}
                                className="border-b border-lime-400/20 pb-12 last:border-b-0"
                            >
                                {/* Two-column layout: image on left, content on right */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                                    {/* Project image with subtle hover effect */}
                                    <div className="order-2 md:order-1">
                                        <Image
                                            src={item.image}
                                            alt={item.imageAlt}
                                            width={500}
                                            height={300}
                                            className="rounded-lg w-full h-64 object-cover hover:opacity-90 transition-opacity duration-300"
                                        />
                                    </div>

                                    {/* Project details with clean hierarchy */}
                                    <div className="order-1 md:order-2 space-y-4">
                                        <div>
                                            <h2 className="text-2xl font-medium text-lime-400 mb-2">
                                                {item.title}
                                            </h2>
                                            <p className="text-gray-300 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Technology stack display */}
                                        {item.technologies && (
                                            <div>
                                                <p className="text-sm text-gray-400 mb-2">Technologies:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.technologies.map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="px-3 py-1 bg-lime-400/10 text-lime-400 rounded-full text-xs font-medium border border-lime-400/20"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Action buttons with clear hierarchy */}
                                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                            {/* Learn More button - primary action */}
                                            <Link
                                                href={`/projects/${item.id || index}`}
                                                className="flex items-center justify-center gap-2 px-6 py-3 bg-lime-400 text-black rounded-lg hover:bg-lime-300 transition-colors duration-300 font-medium"
                                            >
                                                Learn More <FaArrowRight className="text-sm" />
                                            </Link>

                                            {/* Live Demo button - secondary action */}
                                            <Link
                                                href={item.liveLink}
                                                target="_blank"
                                                className="flex items-center justify-center gap-2 px-6 py-3 border border-lime-400/50 text-lime-400 rounded-lg hover:border-lime-400 hover:bg-lime-400/10 transition-all duration-300"
                                            >
                                                Live Demo <FaExternalLinkAlt className="text-sm" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}