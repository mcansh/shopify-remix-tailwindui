import { Outlet } from "react-router-dom";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
