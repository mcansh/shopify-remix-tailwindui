import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import { initGraphQLTada } from "gql.tada";

import { introspection } from "~/introspection";

export let gql = initGraphQLTada({ introspection: typeof introspection });

if (!process.env.API_URL) {
  throw new Error("API_URL environment variable is not set");
}

if (!process.env.ACCESS_TOKEN) {
  throw new Error("ACCESS_TOKEN environment variable is not set");
}

export let client = createClient({
  url: process.env.API_URL,
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      "X-Shopify-Storefront-Access-Token": process.env.ACCESS_TOKEN,
    },
  },
});

export let ProductFragment = gql(`
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

export let ProductsQuery = gql(`
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

export let ProductByHandleQuery = gql(`
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

export let CheckoutCreateMutation = gql(`
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
