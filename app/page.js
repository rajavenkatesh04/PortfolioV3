import Image from "next/image";
import SplitText from "@/app/Hero/page";
import About from "@/app/About/page";
import Projects from "@/app/projects/page";
import Footer from "@/app/_components/ui/Footer";

export default function Home() {
  return (
    <div>
      <SplitText />
      <About />
        <Projects />
        <Footer />


    </div>
  );
}
