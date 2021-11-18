import { Router } from "./deps.ts";

const router = new Router();

router.get("/api/v1/hello-world", ({ response }) => {
  response.body = {
    success: true,
    message: "Hello world",
  };
});

router.get('/health', ({response}) => {
  response.body = 'OK';
});

export default router;
