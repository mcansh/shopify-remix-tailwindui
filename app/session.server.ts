import { createCookieSessionStorage } from "remix";

let secrets = process.env.SESSION_SECRET;

if (!secrets) {
  throw new Error("SESSION_SECRET environment variable is not set");
}

export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: secrets.split(","),
    secure: process.env.NODE_ENV === "production",
  },
});

export let { getSession, commitSession, destroySession } = sessionStorage;
