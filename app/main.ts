import { Application } from "./deps.ts";
import router from "./routes.ts";

const env = Deno.env.toObject();
const PORT = env.OAK_PORT || 3000;
const HOST = env.HOST || "localhost";

const app = new Application();
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = 500;
    ctx.response.body = { msg: err.message };
  }
});
app.use(router.routes());
app.use(router.allowedMethods());
app.use((ctx) => {
  ctx.response.status = 404;
  ctx.response.body = { msg: "Not Found !!" };
});

console.log(`Server running on port ${PORT}`);

app.listen(`${HOST}:${PORT}`);
