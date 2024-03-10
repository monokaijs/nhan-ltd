import Experience from "@/app/sections/experience";
import Summary from "@/app/sections/summary";
import Projects from "@/app/sections/projects";
import ContactLinks from "@/app/sections/contact-link";
import Footer from "@/components/shared/footer";
import BlogFeed from "@/components/blogs/blog-feed";

export default function Home() {
  return <div className="justify-between md:flex animate-in fade-in duration-500">
    <div className="md:max-w-[450px] flex flex-col md:gap-y-0 gap-y-6">
      <Summary/>
      <BlogFeed posts={[{
        _id: 1,
        title: 'Some post',
        summary: 'Some marry text',
        hashtags: ['you', 'me', 'we'],
        body: 'Body',
      }, {
        _id: 2,
        title: 'Some post',
        summary: 'Some marry text',
        hashtags: ['you', 'me', 'we'],
        body: 'Body',
      }, {
        _id: 3,
        title: 'Some post',
        summary: 'Some marry text',
        hashtags: ['you', 'me', 'we'],
        body: 'Body',
      }]}/>
      <Projects/>
      <Footer/>
    </div>
    <aside className="md:max-w-[450px] md:text-right">
      <ContactLinks/>
    </aside>
  </div>
}
