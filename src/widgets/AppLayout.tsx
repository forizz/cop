import React, { memo } from "react";

import { Footer, Header } from "~/widgets";

function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

const AppLayoutMemo = memo(AppLayout);

export { AppLayoutMemo as AppLayout };
