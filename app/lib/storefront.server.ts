import { GraphQLClient } from "graphql-request";

if (!process.env.API_URL) {
  throw new Error("API_URL environment variable is not set");
}

if (!process.env.ACCESS_TOKEN) {
  throw new Error("ACCESS_TOKEN environment variable is not set");
}

let storefront = new GraphQLClient(process.env.API_URL, {
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Storefront-Access-Token": process.env.ACCESS_TOKEN,
  },
});

export { storefront };
