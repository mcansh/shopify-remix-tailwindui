import "@remix-run/cloudflare";

declare module "@remix-run/cloudflare" {
  export interface AppLoadContext {
    env: {
      API_URL: string | undefined;
      ACCESS_TOKEN: string | undefined;
      SESSION_SECRET: string | undefined;
    };
  }
}
