import {ReactNode} from "react";
import AdminContext from "@/app/admin/components/contexts/AdminContext";
import Sidebar from "@/app/admin/components/Sidebar";

export default function AdminLayout({children}: { children: ReactNode }) {
  return <AdminContext>
    <div className={'flex flex-row'}>
      <Sidebar/>
      <div className="flex-1">
        {children}
      </div>
    </div>
  </AdminContext>
}