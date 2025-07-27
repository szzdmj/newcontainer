// src/worker.ts

export class MyContainer {} // 必须导出，否则部署失败

export default {
  async fetch(request: Request, env: any) {
    return await env.MY_CONTAINER.fetch(request)
  },
}
