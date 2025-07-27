export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    const container = env.MY_CONTAINER;

    // Proxy the incoming request to the container
    return await container.fetch(request);
  }
};
