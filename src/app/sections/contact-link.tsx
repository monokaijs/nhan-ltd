"use client";
import Section from "@/components/shared/section";
import React, {ReactNode} from "react";
import {Slot} from "@radix-ui/react-slot";

import {DocumentDuplicateIcon} from "@heroicons/react/24/outline";
import {cn} from "@/lib/utils";
import {ArrowUpRightIcon} from "@heroicons/react/16/solid";

export const ContactCopyItem = ({title, copy}: { title: string, copy: string }) => {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = (text: string) => {
    // TODO: handle click sound
    setTimeout(() => {
      setCopied(false);
    }, 2000);
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <button onClick={() => handleCopy(copy)}>
      {copied ? "Copied to clipboard!" : title}
    </button>
  );
};

export const ContactItem = (props: {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}) => {
  const {
    icon,
    children,
    className,
  } = props;
  return (
    <div
      className={cn("group relative text-gray-11 hover:text-gray-1", className)}
    >
      <Slot>{children}</Slot>
      <div
        className="group-hover:opacity-100 opacity-0 absolute -right-4 bottom-[5px] rounded-sm bg-accent shrink-0 block w-3 h-3 text-[black]"
        aria-hidden={true}
      >
        {icon}
      </div>
    </div>
  );
};

export const EmailMe = ({title = 'Email'}: {title?: string}) => {
  return <ContactItem icon={<DocumentDuplicateIcon className={'w-3 h-3'}/>}>
    <ContactCopyItem title={title} copy="me@nhan.ltd"/>
  </ContactItem>;
}

export default function ContactLinks() {
  return (
    <Section>
      <div className="flex flex-wrap mt-12 md:flex-col md:gap-y-0 gap-y-2 gap-x-6 md:items-end md:mt-0">
        <EmailMe/>
        <ContactItem icon={<ArrowUpRightIcon className={'w-3 h-3'}/>}>
          <a href="https://t.me/delimister" target="_blank">
            Telegram
          </a>
        </ContactItem>
        <ContactItem icon={<ArrowUpRightIcon className={'w-3 h-3'}/>}>
          <a href="https://linkedin.com/in/monokaijs" target="_blank">
            LinkedIn
          </a>
        </ContactItem>
        <ContactItem icon={<ArrowUpRightIcon className={'w-3 h-3'}/>}>
          <a href="https://github.com/monokaijs" target="_blank">
            GitHub
          </a>
        </ContactItem>
        <ContactItem icon={<ArrowUpRightIcon className={'w-3 h-3'}/>}>
          <a href="https://nhan.ltd/cv.pdf" target="_blank">
            My CV
          </a>
        </ContactItem>
      </div>
    </Section>
  );
};
