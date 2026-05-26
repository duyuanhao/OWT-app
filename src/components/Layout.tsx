import type { ReactNode } from "react";
import type { ModuleKey } from "../types/platform";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function Layout({
  active,
  onChange,
  children
}: {
  active: ModuleKey;
  onChange: (key: ModuleKey) => void;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar active={active} onChange={onChange} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="min-w-0 flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
