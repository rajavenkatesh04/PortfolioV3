"use client"
import React, {useState} from 'react';
import Image from "next/image";
import { IoIosSend } from "react-icons/io";

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
        <div id={"contact"} className={"w-full px-[12%] py-10 scroll-mt-20 bg-zinc-950 text-white font-josefin-sans"}>
            <h1 className="mb-2 text-4xl sm:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-lime-400 via-lime-500 to-emerald-400 bg-clip-text text-transparent">
                Get in touch
            </h1>
            <p className={"text-center max-w-2xl mx-auto mt-5 mb-12 "}>I'd love to hear from you! If you have any questions, comments or feedback, Please use the form below.</p>

            <form onSubmit={onSubmit} className={"max-w-2xl mx-auto"}>
                <div className={"grid grid-cols-auto gap-6 mt-10 mb-8"}>
                    <input name={"Name"} type={"text"} placeholder={"Enter your name"} required  className={"flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md focus:border-lime-400 "}/>
                    <input name={"Email"} type={"email"} placeholder={"Enter your email"} required className={"flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md focus:border-lime-400 "} />

                </div>

                <textarea name={"Message"} rows={"6"} placeholder={"Enter your message"} required className={"w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md  mb-6 focus:border-lime-400"} />

                <button type={"submit"} className={"py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:border border-lime-400 duration-400 ease-in-out"}>Submit now  <IoIosSend /></button> <p className={"mt-4"}>{result}</p>


            </form>
        </div>
    )
}