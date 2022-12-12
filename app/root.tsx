import type {
  DataFunctionArgs,
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import tailwindUrl from "./styles/tailwind.css";
import { sessionStorage } from "./session.server";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindUrl },
    { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
    { rel: "icon", href: "/favicon.png", type: "image/png" },
  ];
};

export let meta: MetaFunction = () => {
  return {
    viewport: "width=device-width, initial-scale=1.0",
  };
};

export async function loader({ request }: DataFunctionArgs) {
  let session = await sessionStorage.getSession(request.headers.get("Cookie"));
  let url = new URL(request.url);

  let enableJS: boolean = false;

  // check if the user requested js
  // only set the session if the user requested js
  if (url.searchParams.has("js")) {
    let js = url.searchParams.get("js") === "1";
    enableJS = js;
    session.set("js", enableJS);
  } else if (session.has("js")) {
    enableJS = session.get("js");
  } else {
    enableJS = false;
  }

  return json(
    { enableJS },
    { headers: { "Set-Cookie": await sessionStorage.commitSession(session) } }
  );
}

interface DocumentProps {
  enableJS?: boolean;
  title?: string;
  children: React.ReactNode;
}

export default function App() {
  let data = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header enableJS={data.enableJS} />
        <Outlet />
        <Footer />
        {data.enableJS && <Scripts />}
        {process.env.NODE_ENV === "development" && <LiveReload />}
        <ScrollRestoration />
      </body>
    </html>
  );
}
