import Link from "next/link";

export default function Footer2() {
    return(

    {/* Footer */}
    <div>
        <footer className="border-t border-gray-800/50 bg-gray-900/20 px-4 sm:px-8 lg:px-24 py-16">
            <div className="max-w-7xl mx-auto">

                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 gap-12 mb-12">

                    {/* Left Column - Message */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-2xl sm:text-3xl font-light text-white">
                                Thanks for <span className="text-lime-400">dropping by!</span>
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                I'm always excited to connect with fellow developers, potential collaborators,
                                and anyone passionate about technology. Whether you want to discuss a project,
                                share opportunities, or just say hello — I'd love to hear from you!
                            </p>
                        </div>

                        {/* Quick Contact */}
                        <div
                            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-lime-400/10 to-emerald-400/10 border border-lime-400/20 rounded-full">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            <span className="text-emerald-400 font-medium">Open to opportunities</span>
                        </div>
                    </div>

                    {/* Right Column - Links & Contact */}
                    <div className="space-y-8">

                        {/* Social Links */}
                        <div>
                            <h4 className="text-white font-medium mb-4">Let's Connect</h4>
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        className={`flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:border-lime-400/50 transition-all duration-300 ${social.color}`}
                                    >
                                        <span className="text-gray-400">{social.icon}</span>
                                        <span className="text-sm text-gray-300">{social.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div>
                            <h4 className="text-white font-medium mb-4">Current Focus</h4>
                            <div className="space-y-2 text-sm text-gray-400">
                                <div className="flex justify-between">
                                    <span>DSA Problem Solving</span>
                                    <span className="text-lime-400">500+ solved</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>System Design Learning</span>
                                    <span className="text-emerald-400">In Progress</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Open Source Contributions</span>
                                    <span className="text-lime-400">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800/50">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="text-gray-500 text-sm">
                            © 2025 Raja Venkatesh. Crafted with passion and caffeine ☕
                        </div>
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span>Future MAANG Engineer</span>
                            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                            <span>Building Tomorrow's Tech</span>
                        </div>
                    </div>
                </div>

                {/* Scroll to Top Hint */}
                <div className="text-center mt-8">
                    <div className="inline-flex items-center gap-2 text-xs text-gray-600">
                        <span>Hope to connect with you soon!</span>
                        <div
                            className="w-4 h-4 rounded-full border border-gray-700 flex items-center justify-center">
                            <div className="w-1 h-1 bg-lime-400 rounded-full animate-bounce"></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    )
}