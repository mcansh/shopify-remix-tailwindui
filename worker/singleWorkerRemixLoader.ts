import { createRequestHandler as _createRequestHandler } from "@remix-run/cloudflare-workers";
import serverRuntime, {
  ServerBuild,
  AppLoadContext,
} from "@remix-run/server-runtime";

interface CreateRequestHandlerParams {
  build: ServerBuild;
  getLoadContext?: ({
    request,
  }: {
    request: Request;
    env: SingleWorker.Env;
    context: SingleWorker.Context;
  }) => AppLoadContext;
  mode?: string;
}

const createRequestHandler = ({
  build,
  getLoadContext,
  mode,
}: CreateRequestHandlerParams) => {
  let platform = {};
  let handleRequest = serverRuntime.createRequestHandler(build, platform, mode);

  return ({
    request,
    env,
    context,
  }: {
    request: Request;
    env: SingleWorker.Env;
    context: SingleWorker.Context;
  }) => {
    let loadContext =
      typeof getLoadContext === "function"
        ? getLoadContext({ request, env, context })
        : undefined;
    return handleRequest(request, loadContext);
  };
};

const handleAsset = async ({
  request,
  env,
}: {
  request: Request;
  env: SingleWorker.Env;
}) => {
  const response = await env.ASSETS.fetch(request);
  if (response.ok) return response;
};

export const createFetchHandler = ({
  build,
  getLoadContext,
  mode,
}: CreateRequestHandlerParams) => {
  const handleRequest = createRequestHandler({
    build,
    getLoadContext,
    mode,
  });

  const handleFetch = async (
    request: Request,
    env: SingleWorker.Env,
    context: SingleWorker.Context
  ) => {
    let response = await handleAsset({ request, env });

    if (!response) {
      response = await handleRequest({ request, env, context });
    }

    return response;
  };

  return async (
    request: Request,
    env: SingleWorker.Env,
    context: SingleWorker.Context
  ) => {
    try {
      return await handleFetch(request, env, context);
    } catch (e) {
      if (process.env.NODE_ENV === "development" && e instanceof Error) {
        return new Response(e.message || e.toString(), {
          status: 500,
        });
      }

      return new Response("Internal Error", {
        status: 500,
      });
    }
  };
};
