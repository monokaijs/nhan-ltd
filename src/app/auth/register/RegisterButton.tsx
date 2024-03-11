"use client";
import {useState} from "react";
import {ArrowPathIcon} from "@heroicons/react/24/outline";
import * as Toast from "@radix-ui/react-toast";
import {useRouter} from "next/navigation";

export default function RegisterButton() {
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const submit = () => {
    setLoading(true);
    const form = document.querySelector('#register-form') as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());
    fetch('/api/auth/register', {
      method: "POST",
      body: JSON.stringify(data)
    }).then(async r => {
      const data = await r.json();
      setError(!!data.error);
      setToastMessage(data.message);
      setToastOpen(true);
      if (!data.error) {
        setTimeout(() => {
          router.replace('/auth/login');
        }, 1000);
      }
    }).catch(e => {
    }).finally(() => setLoading(false));
  }

  return <>
    <Toast.Root className="ToastRoot" open={toastOpen} onOpenChange={setToastOpen}>
      <Toast.Title className="ToastTitle font-bold flex flex-row items-center gap-2">
        <div
          className="w-3 h-3 bg-accent rounded-full"
        />
        {error ? "Error" : "Success"}
      </Toast.Title>
      <Toast.Description className="ToastDescription">
        {toastMessage}
      </Toast.Description>
    </Toast.Root>
    <button
      disabled={loading}
      className={'px-2 py-1 border bg-accent text-gray-12 text-sm -mx-2 flex flex-row items-center gap-1 border-accent'}
      onClick={submit}
    >
      {loading && (<ArrowPathIcon
        className="animate-spin w-3 h-3"
      />)}
      Submit Registration
    </button>
  </>
}