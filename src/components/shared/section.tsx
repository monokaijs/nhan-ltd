import {cn} from "@/lib/utils";
import {ReactNode} from "react";

interface SectionProps {
  heading?: string;
  className?: string;
  children?: ReactNode;
}

const Section = (props: SectionProps) => {
  const {
    heading,
    children,
    className,
  } = props;
  return (
    <div className={cn("p-1 md:p-4", className)}>
      {heading && <h2 className="mb-2 font-medium text-gray-11">{heading}</h2>}
      {children}
    </div>
  );
};

export default Section;
