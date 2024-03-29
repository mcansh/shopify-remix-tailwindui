import { AppLoadContext } from "@remix-run/cloudflare";
import {
  cacheExchange,
  createClient as createUrqlClient,
  fetchExchange,
} from "@urql/core";
import { initGraphQLTada } from "gql.tada";
import type { introspection } from "./graphql-env.d.ts";

export const graphql = initGraphQLTada<{
  introspection: introspection;
  scalars: {
    DateTime: string;
    JSON: any;
    URL: string;
  };
}>();

export function createClient(context: AppLoadContext) {
  if (!context.cloudflare.env.API_URL) {
    throw new Error("API_URL environment variable is not set");
  }

  if (!context.cloudflare.env.ACCESS_TOKEN) {
    throw new Error("ACCESS_TOKEN environment variable is not set");
  }

  let headers = {
    "X-Shopify-Storefront-Access-Token": context.cloudflare.env.ACCESS_TOKEN,
  };

  return createUrqlClient({
    url: context.cloudflare.env.API_URL,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: { headers },
  });
}

export const ProductsQuery = graphql(`
  query Products($query: String) {
    products(first: 20, query: $query) {
      edges {
        node {
          title
          handle
          tags
          priceRange {
            minVariantPrice {
              amount
            }
            maxVariantPrice {
              amount
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
`);

export const ProductByHandleQuery = graphql(`
  query ProductByHandle($handle: String!) {
    product(handle: $handle) {
      title
      handle
      tags
      priceRange {
        minVariantPrice {
          amount
        }
      }
      images(first: 250) {
        edges {
          node {
            url
            altText
          }
        }
      }
      description
      descriptionHtml
      updatedAt
      options {
        id
        name
        values
      }
      variants(first: 250) {
        edges {
          node {
            id
            title
            availableForSale
            image {
              url
              altText
            }
            price {
              amount
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
`);

export const CreateCheckoutMutation = graphql(`
  mutation CreateCheckout($variantId: ID!) {
    checkoutCreate(
      input: { lineItems: { variantId: $variantId, quantity: 1 } }
    ) {
      checkout {
        webUrl
      }
    }
  }
`);
