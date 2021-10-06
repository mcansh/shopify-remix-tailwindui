module.exports = {
  apps: [
    {
      name: "Netlify",
      script: "netlify dev",
      ignore_watch: ["."],
    },
    {
      name: "Tailwind",
      script: "npm run dev:css",
      ignore_watch: ["."],
    },
    {
      name: "Remix",
      script: "npm run dev:remix",
      ignore_watch: ["."],
    },
  ],
};
