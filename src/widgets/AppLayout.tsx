import React from "react";

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

export { AppLayout };
