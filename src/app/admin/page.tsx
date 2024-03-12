"use client";
import {Bars3Icon} from "@heroicons/react/24/outline";
import {useAdminContext} from "@/app/admin/components/contexts/AdminContext";

export default function Page() {
  const {sidebar} = useAdminContext();
  return <>
    <button
      className={'w-10 h-10 flex items-center justify-center'}
      data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar"
      aria-controls="separator-sidebar" type="button"
      onClick={() => {
        sidebar.setCollapsed(!sidebar.collapsed);
      }}
    >
      <span className="sr-only">Open sidebar</span>
      <Bars3Icon className={'w-4 h-4'}/>
    </button>
    Something
  </>
}