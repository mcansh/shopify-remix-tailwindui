import { format, parseISO } from "date-fns";
import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/cloudflare";
import { redirect, json } from "@remix-run/cloudflare";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import {
  Form,
  Link,
  useRouteError,
  useLoaderData,
  useNavigation,
  useSearchParams,
  isRouteErrorResponse,
} from "@remix-run/react";
import { formatMoney } from "~/lib/format-money";
import {
  CreateCheckout,
  createClient,
  ProductByHandle,
  Products,
} from "~/.server/storefront";

export async function loader({ context, params, request }: LoaderFunctionArgs) {
  if (!params.handle) {
    throw new Error("missing params.handle");
  }

  const url = new URL(request.url);
  const selectedOptions = Array.from(url.searchParams.entries()).map(
    ([name, value]) => ({ name, value }),
  );

  const client = createClient(context);

  const [productByHandle, allProducts] = await Promise.all([
    client.query(ProductByHandle, { handle: params.handle, selectedOptions }),
    client.query(Products, {}, {}),
  ]);

  if (!productByHandle.data?.product) {
    throw new Response(null, { status: 404 });
  }

  const optionNames = new Set(
    productByHandle.data.product.options.map((option) => option.name),
  );
  const optionsMap = new Map(
    selectedOptions
      .filter((option) => optionNames.has(option.name))
      .map((option) => [option.name, option.value]),
  );

  let defaultVariantId: string | undefined = undefined;
  let selectedVariantId: string | undefined = undefined;
  let availableForSale = false;
  let price = productByHandle.data.product.priceRange.minVariantPrice;
  for (const item of productByHandle.data.product.variants.edges) {
    if (typeof defaultVariantId === "undefined") {
      defaultVariantId = String(item.node.id);
    }
    if (
      item.node.selectedOptions.every(
        (option) =>
          optionsMap.has(option.name) &&
          optionsMap.get(option.name) === option.value,
      )
    ) {
      selectedVariantId = String(item.node.id);
      availableForSale = item.node.availableForSale;
      price = item.node.price;
    }
  }

  if (typeof selectedVariantId === "undefined") {
    selectedVariantId = defaultVariantId;
    for (const item of productByHandle.data.product.variants.edges) {
      if (item.node.id === selectedVariantId) {
        selectedVariantId = item.node.id;
        availableForSale = item.node.availableForSale;
        price = item.node.price;
      }
    }
  }

  const productOptions =
    productByHandle.data.product.options.length === 1 &&
    productByHandle.data.product.options.at(0)?.values.length === 1
      ? []
      : productByHandle.data.product.options.map((option) => {
          return { name: option.name, values: option.values };
        });

  const relatedProducts = allProducts.data?.products.edges
    .filter((item) => item.node.handle !== params.handle)
    .slice(0, 4);

  return json({
    relatedProducts,
    product: {
      ...productByHandle.data.product,
      options: productOptions,
      availableForSale,
      selectedVariantId: selectedVariantId!,
      price,
    },
  });
}

export async function action({ context, request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const variantId = formData.get("variantId");

  if (!variantId || typeof variantId !== "string") {
    throw new Response(
      `expected variantId to be a string, received ${typeof variantId}`,
      { status: 400 },
    );
  }

  const client = createClient(context);
  const result = await client.mutation(CreateCheckout, { variantId });
  const checkoutUrl = result.data?.checkoutCreate?.checkout?.webUrl;

  if (!checkoutUrl || typeof checkoutUrl !== "string") {
    return redirect(request.url);
  }

  return redirect(checkoutUrl);
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data || !data.product) {
    return [{ title: "Product not found" }];
  }

  return [{ title: `${data.product.title}` }];
};

export default function ProductPage() {
  const { product, relatedProducts } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const pendingForm =
    navigation.formData?.get("variantId") === product.selectedVariantId;
  const [searchParams] = useSearchParams();
  searchParams.sort();

  return (
    <main className="px-4 mx-auto max-w-7xl pt-14 sm:pt-24 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-16">
        <div className="lg:col-span-4">
          <div>
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}
              {product.images.edges.length === 1 ? null : (
                <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
                  <Tab.List className="grid grid-cols-4 gap-6">
                    {product.images.edges.map((item) => (
                      <Tab
                        key={item.node.url}
                        className="relative flex aspect-w-4 aspect-h-3 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                      >
                        {({ selected }) => (
                          <>
                            <span className="absolute inset-0 overflow-hidden rounded-md">
                              <img
                                src={item.node.url}
                                alt=""
                                className="h-full w-full object-cover object-center"
                              />
                            </span>
                            <span
                              className={clsx(
                                selected
                                  ? "ring-indigo-500"
                                  : "ring-transparent",
                                "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2",
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
              )}

              <Tab.Panels className="overflow-hidden bg-gray-100 rounded-lg aspect-w-4 aspect-h-3 w-full">
                {product.images.edges.map((item) => (
                  <Tab.Panel key={item.node.url}>
                    <img
                      src={item.node.url}
                      alt=""
                      className="h-full w-full object-contain object-center sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:col-span-3">
          <div className="flex flex-col-reverse">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {product.title}
              </h1>
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {product.tags.join(", ")} · Updated{" "}
                <time dateTime={product.updatedAt}>
                  {format(parseISO(product.updatedAt), "dd MMM yyyy")}
                </time>
              </p>
            </div>
          </div>
          {product.descriptionHtml ? (
            <div
              className="mt-6 text-gray-500 space-y-6"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
          ) : (
            <p className="mt-6 text-gray-500">{product.description}</p>
          )}

          {product.options.map((option) => (
            <div key={option.name} className="mt-6">
              <ul className="mt-2" data-testid="product-option">
                {option.values.map((value) => {
                  const active = searchParams.get(option.name) === value;
                  const productSearchParams = new URLSearchParams(searchParams);
                  productSearchParams.set(option.name, value);
                  return (
                    <li key={value} className="mr-2 inline-block">
                      <Link
                        className={clsx(
                          "rounded border px-4 py-2 hover:text-gray-300 hover:border-gray-300",
                          active ? "border-gray-300" : "border-gray-900",
                        )}
                        to={{ search: productSearchParams.toString() }}
                      >
                        {value}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-4 sm:grid-cols-2">
            <Form method="post">
              <fieldset disabled={!!pendingForm}>
                <input
                  type="hidden"
                  name="variantId"
                  value={product.selectedVariantId}
                />
                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-gray-900 border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
                >
                  {pendingForm && (
                    <svg
                      className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  )}
                  <span>Pay {formatMoney(Number(product.price.amount))}</span>
                </button>
              </fieldset>
            </Form>
            <button
              type="button"
              className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-900 bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
            >
              Preview
            </button>
          </div>
          <div className="pt-10 sm:border-t sm:mt-10">
            <h3 className="text-sm font-medium text-gray-900">License</h3>
            <p className="mt-4 text-sm text-gray-500">
              For personal and professional use. You cannot resell or
              redistribute these icons in their original or modified state.{" "}
              <a
                href="#"
                className="font-medium text-gray-900 hover:text-gray-700"
              >
                Read full license
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto mt-24 lg:mt-32 lg:max-w-none">
        <div className="flex items-center justify-between space-x-4">
          <h2 className="text-lg font-medium text-gray-900">
            Customers also viewed
          </h2>
          <Link
            className="text-sm font-medium text-gray-900 whitespace-nowrap hover:text-gray-700"
            to="/"
          >
            View all<span aria-hidden="true"> →</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 mt-6 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {!relatedProducts
            ? null
            : relatedProducts.map((relatedProduct) => {
                const product = relatedProduct.node;
                const image = product.images.edges.at(0)?.node;

                return (
                  <div className="relative group" key={product.handle}>
                    <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-4 aspect-h-3">
                      {image?.url ? (
                        <img
                          src={image.url}
                          className="object-contain group-hover:opacity-75"
                          alt={image.altText ?? ""}
                        />
                      ) : (
                        <div />
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-4 space-x-8 text-base font-medium text-gray-900">
                      <h3>
                        <Link to={`/products/${product.handle}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.title}
                        </Link>
                      </h3>
                      <p>
                        {formatMoney(
                          Number(product.priceRange.minVariantPrice.amount),
                        )}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.tags.join(", ")}
                    </p>
                  </div>
                );
              })}
        </div>
      </div>
    </main>
  );
}

export function CatchBoundary() {
  const caught = useRouteError();

  if (isRouteErrorResponse(caught) && caught.status === 404) {
    return (
      <div className="flex items-center justify-center h-full py-4 text-xl text-center">
        Product not found
      </div>
    );
  }

  throw caught;
}
