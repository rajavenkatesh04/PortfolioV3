// app/projects/[id]/page.js
import { projects, getProjectById } from '../projectData2';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub, FaArrowLeft, FaClock, FaUsers, FaCode } from 'react-icons/fa';
import { notFound } from 'next/navigation';

// This function runs at build time to generate static pages for each project
// It's an optimization that pre-renders your project pages for better performance
export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

// This function generates metadata for each project page
// It helps with SEO and social media sharing
export async function generateMetadata({ params }) {
    const project = getProjectById(params.id);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${project.title} - My Portfolio`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [project.image],
        },
    };
}

export default function ProjectDetail({ params }) {
    // Extract the project data based on the URL parameter
    const project = getProjectById(params.id);

    // If project doesn't exist, show 404 page
    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            {/* Navigation header with back button */}
            <div className="border-b border-lime-400/20">
                <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-24 py-6">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors"
                    >
                        <FaArrowLeft /> Back to Projects
                    </Link>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-24 py-12">
                {/* Project header section */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-lime-400 via-lime-500 to-emerald-400 bg-clip-text text-transparent">
                        {project.title}
                    </h1>

                    {/* Project metadata */}
                    <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-6">
                        <div className="flex items-center gap-2">
                            <FaCode /> {project.projectType}
                        </div>
                        <div className="flex items-center gap-2">
                            <FaClock /> {project.duration}
                        </div>
                        <div className="flex items-center gap-2">
                            <FaUsers /> {project.teamSize}
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href={project.liveLink}
                            target="_blank"
                            className="flex items-center gap-2 px-6 py-3 bg-lime-400 text-black rounded-lg hover:bg-lime-300 transition-colors font-medium"
                        >
                            Live Demo <FaExternalLinkAlt />
                        </Link>

                        {project.githubLink && (
                            <Link
                                href={project.githubLink}
                                target="_blank"
                                className="flex items-center gap-2 px-6 py-3 border border-lime-400/50 text-lime-400 rounded-lg hover:border-lime-400 hover:bg-lime-400/10 transition-all"
                            >
                                View Code <FaGithub />
                            </Link>
                        )}
                    </div>
                </div>

                {/* Main project image */}
                <div className="mb-12">
                    <Image
                        src={project.image}
                        alt={project.imageAlt}
                        width={1200}
                        height={600}
                        className="w-full h-96 object-cover rounded-xl"
                        priority
                    />
                </div>

                {/* Project content sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main content column */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Project Overview */}
                        <section>
                            <h2 className="text-2xl font-semibold text-lime-400 mb-4">Project Overview</h2>
                            <p className="text-gray-300 leading-relaxed">{project.overview}</p>
                        </section>

                        {/* Problem Statement */}
                        <section>
                            <h2 className="text-2xl font-semibold text-lime-400 mb-4">Problem Statement</h2>
                            <p className="text-gray-300 leading-relaxed">{project.problemStatement}</p>
                        </section>

                        {/* Challenges and Solutions */}
                        <section>
                            <h2 className="text-2xl font-semibold text-lime-400 mb-6">Challenges & Solutions</h2>
                            <div className="space-y-6">
                                {project.challenges.map((item, index) => (
                                    <div key={index} className="border-l-2 border-lime-400/30 pl-6">
                                        <h3 className="text-lg font-medium text-white mb-2">
                                            Challenge: {item.challenge}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            <span className="text-emerald-400 font-medium">Solution:</span> {item.solution}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Lessons Learned */}
                        <section>
                            <h2 className="text-2xl font-semibold text-lime-400 mb-4">Lessons Learned</h2>
                            <p className="text-gray-300 leading-relaxed">{project.lessonsLearned}</p>
                        </section>

                        {/* Future Improvements */}
                        <section>
                            <h2 className="text-2xl font-semibold text-lime-400 mb-4">Future Improvements</h2>
                            <ul className="space-y-2 text-gray-300">
                                {project.futureImprovements.map((improvement, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-lime-400 mt-2">•</span>
                                        <span>{improvement}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Technologies Used */}
                        <section>
                            <h3 className="text-xl font-semibold text-lime-400 mb-4">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-lime-400/10 text-lime-400 rounded-full text-sm border border-lime-400/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Key Features */}
                        <section>
                            <h3 className="text-xl font-semibold text-lime-400 mb-4">Key Features</h3>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                {project.keyFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-lime-400 mt-1">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>

                {/* Additional Images Gallery (if available) */}
                {project.additionalImages && project.additionalImages.length > 0 && (
                    <section className="mt-16">
                        <h2 className="text-2xl font-semibold text-lime-400 mb-6">Project Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {project.additionalImages.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    width={400}
                                    height={300}
                                    className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
                                />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}