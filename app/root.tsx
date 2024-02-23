import type { LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwindStyleHref from "./tailwind.css?url";

export const links: LinksFunction = () => {
  return [
    { rel: "preload", href: tailwindStyleHref, as: "style" },
    { rel: "stylesheet", href: tailwindStyleHref },
    { rel: "preload", href: "https://rsms.me/inter/inter.css", as: "style" },
    { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
    { rel: "icon", href: "/favicon.png", type: "image/png" },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col h-screen min-h-screen">
        <Outlet />
        <Scripts />
        <ScrollRestoration />
      </body>
    </html>
  );
}
