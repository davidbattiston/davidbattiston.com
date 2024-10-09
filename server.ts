import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";

const app = new Hono();

app.use("/src/*", serveStatic({ root: "./" }));

app.get("/", serveStatic({ root: "./src" }));

Deno.serve(app.fetch);
