import {
  ActionFunction,
  ErrorBoundaryComponent,
  json,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
} from "remix";
import { Meta, Links, Scripts, LiveReload, Outlet, useCatch } from "remix";

import { commitSession, getSession } from "./session.server";
import { Header } from "./components/header";
import tailwindUrl from "./styles/tailwind.css";
import globalStylesUrl from "./styles/global.css";
import { CollectionQuery, getSdk, ShopInfoQuery } from "./graphql";
import { storefront } from "./lib/storefront.server";

let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindUrl },
    { rel: "stylesheet", href: globalStylesUrl },
    {
      rel: "stylesheet",
      href: "https://rsms.me/inter/inter.css",
    },
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    },
  ];
};

type RouteData = {
  enableJS: boolean;
  shopInfo: ShopInfoQuery["shop"];
  collections: CollectionQuery["collections"];
};

let loader: LoaderFunction = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie"));
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

  let sdk = getSdk(storefront);
  let { shop } = await sdk.ShopInfo();
  let { collections } = await sdk.CollectionQuery();

  let data: RouteData = {
    enableJS,
    shopInfo: shop,
    collections,
  };

  return json(data, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

let meta: MetaFunction = ({ data }: { data: RouteData | undefined }) => {
  if (!data) {
    return {
      viewport: "width=device-width, initial-scale=1.0",
      title: "Remix Starter",
    };
  }

  return {
    viewport: "width=device-width, initial-scale=1.0",
    title: data.shopInfo.name,
  };
};

interface DocumentProps {
  enableJS?: boolean;
  title?: string;
}

const Document: React.FC<DocumentProps> = ({ children, enableJS, title }) => {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta charSet="utf-8" />
        {title && <title>{title}</title>}
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
    <Document enableJS={data.enableJS}>
      <Header collections={data.collections} />
      <Outlet />
    </Document>
  );
}

const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  console.log(error);

  return (
    <Document title="oh shiz">
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
        <Document title={`${caught.status} ${caught.statusText}`}>
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
export { links, loader, meta, ErrorBoundary, CatchBoundary };
