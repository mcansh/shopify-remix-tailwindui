import type { LinksFunction } from "remix";
import { Meta, Links, Scripts, LiveReload } from "remix";
import { Outlet } from "react-router-dom";

import tailwindUrl from "./styles/tailwind.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindUrl },
    {
      rel: "stylesheet",
      href: "https://rsms.me/inter/inter.css",
    },
  ];
};

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Header />
      <Outlet />
      <Footer />
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>
        Replace this UI with what you want users to see when your app throws
        uncaught errors.
      </p>
    </Document>
  );
}
