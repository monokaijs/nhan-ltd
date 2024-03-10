import Section from "@/components/shared/section";
import AppLink from "@/components/shared/app-link";
import {ArrowUpRightIcon} from "@heroicons/react/16/solid";

export default function Projects() {
  return <Section
    heading={'Projects'}
  >
    <ul className="flex flex-col gap-y-6">
      <li>
        <p>
          <AppLink href="https://monokaitoolkit.com" external>
            MonokaiToolkit
          </AppLink>{" "}
          is a project I have been working on since 2019. This is a helpful
          toolset for Facebook users to manage their account better along with
          have a much safer privacy.
        </p>
        <div className="flex items-center mt-2 gap-x-4">
          <a
            className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
            href="https://monokaitoolkit.com"
            target="_blank"
          >
            Find more{" "}
            <span
              className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
              aria-hidden={true}
            >
              <ArrowUpRightIcon className="shrink-0 text-gray-12 w-3 h-3"/>
            </span>
          </a>
        </div>
      </li>
    </ul>
  </Section>
}
