import Image from "next/image";
import SplitText from "@/app/Hero/page";
import About from "@/app/About/page";
import Projects from "@/app/projects/page";

export default function Home() {
  return (
    <div>
      <SplitText />
      <About />
        <Projects />


    </div>
  );
}
