import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

type SiteShellProps = {
  children: ReactNode;
};

/**
 * Renders the shared application shell for public pages.
 */
export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      <SiteHeader />
      <main className="pb-16">{children}</main>
      <SiteFooter />
    </div>
  );
}
