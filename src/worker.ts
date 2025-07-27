export class MyContainer {
  constructor(private readonly state: DurableObjectState) {}

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const containerUrl = `http://shenzhou-app-to-cloudflare-mycontainer${url.pathname}`;

    return await fetch(containerUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });
  }
}

export default {
  async fetch(request: Request, env: any): Promise<Response> {
    const id = env.MY_CONTAINER.idFromName("main");
    const stub = env.MY_CONTAINER.get(id);
    return stub.fetch(request);
  },
};
