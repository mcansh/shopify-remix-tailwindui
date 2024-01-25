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
  };
}>();

export function createClient(context: AppLoadContext) {
  if (!context.env.API_URL) {
    throw new Error("API_URL environment variable is not set");
  }

  if (!context.env.ACCESS_TOKEN) {
    throw new Error("ACCESS_TOKEN environment variable is not set");
  }

  return createUrqlClient({
    url: context.env.API_URL,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: {
      headers: {
        "X-Shopify-Storefront-Access-Token": context.env.ACCESS_TOKEN,
      },
    },
  });
}

export const ProductFragment = graphql(`
  fragment ProductFragment on Product {
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
          url
          altText
        }
      }
    }
  }
`);

export const Products = graphql(`
  query Products {
    products(first: 20) {
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

export const ProductByHandle = graphql(`
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

export const CreateCheckout = graphql(`
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
