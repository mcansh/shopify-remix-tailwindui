import { AppLoadContext } from "@remix-run/cloudflare";
import {
  cacheExchange,
  createClient as createUrqlClient,
  fetchExchange,
} from "@urql/core";
import { graphql as gql } from "gql.tada";

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

export const ProductFragment = gql(`
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
          transformedSrc
          altText
        }
      }
    }
  }
`);

export const Products = gql(`
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
`);

export const ProductByHandle = gql(`
  query ProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
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
      description
      updatedAt
      variants(first: 1) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`);

export const CreateCheckout = gql(`
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
