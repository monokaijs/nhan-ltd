"use client";
import AppLink from "@/components/shared/app-link";
import {ArrowPathIcon, ArrowRightIcon, BellAlertIcon} from "@heroicons/react/24/outline";
import GoogleIcon from "@/app/assets/icons/GoogleIcon";
import GitHubIcon from "@/app/assets/icons/GitHubIcon";
import GitLabIcon from "@/app/assets/icons/GitLabIcon";
import {useState} from "react";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const submit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const form = document.querySelector('#login-form') as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());
    fetch('/api/auth/login', {
      method: "POST",
      body: JSON.stringify(data)
    }).then(async r => {
      const data = await r.json();
      setError(!!data.error);
      setMessage(data.message);
    }).catch(e => {
    }).finally(() => setLoading(false));
  }
  return <>
    <div className={'mt-8'}>
      <div className={'font-bold'}>
        Sign In
      </div>
      <div className={'text-sm mt-1 text-gray-9'}>
        Sign in to access more features on this website. You don't have account?{' '}
        <AppLink href={'/auth/register'}>Create new account</AppLink>.
      </div>
      {message && (
        <div
          className={'animate-in fade-in duration-500 mt-4 border border-solid border-gray-12 hover:border-accent py-2 px-4 pr-2 -mx-2 text-sm flex flex-row items-center gap-1'}>
          <BellAlertIcon className={'w-4 h-4'}/>
          <div className={'flex flex-col ml-2'}>
            <div className={'font-bold'}>
              {error ? "Error" : "Success"}
            </div>
            <div>
              {message}
            </div>
          </div>
        </div>
      )}
      <form
        id={'login-form'}
        className={'mt-4'}
      >
        <div>
          <input
            autoComplete={'one-time-code'}
            type="email" name="email"
            className="box-content w-full md:w-72 bg-gray-12 px-2 py-1 outline-none border border-gray-12 hover:border-accent -mx-2 text-sm"
            placeholder="name@company.com"
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
          <button
            disabled={loading}
            onClick={submit}
            className={'px-2 py-1 border bg-accent text-gray-12 text-sm -mx-2 flex flex-row items-center gap-1 border-accent'}>
            Sign in
            {loading ? <ArrowPathIcon
              className="animate-spin w-3 h-3"
            /> : <ArrowRightIcon className={'w-3 h-3'}/>}
          </button>
          <AppLink href={'/auth/forgot-password'} variant={'route'}>
            Forgot Password
          </AppLink>
        </div>
      </form>
      <div className="h-px bg-gray-12 mt-4 mb-2 -mx-2"/>
      <div className={'text-sm text-gray-9 mb-2 text-center'}>
        Or continue with
      </div>
      <div className={'flex flex-col gap-2'}>
        <button
          className={'group text-sm px-2 py-1 border border-solid border-gray-12 cursor-pointer w-full -mx-2 hover:bg-accent hover:border-accent hover:text-gray-12 flex flex-row justify-center gap-2 items-center'}
        >
          <GoogleIcon className={'fill-accent group-hover:fill-gray-12 w-2.5 h-2.5'}/>
          Continue with Google
        </button>
        <button
          className={'group text-sm px-2 py-1 border border-solid border-gray-12 cursor-pointer w-full -mx-2 box-content hover:bg-accent hover:border-accent hover:text-gray-12 flex flex-row justify-center gap-2 items-center'}
        >
          <GitHubIcon className={'fill-accent group-hover:fill-gray-12 w-2.5 h-2.5'}/>
          Continue with GitHub
        </button>
        <button
          className={'group text-sm px-2 py-1 border border-solid border-gray-12 cursor-pointer w-full -mx-2 box-content hover:bg-accent hover:border-accent hover:text-gray-12 flex flex-row justify-center gap-2 items-center'}
        >
          <GitLabIcon className={'fill-accent group-hover:fill-gray-12 w-2.5 h-2.5'}/>
          Continue with GitLab
        </button>
      </div>
    </div>
  </>
}