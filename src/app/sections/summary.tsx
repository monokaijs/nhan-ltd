import Section from "@/components/shared/section";
import AppLink from "@/components/shared/app-link";
import {ArrowRightIcon, BookmarkIcon} from "@heroicons/react/24/outline";
import {EmailMe} from "@/app/sections/contact-link";

export default function Summary() {
  return <Section>
    <h1 className="font-medium flex items-center gap-x-1.5">
      <span className="inline-block w-2 h-2 rounded-full bg-accent"></span>
      Nguyen Anh Nhan
    </h1>
    <p className="mt-1 text-gray-9">
      IT Enthusiast
    </p>
    <div className="flex flex-col mt-4 gap-y-2">
      <p>
        I love to craft creative products and solve real life pain-point with my IT skill.
        I have a wide-range technology knowledge with multiple engineering skill-set.
      </p>
      <div className="flex gap-x-6 mt-2 items-center">
        <AppLink href="/about" variant="route">
          About me
          <ArrowRightIcon className={'h-3 w-3'}/>
        </AppLink>
        <AppLink href="/articles" variant="route">
          My Articles
          <BookmarkIcon className={'h-3 w-3'}/>
        </AppLink>
        <EmailMe title={'Email me'}/>
      </div>
    </div>
  </Section>
}
