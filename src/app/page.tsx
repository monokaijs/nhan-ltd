import Experience from "@/app/sections/experience";
import Summary from "@/app/sections/summary";
import Projects from "@/app/sections/projects";

export default function Home() {
  return <div className="justify-between md:flex animate-in fade-in duration-500">
    <div className="md:max-w-[450px] flex flex-col md:gap-y-0 gap-y-6">
      <Summary/>
      <Experience/>
      <Projects/>
    </div>
    <aside className="md:max-w-[450px] md:text-right">
    </aside>
  </div>
}
