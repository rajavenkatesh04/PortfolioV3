"use client"
import { FaHeart, FaGithub, FaLinkedin, FaArrowUp, FaEnvelope } from "react-icons/fa6";
import { SiLeetcode, SiHackerrank, SiCredly } from "react-icons/si";
import { BiCoffee, BiTime } from "react-icons/bi";
import { HiEye } from "react-icons/hi";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
    const [currentTime, setCurrentTime] = useState('');
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        // Update time
        const updateTime = () => {
            const now = new Date();
            const chennaiTime = new Intl.DateTimeFormat('en-IN', {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            }).format(now);
            setCurrentTime(chennaiTime);
        };

        updateTime();
        const timeInterval = setInterval(updateTime, 1000);

        // Fetch weather (using Open-Meteo - free, no API key needed)
        const fetchWeather = async () => {
            try {
                // Chennai coordinates: 13.0827°N, 80.2707°E
                const response = await fetch(
                    'https://api.open-meteo.com/v1/forecast?latitude=13.0827&longitude=80.2707&current_weather=true&timezone=Asia/Kolkata'
                );
                const data = await response.json();
                setWeather({
                    temperature: Math.round(data.current_weather.temperature),
                    weatherCode: data.current_weather.weathercode
                });
            } catch (error) {
                console.error('Weather fetch failed:', error);
                setWeather({ temperature: '32', weatherCode: 0 }); // fallback
            }
        };

        fetchWeather();

        return () => clearInterval(timeInterval);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getWeatherIcon = (code) => {
        // Simple weather code mapping
        if (code <= 3) return "☀️";
        if (code <= 48) return "☁️";
        if (code <= 67) return "🌧️";
        if (code <= 77) return "🌨️";
        return "⛈️";
    };

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/rajavenkatesh04",
            icon: FaGithub,
            hoverColor: "hover:text-white hover:bg-gray-800/30 hover:border-gray-600"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/guthularajavenkatesh/",
            icon: FaLinkedin,
            hoverColor: "hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30"
        },
        {
            name: "Email",
            url: "mailto:your.email@example.com",
            icon: FaEnvelope,
            hoverColor: "hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/30"
        }
    ];

    const codingPlatforms = [
        {
            name: "LeetCode",
            url: "https://leetcode.com/u/rajavenkatesh20/",
            icon: SiLeetcode,
            hoverColor: "hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-400"
        },
        {
            name: "HackerRank",
            url: "https://www.hackerrank.com/profile/RA2211003010773",
            icon: SiHackerrank,
            hoverColor: "hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-400"
        },
        {
            name: "Credly",
            url: "https://www.linkedin.com/in/guthularajavenkatesh/",
            icon: SiCredly,
            hoverColor: "hover:border-blue-600/50 hover:bg-blue-600/10 hover:text-blue-400"
        }
    ];

    return (
        <footer className="relative bg-slate-950 border-t border-slate-800/50">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-lime-500/5" />

            <div className="relative max-w-6xl mx-auto px-6 py-12">
                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12 mb-12">

                    {/* Left Column - Thanks Message */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-2xl sm:text-3xl font-light text-white">
                                Thanks for <span className="text-lime-400">dropping by!</span>
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                I'm always excited to connect with fellow developers, potential collaborators,
                                and anyone passionate about technology. Whether you want to discuss a project,
                                share opportunities, or just say hello — I'd love to hear from you!
                            </p>
                        </div>

                        {/* Status & Info */}
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-lime-400/10 to-emerald-400/10 border border-lime-400/20 rounded-full">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                <span className="text-emerald-400 font-medium">Open to opportunities</span>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <BiTime className="text-blue-400" />
                                <span>Chennai, India • {currentTime}</span>
                                {weather && (
                                    <>
                                        <span className="mx-2">•</span>
                                        <span className="text-lg">{getWeatherIcon(weather.weatherCode)}</span>
                                        <span>{weather.temperature}°C</span>
                                    </>
                                )}
                            </div>

                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <BiCoffee className="text-amber-500" />
                                <span>Fueled by coffee and curiosity</span>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-3">
                            <h4 className="text-white font-medium text-sm">Quick Links</h4>
                            <div className="grid grid-cols-2 gap-2">
                                <Link href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                                    About Me
                                </Link>
                                <Link href="#projects" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                                    Projects
                                </Link>
                                <Link href="#experience" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                                    Experience
                                </Link>
                                <Link href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                                    Get In Touch
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Compact Connect */}
                    <div className="space-y-6">
                        {/* Social Links - Compact */}
                        <div>
                            <h4 className="text-white font-medium mb-4">Let's Connect</h4>
                            <div className="grid grid-cols-1 gap-2">
                                {socialLinks.map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        className={`flex items-center gap-3 p-2 rounded-lg bg-slate-900/50 border border-slate-800 transition-all duration-300 ${social.hoverColor}`}
                                    >
                                        <social.icon className="text-base text-slate-400 transition-colors" />
                                        <span className="text-sm text-slate-300">{social.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Coding Platforms */}
                        <div>
                            <h4 className="text-white font-medium mb-4">Coding Profiles</h4>
                            <div className="grid grid-cols-1 gap-2">
                                {codingPlatforms.map((platform, index) => (
                                    <Link
                                        key={index}
                                        href={platform.url}
                                        target="_blank"
                                        className={`flex items-center gap-3 p-2 rounded-lg border border-slate-800 bg-slate-900/50 transition-all duration-300 ${platform.hoverColor}`}
                                    >
                                        <platform.icon className="text-base text-slate-400 transition-colors" />
                                        <span className="text-sm text-slate-300">{platform.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-slate-800/50">
                    <div className="flex items-center gap-2 text-slate-500 mb-4 sm:mb-0">
                        <span>© 2025 Raja Venkatesh.</span>
                        <span className="hidden sm:inline">Crafted with</span>
                        <FaHeart className="text-red-500 animate-pulse" />
                        <span className="hidden sm:inline">and lots of debugging</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-4 text-xs text-slate-600">
                            <span>Future MAANG Engineer</span>
                            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                            <span>Building Tomorrow's Tech</span>
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                        >
                            <span className="text-sm text-blue-400">Back to top</span>
                            <FaArrowUp className="text-blue-400 group-hover:-translate-y-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}