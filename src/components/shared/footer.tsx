import AppLink from "@/components/shared/app-link";

export default function Footer() {
  return <>
    <div className="h-px bg-gray-12 w-full"/>
    <div className="md:px-4 mt-2">
      <p>
        This website was written by <AppLink href={'https://nhan.ltd'}>MonokaiJs</AppLink>
        , UI inspired by <AppLink href={'https://mitul.ca'}>Mitul Shah</AppLink>.
      </p>
    </div>
  </>
}
