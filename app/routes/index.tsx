import {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
  Link,
  json,
  HeadersFunction,
} from "remix";
import { useRouteData } from "remix";
import { storefront } from "~/lib/storefront.server";

import { SearchIcon } from "@heroicons/react/outline";

import stylesUrl from "../styles/index.css";
import { formatMoney } from "~/lib/format-money";
import { gql } from "~/utils";

let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

const PRODUCTS_QUERY = gql`
  query Products {
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

interface Product {
  title: string;
  handle: string;
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

interface RouteData {
  products: {
    edges: Array<{
      node: Product;
    }>;
  };
}

let loader: LoaderFunction = async () => {
  const { data } = await storefront<RouteData>(PRODUCTS_QUERY);

  return json(
    { products: data.products },
    {
      headers: {
        "Cache-Control":
          "max-age=60, s-maxage=3600, stale-while-revalidate=604800",
      },
    }
  );
};

let headers: HeadersFunction = ({ loaderHeaders }) => {
  return {
    "Cache-Control": loaderHeaders.get("Cache-Control") ?? "",
  };
};

function Index() {
  let data = useRouteData<RouteData>();

  return (
    <>
      <header className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="px-4 border-b border-gray-200 sm:px-0">
          <div className="flex items-center justify-between h-16">
            <div className="flex flex-1">
              <a href="/">
                <span className="sr-only">Digital Design Assets</span>
                <svg
                  className="w-8 h-8 text-purple-600"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.3207 5.40445C30.9569 5.4229 30.5906 5.43224 30.2222 5.43224C24.7583 5.43224 19.7742 3.37813 15.9999 0C12.2256 3.378 7.24157 5.43202 1.77778 5.43202C1.40938 5.43202 1.04316 5.42269 0.679341 5.40423C0.23592 7.11732 0 8.91393 0 10.7656C0 20.7061 6.79879 29.0587 16 31.4269C25.2012 29.0587 32 20.7061 32 10.7656C32 8.91401 31.7641 7.11747 31.3207 5.40445ZM16 27.2641C22.9654 25.0149 28 18.4736 28 10.7656C28 10.2819 27.9803 9.80343 27.9417 9.33081C23.542 8.93766 19.4628 7.41836 15.9998 5.06562C12.5369 7.41824 8.45792 8.93745 4.05834 9.33059C4.01972 9.80328 4 10.2819 4 10.7656C4 18.4736 9.03462 25.0149 16 27.2641Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="flex items-center justify-end flex-1">
              <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <SearchIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="px-4 mt-24 sm:mt-32">
        <div className="mx-auto text-center max-w-7xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Beautiful digital design assets
          </h1>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Take your digital products to another level with our collection of
            UI kits, templates and icon sets. All our assets were carefully
            designed to work together beautifully. We have obsessed over every
            little detail, and we really believe it shows.
          </p>
          <div className="flex justify-center max-w-md mx-auto mt-5 md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="flex items-center justify-center w-full px-6 py-4 text-base font-medium text-white bg-gray-900 border border-transparent divide-x divide-gray-600 rounded-md hover:bg-gray-700 md:text-lg"
              >
                <span className="pr-6">Get the bundle</span>
                <span className="pl-6">$199</span>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-2xl px-4 pt-24 mx-auto sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {data.products.edges.map((item) => {
              const product = item.node;
              const image = product.images.edges[0].node;

              return (
                <Link
                  to={`/products/${product.handle}`}
                  key={product.handle}
                  className="group"
                >
                  <div className="w-full overflow-hidden rounded-lg aspect-w-4 aspect-h-3 sm:aspect-w-4 sm:aspect-h-3">
                    <img src={image.transformedSrc} alt={image.altText} />
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
      <footer className="px-4 mx-auto mt-24 max-w-7xl sm:px-6 sm:mt-32 lg:px-8">
        <div className="py-12 border-t md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Dribbble</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-sm text-center text-gray-400">
              © 2020 Workflow, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Index;
export { headers, links, loader, meta };
