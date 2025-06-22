import { FaHeart } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";
import { SiCredly } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full z-50 bg-gradient-to-r from-lime-400 to-emerald-400 backdrop-blur-md text-center py-3 px-3 items-center justify-center text-white">
            <div className={`hidden md:block`}>
                <div className=" py-4 max-w-7xl mx-auto px-4 flex justify-between items-center text-2xl ">
                    <div
                        className="flex justify-center items-center gap-6 transition-colors ">
                        <Link href={`https://github.com/rajavenkatesh04`} target={`_blank`}><FaGithub
                            className="hover:scale-110 transition-transform cursor-pointer"/></Link>
                        <Link href={`https://leetcode.com/u/rajavenkatesh20/`} target={`_blank`}><SiLeetcode
                            className="hover:scale-110 transition-transform cursor-pointer"/></Link>
                        <Link href={`https://www.hackerrank.com/profile/RA2211003010773`}
                              target={`_blank`}><SiHackerrank
                            className="hover:scale-110 transition-transform cursor-pointer"/></Link>
                    </div>

                    <p className="text-sm sm:text-base flex justify-center items-center gap-2 ">
                        Built with love <FaHeart
                        className=" animate-pulse drop-shadow-md"/> by Raja
                    </p>

                    <div className="flex justify-center items-center gap-6 transition-colors">
                        <Link href={`https://www.linkedin.com/in/guthularajavenkatesh/`} target={`_blank`}><SiCredly
                            className="hover:scale-110 transition-transform cursor-pointer"/></Link>
                        <Link href={`https://www.linkedin.com/in/guthularajavenkatesh/`} target={`_blank`}><FaLinkedin
                            className="hover:scale-110 transition-transform cursor-pointer"/></Link>
                    </div>
                </div>
            </div>

            <div className={`md:hidden `}>
                <div className={`flex flex-col space-y-4`}>
                    <p className="text-sm sm:text-base flex justify-center items-center gap-2 text-white">
                        Built with love <FaHeart
                        className="text-lime-600 animate-pulse drop-shadow-md text-lime-400"/> by Raja
                    </p>

                    <div className="flex justify-center text-2xl items-center gap-6 text-white hover:text-lime-300 transition-colors ">
                        <Link href={`https://github.com/rajavenkatesh04`} target={`_blank`}><FaGithub
                            className="hover:scale-110 transition-transform cursor-pointer"/></Link>
                        <Link href={`https://leetcode.com/u/rajavenkatesh20/`} target={`_blank`}><SiLeetcode
                            className="hover:scale-110 transition-transform cursor-pointer"/></Link>
                        <Link href={`https://www.hackerrank.com/profile/RA2211003010773`}
                              target={`_blank`}><SiHackerrank
                            className="hover:scale-110 transition-transform cursor-pointer"/></Link>
                        <Link href={`https://www.linkedin.com/in/guthularajavenkatesh/`} target={`_blank`}><SiCredly
                            className="hover:scale-110 transition-transform cursor-pointer"/></Link>
                        <Link href={`https://www.linkedin.com/in/guthularajavenkatesh/`} target={`_blank`}><FaLinkedin
                            className="hover:scale-110 transition-transform cursor-pointer"/></Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}