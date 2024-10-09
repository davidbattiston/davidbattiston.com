import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import Contact from "./components/contact.tsx";

const app = new Hono();

app.use("/src/*", serveStatic({ root: "./" }));

app.get("/", serveStatic({ root: "./src" }));

app.get("/contact", (c) => {
  return c.html(Contact);
});

Deno.serve(app.fetch);
