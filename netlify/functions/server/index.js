const { createRequestHandler } = require("@remix-run/netlify");
const { installGlobals } = require("@remix-run/node");

installGlobals();

exports.handler = createRequestHandler({ build: require("./build") });
