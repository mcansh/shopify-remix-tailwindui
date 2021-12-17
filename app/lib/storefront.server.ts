import { GraphQLClient } from "graphql-request";
import invariant from "tiny-invariant";

invariant(process.env.API_URL, "API_URL must be set");
invariant(process.env.ACCESS_TOKEN, "ACCESS_TOKEN must be set");

let storefront = new GraphQLClient(process.env.API_URL, {
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Storefront-Access-Token": process.env.ACCESS_TOKEN,
  },
});

export { storefront };
