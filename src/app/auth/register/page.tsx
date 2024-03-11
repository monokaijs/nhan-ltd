"use client";
import AppLink from "@/components/shared/app-link";
import {ArrowLeftIcon, ArrowRightIcon, EnvelopeIcon} from "@heroicons/react/24/outline";
import RegisterButton from "@/app/auth/register/RegisterButton";
import * as Toast from "@radix-ui/react-toast";

export default function RegisterPage() {
  return <>
    <Toast.Provider
      duration={2000}
    >
      <Toast.Viewport className="ToastViewport" />
      <AppLink href={'/'} variant={'route'}>
        <ArrowLeftIcon className={'w-3 h-3'}/>
        Return to Home
      </AppLink>
      <div className={'mt-8'}>
        <div className={'font-bold'}>
          Create Account
        </div>
        <div className={'text-sm mt-1 text-gray-9'}>
          Get your own account. Already have an account?{' '}
          <AppLink href={'/auth/login'}>Login now</AppLink>.
        </div>
        <form
          id={'register-form'}
          className={'mt-4'}
        >
          <div>
            <input
              autoComplete={'one-time-code'}
              type="text" name="username"
              className="box-content w-full md:w-72 bg-gray-12 px-2 py-1 outline-none border border-gray-12 hover:border-accent -mx-2 text-sm"
              placeholder="Username..."
            />
          </div>
          <div className={'mt-2'}>
            <input
              autoComplete={'one-time-code'}
              type="email" name="email"
              className="box-content w-full md:w-72 bg-gray-12 px-2 py-1 outline-none border border-gray-12 hover:border-accent -mx-2 text-sm"
              placeholder="email@example.com"
            />
          </div>
          <div className={'mt-2'}>
            <input
              autoComplete={'one-time-code'}
              type="password" name="password"
              className="box-content w-full md:w-72 bg-gray-12 px-2 py-1 outline-none border border-gray-12 hover:border-accent -mx-2 text-sm"
              placeholder="Password..."
            />
          </div>
          <div className={'mt-4 flex flex-row gap-5'}>
            <RegisterButton/>
          </div>
        </form>
      </div>
    </Toast.Provider>
  </>
}
