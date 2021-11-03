import { createContextHandler } from "../worker/plinko-remix-loader";

// @ts-ignore
import * as build from "../build";

export const onRequest: Plinko.onRequest = createContextHandler({ build });
