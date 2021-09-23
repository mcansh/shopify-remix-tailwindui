import { format, parseISO } from "date-fns";
import * as React from "react";
import { RouteComponent, LoaderFunction, MetaFunction, Link } from "remix";
import { useRouteData, json } from "remix";
import { formatMoney } from "~/lib/format-money";
import { storefront } from "~/lib/storefront.server";
import { gql } from "~/utils";

interface Product {
  title: string;
  description: string;
  handle: string;
  updatedAt: string;
  tags: Array<string>;
  priceRange: {
    minVariantPrice: {
      amount: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        transformedSrc: string;
        altText: string;
      };
    }>;
  };
}

const COMBINED_QUERY = gql`
  query SingleProduct($handle: String!) {
    productByHandle(handle: $handle) {
      title
      description
      handle
      updatedAt
      tags
      priceRange {
        minVariantPrice {
          amount
        }
      }
      images(first: 1) {
        edges {
          node {
            transformedSrc
            altText
          }
        }
      }
    }

    products(first: 6) {
      edges {
        node {
          title
          handle
          tags
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 1) {
            edges {
              node {
                transformedSrc
                altText
              }
            }
          }
        }
      }
    }
  }
`;

interface RouteData {
  product: Product;
  products: { edges: Array<{ node: Product }> };
}

const loader: LoaderFunction = async ({ params }) => {
  const { data } = await storefront<{
    productByHandle: Product;
    products: Array<Product>;
  }>(COMBINED_QUERY, { handle: params.handle });

  console.log(data);

  return json({ product: data.productByHandle, products: data.products });
};

const meta: MetaFunction = ({ data }: { data: RouteData }) => ({
  title: `${data.product.title}`,
});

const ProductPage: RouteComponent = () => {
  const data = useRouteData<RouteData>();
  const product = data.product;
  const image = product.images.edges[0].node;

  const relatedProducts = data.products.edges
    .filter((item) => item.node.handle !== product.handle)
    .slice(0, 4);

  return (
    <>
      {/* header */}

      <main className="max-w-7xl mx-auto pt-14 px-4 sm:pt-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-16">
          <div className="lg:col-span-4">
            <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
              <img
                src={image.transformedSrc}
                className="object-center object-cover"
                alt={image.altText}
              />
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
                <p className="text-sm text-gray-500 mt-2">
                  {product.tags.join(", ")} · Updated{" "}
                  <time dateTime={product.updatedAt}>
                    {format(parseISO(product.updatedAt), "dd MMM yyyy")}
                  </time>
                </p>
              </div>
            </div>
            <p className="text-gray-500 mt-6">{product.description}</p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <button
                type="button"
                className="w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
              >
                <span>
                  Pay{" "}
                  {formatMoney(
                    Number(product.priceRange.minVariantPrice.amount)
                  )}
                </span>
              </button>
              <button
                type="button"
                className="w-full bg-white border rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
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
              className="whitespace-nowrap text-sm font-medium text-gray-900 hover:text-gray-700"
              to="/"
            >
              View all<span aria-hidden="true"> →</span>
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            {relatedProducts.map((item) => {
              const relatedProduct = item.node;
              console.log({ item });

              const image = relatedProduct.images.edges[0].node;

              return (
                <div className="relative group" key={relatedProduct.handle}>
                  <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={image.transformedSrc}
                      className="object-center object-cover group-hover:opacity-75"
                      alt={image.altText}
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
                    <h3>
                      <Link to={`/products/${relatedProduct.handle}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.title}
                      </Link>
                    </h3>
                    <p>
                      {formatMoney(
                        Number(relatedProduct.priceRange.minVariantPrice.amount)
                      )}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {relatedProduct.tags.join(", ")}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* footer */}
    </>
  );
};

export default ProductPage;
export { loader, meta };
