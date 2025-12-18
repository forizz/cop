import { memo } from "react";

import { Outlet } from "react-router";

import { Footer, Header } from "~/widgets";

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const LayoutMemo = memo(Layout);

export { LayoutMemo as default };
