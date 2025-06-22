"use client";

import {HiAcademicCap, HiSparkles, HiTrophy} from "react-icons/hi2";
import {FaGraduationCap, FaLinkedin, FaGithub, FaEnvelope, FaTwitter} from "react-icons/fa";
import {SiLeetcode, SiCodeforces} from "react-icons/si";
import Link from "next/link";

export default function Education() {
    const educationData = [
        {
            id: 1,
            level: "Bachelor's Degree",
            school: "SRM Institute of Science and Technology",
            board: "B.Tech Computer Science Engineering",
            year: "2022-2026",
            percentage: "7.2 CGPA",
            subjects: ["Data Structures", "Algorithms", "Web Development", "Database Systems", "Machine Learning"],
            achievement: "Dean's List for Academic Excellence",
            icon: <FaGraduationCap className="text-xl"/>,
            status: "Current"
        },
        {
            id: 2,
            level: "12th Standard",
            school: "Sri Chaitanya Techno School",
            board: "CBSE Board",
            year: "2021-2022",
            percentage: "69.9%",
            subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
            achievement: "District Level Science Olympiad Winner",
            icon: <HiTrophy className="text-xl"/>,
            status: "Completed"
        },
        {
            id: 3,
            level: "10th Standard",
            school: "Sri Chaitanya Techno School",
            board: "CBSE Board",
            year: "2019-2020",
            percentage: "77%",
            subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
            achievement: "School Topper in Mathematics",
            icon: <HiSparkles className="text-xl"/>,
            status: "Completed"
        }
    ];

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/rajavenkatesh04",
            icon: <FaGithub/>,
            color: "hover:text-white"
        },
        {
            name: "LinkedIn",
            url: "#",
            icon: <FaLinkedin/>,
            color: "hover:text-blue-400"
        },
        {
            name: "LeetCode",
            url: "#",
            icon: <SiLeetcode/>,
            color: "hover:text-yellow-400"
        },
        {
            name: "CodeForces",
            url: "#",
            icon: <SiCodeforces/>,
            color: "hover:text-blue-500"
        },
        {
            name: "Email",
            url: "mailto:your.email@example.com",
            icon: <FaEnvelope/>,
            color: "hover:text-red-400"
        }
    ];

    return (
        <div className="bg-black text-white">
            {/* Education Section */}
            <div className="min-h-screen px-4 sm:px-8 lg:px-24 py-20">
                <section id="education" className="w-full max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-20">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-400/30 bg-lime-400/5 mb-6">
                            <HiAcademicCap className="text-lime-400 text-sm"/>
                            <span className="text-sm text-lime-400 font-medium tracking-wide">Academic Journey</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-wide mb-6">
                            My <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">Education</span>
                        </h1>
                        <div
                            className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-lime-400 to-emerald-400 mx-auto mb-4"></div>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Building a strong foundation in computer science and engineering excellence
                        </p>
                    </div>

                    {/* Education Timeline */}
                    <div className="space-y-12">
                        {educationData.map((education, index) => (
                            <div key={education.id} className="group relative">
                                {/* Timeline connector */}
                                {index < educationData.length - 1 && (
                                    <div
                                        className="absolute left-6 top-20 w-px h-16 bg-gradient-to-b from-lime-400/50 to-transparent hidden md:block"></div>
                                )}

                                {/* Education Card */}
                                <div
                                    className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 hover:border-lime-400/50 hover:bg-gray-900/50 transition-all duration-500 hover:transform hover:-translate-y-1">
                                    <div className="flex flex-col md:flex-row md:items-start gap-6">

                                        {/* Icon & Status */}
                                        <div className="flex-shrink-0">
                                            <div
                                                className="w-12 h-12 rounded-xl bg-gradient-to-r from-lime-400/20 to-emerald-400/20 border border-lime-400/30 flex items-center justify-center text-lime-400 mb-3">
                                                {education.icon}
                                            </div>
                                            <div className="text-center">
                                                <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                                                    education.status === 'Current'
                                                        ? 'bg-emerald-400/20 text-emerald-400 border border-emerald-400/30'
                                                        : 'bg-gray-700/50 text-gray-400 border border-gray-600/50'
                                                }`}>
                                                    {education.status}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 space-y-4">
                                            <div
                                                className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                                                <div>
                                                    <h3 className="text-xl sm:text-2xl font-semibold text-lime-400 mb-2 group-hover:text-emerald-400 transition-colors">
                                                        {education.level}
                                                    </h3>
                                                    <p className="text-white text-lg font-medium mb-1">
                                                        {education.school}
                                                    </p>
                                                    <p className="text-gray-400 text-sm">
                                                        {education.board} • {education.year}
                                                    </p>
                                                </div>

                                                <div className="text-left sm:text-right">
                                                    <div className="text-2xl font-bold text-emerald-400 mb-1">
                                                        {education.percentage}
                                                    </div>
                                                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                                                        Performance
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Achievement Badge */}
                                            <div
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-lime-400/10 to-emerald-400/10 border border-lime-400/20 rounded-full">
                                                <HiTrophy className="text-lime-400 text-sm"/>
                                                <span className="text-lime-400 text-sm font-medium">
                                                    {education.achievement}
                                                </span>
                                            </div>

                                            {/* Subjects - Hidden by default, can be toggled */}
                                            <div
                                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {education.subjects.slice(0, 4).map((subject, subjectIndex) => (
                                                        <span
                                                            key={subjectIndex}
                                                            className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-md text-xs border border-gray-700/50"
                                                        >
                                                            {subject}
                                                        </span>
                                                    ))}
                                                    {education.subjects.length > 4 && (
                                                        <span
                                                            className="px-3 py-1 bg-lime-400/10 text-lime-400 rounded-md text-xs border border-lime-400/20">
                                                            +{education.subjects.length - 4} more
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Academic Stats */}
                    <div className="mt-20 text-center">
                        <h3 className="text-xl font-light text-white mb-8">Academic Highlights</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                            <div
                                className="p-4 bg-gray-900/30 border border-gray-800 rounded-xl hover:border-lime-400/50 transition-colors">
                                <div className="text-2xl font-bold text-lime-400 mb-1">7.2+</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Current CGPA</div>
                            </div>
                            <div
                                className="p-4 bg-gray-900/30 border border-gray-800 rounded-xl hover:border-lime-400/50 transition-colors">
                                <div className="text-2xl font-bold text-emerald-400 mb-1">3</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Major Awards</div>
                            </div>
                            <div
                                className="p-4 bg-gray-900/30 border border-gray-800 rounded-xl hover:border-lime-400/50 transition-colors">
                                <div className="text-2xl font-bold text-lime-400 mb-1">4</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Years Study</div>
                            </div>
                            <div
                                className="p-4 bg-gray-900/30 border border-gray-800 rounded-xl hover:border-lime-400/50 transition-colors">
                                <div className="text-2xl font-bold text-emerald-400 mb-1">CSE</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Specialization</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </div>
    );
}