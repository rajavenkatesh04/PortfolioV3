import {projects} from "@/app/projects/projectData";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaCode, FaRocket } from "react-icons/fa";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

export default function Projects() {
    return(
        <div className="min-h-screen bg-black text-white px-4 sm:px-8 lg:px-24 py-20">
            <section id="projects" className="w-full max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 mb-6">
                        <FaCode className="text-emerald-400 text-sm" />
                        <span className="text-sm text-emerald-400 font-medium tracking-wide">Portfolio Showcase</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-wide mb-6">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">Projects</span>
                    </h1>
                    <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-lime-400 to-emerald-400 mx-auto mb-4"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Production-ready applications built with modern technologies and scalable architecture
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-900/30 border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 hover:bg-gray-900/50 transition-all duration-500 hover:transform hover:-translate-y-2"
                        >
                            {/* Project Image */}
                            <div className="relative mb-6 overflow-hidden rounded-xl">
                                <Image
                                    src={item.image}
                                    alt={item.imageAlt}
                                    width={500}
                                    height={250}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Quick action buttons */}
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <Link
                                        href={item.liveLink}
                                        target="_blank"
                                        className="p-2 bg-lime-400/90 text-black rounded-lg hover:bg-lime-300 transition-colors"
                                        title="Live Demo"
                                    >
                                        <HiOutlineArrowTopRightOnSquare className="text-sm" />
                                    </Link>
                                    {item.githubLink && (
                                        <Link
                                            href={item.githubLink}
                                            target="_blank"
                                            className="p-2 bg-gray-800/90 text-white rounded-lg hover:bg-gray-700 transition-colors"
                                            title="View Code"
                                        >
                                            <FaGithub className="text-sm" />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <h2 className="text-xl font-semibold text-white group-hover:text-lime-400 transition-colors">
                                        {item.title}
                                    </h2>
                                    <div className="flex items-center gap-1 text-emerald-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <FaRocket className="text-xs" />
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                    {item.description}
                                </p>

                                {/* Tech Stack */}
                                {item.techStack && (
                                    <div className="flex flex-wrap gap-2">
                                        {item.techStack.slice(0, 3).map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2 py-1 text-xs bg-lime-400/10 text-lime-400 rounded-md border border-lime-400/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {item.techStack.length > 3 && (
                                            <span className="px-2 py-1 text-xs bg-gray-800 text-gray-400 rounded-md">
                                                +{item.techStack.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-2">
                                    <Link
                                        href={item.liveLink}
                                        target="_blank"
                                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-lime-400 to-emerald-400 text-black font-medium rounded-lg hover:from-lime-300 hover:to-emerald-300 transition-all duration-300"
                                    >
                                        <span className="text-sm">Live Demo</span>
                                        <FaExternalLinkAlt className="text-xs" />
                                    </Link>
                                    <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-lime-400 hover:text-lime-400 transition-all duration-300 text-sm">
                                        Details
                                    </button>
                                </div>
                            </div>

                            {/* Project Number */}
                            <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-lime-400/20 to-emerald-400/20 border border-lime-400/30 rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-lime-400">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="inline-flex flex-col items-center gap-4">
                        <p className="text-gray-400">
                            Want to see more of my work?
                        </p>
                        <Link
                            href="https://github.com/rajavenkatesh04"
                            target="_blank"
                            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-lime-400/50 bg-gradient-to-r from-lime-400/10 to-emerald-400/10 rounded-full hover:from-lime-400/20 hover:to-emerald-400/20 hover:border-lime-400 transition-all duration-300"
                        >
                            <FaGithub className="text-lime-400" />
                            <span className="text-lime-400 font-medium">View All Projects on GitHub</span>
                            <HiOutlineArrowTopRightOnSquare className="text-lime-400" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}