import {
  ActionFunction,
  json,
  LinksFunction,
  LoaderFunction,
  redirect,
  RouteComponent,
} from "remix";
import { useLoaderData } from "remix";

import stylesUrl from "~/styles/index.css";
import { getSdk, ProductsQuery } from "~/graphql";
import { storefront } from "~/lib/storefront.server";
import { getSession, commitSession } from "~/session.server";
import { Grid } from "~/components/grid";
import { ProductCard } from "~/components/product/card";

type RouteData = {
  products: ProductsQuery["products"];
};

let loader: LoaderFunction = async () => {
  let sdk = getSdk(storefront);
  let { products } = await sdk.Products();

  let data: RouteData = { products };

  return json(data);
};

let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

const action: ActionFunction = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie"));
  let requestBody = await request.text();
  let formData = new URLSearchParams(requestBody);
  let enableJS = formData.get("enableJS") === "true";
  let returnTo = formData.get("returnTo");
  session.set("js", enableJS);
  return redirect(returnTo ?? "/", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

const Index: RouteComponent = () => {
  let data = useLoaderData<RouteData>();

  return (
    <Grid variant="filled">
      {data.products.edges.slice(0, 3).map((product, index) => (
        <ProductCard
          key={product.node.title}
          product={product}
          imgProps={{
            width: index === 0 ? 1080 : 540,
            height: index === 0 ? 1080 : 540,
          }}
        />
      ))}
    </Grid>
  );
};

export default Index;
export { action, links, loader };
