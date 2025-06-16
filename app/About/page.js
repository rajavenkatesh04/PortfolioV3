import Image from "next/image";

export default function About() {
    return(
        <div>
            <div className={`my-5`}>
                <h1 className={`text-center text-5xl `}>About Me</h1>

                {/*Photo*/}
                <div>
                    {/*<Image src={`/Raja.png`} alt={`Logo`} width={150} height={100}/>*/}
                </div>
            </div>
        </div>
    )
}