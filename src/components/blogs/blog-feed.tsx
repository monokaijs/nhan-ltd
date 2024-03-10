import Section from "@/components/shared/section";
import AppLink from "@/components/shared/app-link";
import {ArrowUpRightIcon} from "@heroicons/react/16/solid";
import {ArrowRightIcon, ClockIcon, HeartIcon, ShareIcon} from "@heroicons/react/24/outline";
import {Fragment} from "react";

interface BlogFeedProps {
  heading?: string;
  posts?: BlogPost[];
}

export default function BlogFeed({heading, posts}: BlogFeedProps) {
  return <Section heading={heading || 'Blog'}>
    <ul className="flex flex-col gap-y-3">
      {(posts || []).map(post => (
        <Fragment key={post._id}>
          <li className={'group cursor-pointer'}>
            <div className={'flex justify-between'}>
              <div className={'font-bold'}>
                {post.title}
              </div>
              <div className={'text-gray-10 text-sm flex flex-row gap-1.5'}>
                <a className={'hover:text-accent'}>
                  <HeartIcon className={'w-3 h-3'}/>
                </a>
                <a className={'hover:text-accent'}>
                  <ShareIcon className={'w-3 h-3'}/>
                </a>
              </div>
            </div>
            <p className={'text-gray-8 line-clamp-2 group-hover:text-gray-1'}>
              {post.summary}
            </p>
            <div className="flex items-center mt-2 gap-x-1 text-gray-10 text-sm group-hover:text-gray-2">
              <div className={'flex flex-row items-center gap-1'}>
                <ClockIcon className={'w-3 h-3'}/>
                30 mins
              </div>
              &#x2022;
              <div>March 10, 2024</div>
              &#x2022;
              <div className={'flex flex-row gap-x-1'}>
                {post.hashtags.map(tag => {
                  return <a key={tag} className={'hover:text-accent'}>#{tag}</a>;
                })}
              </div>
            </div>
          </li>
          <div className="h-px bg-gray-12 w-full mx-auto"/>
        </Fragment>
      ))}
    </ul>
  </Section>;
}
