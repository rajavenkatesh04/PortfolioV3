import Image from "next/image";
import SplitText from "@/app/Hero/page";
import About from "@/app/About/page";
import Projects from "@/app/projects/page";
import Footer from "@/app/_components/ui/Footer";
import Education from "@/app/Education/page";
import Contact from "@/app/contact/page";
import About2 from "@/app/About/page2";

export default function Home() {
  return (
    <div>
      <SplitText />
      <About />
        <Projects />
        <Education />
        <Contact />
        <Footer />


    </div>
  );
}
