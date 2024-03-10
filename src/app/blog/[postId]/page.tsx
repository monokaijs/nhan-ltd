import {notFound, useParams} from "next/navigation";
import AppLink from "@/components/shared/app-link";
import {ArrowLeftIcon} from "@heroicons/react/24/outline";

interface BlogPostPageProps {
  params: {
    postId?: string;
  }
}

export default function BlogPostPage({params}: BlogPostPageProps) {
  if (!params.postId) return notFound();
  return <div>
    <AppLink href={'/blog'} variant={'route'}>
      <ArrowLeftIcon className={'w-3 h-3'}/>
      Return to Blog
    </AppLink>

    <div className={'text-xl'}>
      Blog title
    </div>
    <div className={''}>
      Summary
    </div>
    <div>
      Context actions
    </div>

    <div>
      Content
    </div>
    <div>
      Author
    </div>
    <div>
      Related
    </div>
    <div>
      Comments
    </div>
  </div>
}
