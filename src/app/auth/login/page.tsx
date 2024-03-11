import AppLink from "@/components/shared/app-link";
import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/24/outline";
import LoginForm from "@/app/auth/login/LoginForm";

export default function LoginPage() {
  return <>
    <AppLink href={'/'} variant={'route'}>
      <ArrowLeftIcon className={'w-3 h-3'}/>
      Return to Home
    </AppLink>
    <LoginForm/>
  </>
}
