/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@remix-run/eslint-config/internal",
  ],
  // Report unused `eslint-disable` comments.
  reportUnusedDisableDirectives: true,
  // Tell ESLint not to ignore dot-files, which are ignored by default.
  ignorePatterns: ["!.*.js"],
  plugins: ["remix-react-routes"],
  rules: {
    "remix-react-routes/use-link-for-routes": "error",
    "remix-react-routes/require-valid-paths": "error",
    "remix-react-routes/no-relative-paths": "error",
    "remix-react-routes/no-urls": "error",
  },
};
