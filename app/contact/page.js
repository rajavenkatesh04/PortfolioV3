"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { IoIosSend } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1f8860a0-90d3-444b-84a4-080d6f3d68d3");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-purple-50 dark:bg-zinc-950 text-gray-900 dark:text-white font-josefin-sans transition-colors duration-200">
            {/* Header */}
            <div className="text-center mb-20">
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-600/30 dark:border-lime-400/30 bg-indigo-600/5 dark:bg-lime-400/5 mb-6">
                    <BiSolidPhoneCall className="text-indigo-600 dark:text-lime-400 text-sm"/>
                    <span className="text-sm text-indigo-600 dark:text-lime-400 font-medium tracking-wide">Contact Me</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white tracking-wide mb-6">
                    Get in <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-600 dark:from-lime-400 dark:to-emerald-400">touch</span>
                </h1>
                <div
                    className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-indigo-600 to-teal-600 dark:from-lime-400 dark:to-emerald-400 mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                    I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
                </p>
            </div>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <input
                        name="Name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        className="flex-1 p-3 outline-none border-[0.5px] border-indigo-600 dark:border-lime-400 rounded-md focus:border-teal-600 dark:focus:border-emerald-400 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white transition-colors duration-200"
                    />
                    <input
                        name="Email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="flex-1 p-3 outline-none border-[0.5px] border-indigo-600 dark:border-lime-400 rounded-md focus:border-teal-600 dark:focus:border-emerald-400 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white transition-colors duration-200"
                    />
                </div>

                <textarea
                    name="Message"
                    rows="6"
                    placeholder="Enter your message"
                    required
                    className="w-full p-4 outline-none border-[0.5px] border-indigo-600 dark:border-lime-400 rounded-md focus:border-teal-600 dark:focus:border-emerald-400 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white transition-colors duration-200"
                />

                <button
                    type="submit"
                    className="my-2 py-3 px-8 w-max flex items-center justify-between gap-2 bg-indigo-100 dark:bg-black/80 text-gray-900 dark:text-white rounded-full hover:border border-indigo-600 dark:border-lime-400 hover:bg-indigo-600/10 dark:hover:bg-lime-400/10 transition-all duration-300"
                >
                    Submit now <IoIosSend className="text-indigo-600 dark:text-lime-400"/>
                </button>
                <p className="mt-4 text-gray-600 dark:text-gray-400">{result}</p>
            </form>
        </div>
    )
}