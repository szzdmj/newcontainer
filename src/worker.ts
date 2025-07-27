export interface Env {
  MY_CONTAINER: DurableObjectNamespace;
}

export class MyContainer {
  constructor(private state: DurableObjectState, private env: Env) {}

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    // 示例：将请求转发到容器中的 Web 服务（FrankenPHP + Caddy）
    const containerUrl = `http://localhost${url.pathname}${url.search}`;
    const init: RequestInit = {
      method: request.method,
      headers: request.headers,
      body: request.body,
    };

    return await fetch(containerUrl, init);
  }
}

export default {
  fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    return env.MY_CONTAINER.fetch(request);
  },
};
