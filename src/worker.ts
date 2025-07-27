import { defineContainer } from '@cloudflare/containers';

export default {
  async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const id = env.MY_CONTAINER.idFromName('single-instance');
    const stub = env.MY_CONTAINER.get(id);
    return stub.fetch(req);
  },
};

export interface Env {
  MY_CONTAINER: ReturnType<typeof defineContainer>;
}
