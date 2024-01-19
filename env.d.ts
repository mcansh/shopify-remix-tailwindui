import "@remix-run/cloudflare";

declare module "@remix-run/cloudflare" {
  export interface AppLoadContext {
    env: {
      API_URL: string;
      ACCESS_TOKEN: string;
      SESSION_SECRET: string;
    };
  }
}
