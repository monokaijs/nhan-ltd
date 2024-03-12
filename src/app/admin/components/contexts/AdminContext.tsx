"use client";
import {createContext, ReactNode, useContext, useState} from "react";

interface AdminLayoutContextType {
  sidebar: {
    collapsed: boolean;
    setCollapsed(collapsed: boolean): void;
  }
}

const AdminLayoutContext = createContext<AdminLayoutContextType>({
  sidebar: {
    collapsed: false,
    setCollapsed(collapsed: boolean) {
    }
  }
});

export function useAdminContext() {
  return useContext<AdminLayoutContextType>(AdminLayoutContext);
}


export default function AdminContext({children}: { children: ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return <AdminLayoutContext.Provider value={{
    sidebar: {
      collapsed: sidebarCollapsed,
      setCollapsed: (collapsed: boolean) => setSidebarCollapsed(collapsed),
    }
  }}>
    {children}
  </AdminLayoutContext.Provider>
}