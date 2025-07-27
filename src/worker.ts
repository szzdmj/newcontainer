export class MyContainer {
  constructor(state: DurableObjectState, env: any) {}
  async fetch(request: Request): Promise<Response> {
    return new Response("This is the container object", { status: 200 });
  }
}

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    const container = env.MY_CONTAINER;

    // Forward the request to the container
    return container.fetch(request);
  }
};
