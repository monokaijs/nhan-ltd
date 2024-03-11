import Section from "@/components/shared/section";
import {getSession} from "@/lib/utils/getSession";
import {redirect} from "next/navigation";

export default async function AuthLayout({children}: any) {
  const session = await getSession();
  if (session.loggedIn) {
    return redirect('/');
  }
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