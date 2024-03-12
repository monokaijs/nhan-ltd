"use client";
import {cn} from "@/lib/utils";
import styles from "@/lib/styles/sidebar.module.scss";
import {useAdminContext} from "@/app/admin/components/contexts/AdminContext";
import {ChartPieIcon} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const {sidebar} = useAdminContext();

  return <aside
    id="separator-sidebar"
    className={cn(styles.sidebar, sidebar.collapsed ? styles.collapsed : '')}
    aria-label="Sidebar"
    onClick={e => {
      e.stopPropagation();
    }}
  >
    <div className={cn(styles.backdrop, 'z-0')} onClick={() => {
      sidebar.setCollapsed(false);
    }}/>
    <div className="h-full px-3 py-4 overflow-y-auto z-50 relative">
      <ul className="space-y-2 font-medium">
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-2 group hover:bg-gray-11 rounded-xl"
          >
            <ChartPieIcon className={'w-5 h-5'}/>
            <span className="ms-3">Dashboard</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
}