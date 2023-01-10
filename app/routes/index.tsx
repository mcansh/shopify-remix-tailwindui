import type { DataFunctionArgs, MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { formatMoney } from "~/lib/format-money";
import { getSdk } from "~/graphql/index.server";
import { storefront } from "~/lib/storefront.server";
import { sessionStorage } from "~/session.server";
import { getRedirectTo } from "~/lib/redirect";

export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

export async function loader() {
  let sdk = getSdk(storefront);
  let { products } = await sdk.Products();
  return json({ products });
}

export async function action({ request }: DataFunctionArgs) {
  let session = await sessionStorage.getSession(request.headers.get("Cookie"));
  let formData = await request.formData();
  let enableJS = formData.get("enableJS") === "true";
  let returnTo = getRedirectTo(formData);

  session.set("js", enableJS);
  return redirect(returnTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

export default function IndexPage() {
  let data = useLoaderData<typeof loader>();

  return (
    <main className="px-4 mt-24 sm:mt-32">
      <div className="mx-auto text-center max-w-7xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Beautiful digital design assets!
        </h1>
        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Take your digital products to another level with our collection of UI
          kits, templates and icon sets. All our assets were carefully designed
          to work together beautifully. We have obsessed over every little
          detail, and we really believe it shows.
        </p>
        <div className="flex justify-center max-w-md mx-auto mt-5 md:mt-8">
          <div className="rounded-md shadow">
            <Link
              to="#"
              className="flex items-center justify-center w-full px-6 py-4 text-base font-medium text-white bg-gray-900 border border-transparent divide-x divide-gray-600 rounded-md hover:bg-gray-700 md:text-lg"
            >
              <span className="pr-6">Get the bundle</span>
              <span className="pl-6">$199</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-2xl px-4 pt-24 mx-auto sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {data.products.edges.map((item) => {
            let product = item.node;
            let image = product.images.edges[0].node;

            return (
              <Link
                to={`/products/${product.handle}`}
                key={product.handle}
                className="group"
              >
                <div className="w-full overflow-hidden rounded-lg aspect-w-4 aspect-h-3 sm:aspect-w-4 sm:aspect-h-3">
                  <img src={image.transformedSrc} alt={image.altText ?? ""} />
                </div>
                <div className="flex items-center justify-between mt-4 text-base font-medium text-gray-900">
                  <h3>{product.title}</h3>
                  <p>
                    {formatMoney(
                      Number(product.priceRange.minVariantPrice.amount)
                    )}
                  </p>
                </div>
                <p className="mt-1 text-sm italic text-gray-500">
                  {product.tags.join(", ")}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
