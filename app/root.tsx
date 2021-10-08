import {
  ErrorBoundaryComponent,
  LinksFunction,
  LoaderFunction,
  useLoaderData,
} from "remix";
import { Meta, Links, Scripts, LiveReload, useCatch } from "remix";
import { Outlet } from "react-router-dom";

import tailwindUrl from "./styles/tailwind.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { json } from "remix-utils";

let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindUrl },
    {
      rel: "stylesheet",
      href: "https://rsms.me/inter/inter.css",
    },
  ];
};

interface RouteData {
  js: boolean;
}

let loader: LoaderFunction = ({ request }) => {
  let url = new URL(request.url);
  let js = url.searchParams.has("js");
  return json<RouteData>({ js });
};

interface DocumentProps {
  enableJS?: boolean;
}

const Document: React.FC<DocumentProps> = ({ children, enableJS }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        {enableJS && <Scripts />}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

function App() {
  let data = useLoaderData<RouteData>();
  return (
    <Document enableJS={data.js}>
      <Header />
      <Outlet />
      <Footer />
    </Document>
  );
}

const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
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
};

const CatchBoundary: React.VFC = () => {
  let caught = useCatch();

  switch (caught.status) {
    case 401:
    case 404:
      return (
        <Document>
          <h1>
            {caught.status} {caught.statusText}
          </h1>
        </Document>
      );

    default:
      throw new Error(
        `Unexpected caught response with status: ${caught.status}`
      );
  }
};

export default App;
export { links, ErrorBoundary, CatchBoundary };
