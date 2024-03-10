import Experience from "@/app/sections/experience";
import Summary from "@/app/sections/summary";
import Projects from "@/app/sections/projects";
import ContactLinks from "@/app/sections/contact-link";
import Footer from "@/components/shared/footer";

export default function Home() {
  return <div className="justify-between md:flex animate-in fade-in duration-500">
    <div className="md:max-w-[450px] flex flex-col md:gap-y-0 gap-y-6">
      <Summary/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
    <aside className="md:max-w-[450px] md:text-right">
      <ContactLinks/>
    </aside>
  </div>
}
