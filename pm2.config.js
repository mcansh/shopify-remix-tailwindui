const dotenv = require("dotenv");

let { error, parsed } = dotenv.config();

if (error) {
  throw error;
}

module.exports = {
  apps: [
    {
      name: "Tailwind",
      script: "npm run dev:css",
      ignore_watch: ["."],
    },
    {
      name: "Remix",
      script: "npm run dev:remix",
      ignore_watch: ["."],
      env: {
        ...parsed,
      },
    },
  ],
};
