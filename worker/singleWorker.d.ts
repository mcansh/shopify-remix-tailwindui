declare namespace SingleWorker {
  type Env = Record<string, unknown> & { ASSETS: { fetch: typeof fetch } };

  type Context = { waitUntil: (promise: Promise<void>) => void };
}
