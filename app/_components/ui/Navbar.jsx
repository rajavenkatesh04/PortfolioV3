"use client"

import Link from "next/link";
import {useState} from "react";
import Image from "next/image";
import {IoMdContact, IoMdClose} from "react-icons/io";
import {GoProjectRoadmap} from "react-icons/go";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className={`w-full fixed top-0 z-50 bg-transparent backdrop-blur-xl text-white `}>
                <div className={`max-w-7xl px-4 mx-auto  sm:px-6  lg:px-2 `}>
                    <div className={`flex justify-between items-center h-16 md:border-b md:border-b-lime-300`}>
                        {/*Logo*/}
                        <div className={`flex-shrink-0`}>
                            <Link href={`/`}>
                                <Image src={`/logo light.png`} alt={`Logo`} width={150} height={100}/>
                            </Link>
                        </div>

                        {/*Desktop Menu*/}
                        <div className={`hidden md:block`}>
                            <ul className={`flex space-x-8`}>
                                <li>
                                    <Link href={`/contact`}
                                          className={`py-2 px-3 font-medium hover:text-lime-500 transition-colors duration-300 inline-flex items-center`}>Contact<IoMdContact
                                        className={`mx-2 text-lime-400`}/></Link>
                                </li>

                                <li>
                                    <Link href={`/projects`}
                                          className={`py-2 px-3 font-medium hover:text-lime-500 transition-colors duration-300 inline-flex items-center`}>Projects<GoProjectRoadmap
                                        className={`mx-2 text-lime-400`}/></Link>
                                </li>

                                <li>
                                    <Link href={`/public`}
                                          className={`py-2 px-3 font-medium hover:text-lime-500 transition-colors duration-300 inline-flex items-center`}>Resume<LiaFileDownloadSolid
                                        className={`mx-2 text-lime-400`}/></Link>
                                </li>
                            </ul>
                        </div>

                        {/*Mobile Menu*/}
                        <div className={`md:hidden`}>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <IoMdClose className={`text-xl text-lime-400`}/> : <CiMenuBurger className={`text-xl text-lime-400`}/>}

                            </button>
                        </div>
                    </div>

                    {/*    Mobile Menu navigation */}
                    {isOpen && (
                        <div className={`border-t`}>
                            <ul className={`space-x-8`}>
                                <li>
                                    <Link href={`/contact`}
                                          className={`py-2 px-3 font-medium text-lime-500 hover:text-white transition-colors duration-300 inline-flex items-center`}>Contact<IoMdContact
                                        className={`mx-2`}/></Link>
                                </li>

                                <li>
                                    <Link href={`/projects`}
                                          className={`py-2 px-3 font-medium text-lime-500 hover:text-white transition-colors duration-300 inline-flex items-center`}>Projects<GoProjectRoadmap
                                        className={`mx-2`}/></Link>
                                </li>

                                <li>
                                    <Link href={`/public`}
                                          className={`py-2 px-3 font-medium text-lime-500 hover:text-white  transition-colors duration-300 inline-flex items-center`}>Resume<LiaFileDownloadSolid
                                        className={`mx-1`}/></Link>
                                </li>
                            </ul>

                        </div>
                    )}

                </div>

        </nav>
    )
}