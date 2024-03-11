import Section from "@/components/shared/section";

export default function AuthLayout({children}: any) {
  return <div className="p-4 py-10 md:p-12">
    <div className="justify-between md:flex animate-in fade-in duration-500">
      <div className="md:max-w-[450px] flex flex-col md:gap-y-0 gap-y-6">
        <Section>
        {children}
        </Section>
      </div>
    </div>
  </div>
}