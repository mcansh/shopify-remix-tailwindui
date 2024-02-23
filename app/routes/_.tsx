import { Outlet } from "@remix-run/react";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="flex-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
