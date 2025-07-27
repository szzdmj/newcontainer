import { defineContainer } from '@cloudflare/containers';

export class MyContainer {}

const fetch = defineContainer({
  container: 'ghcr.io/szzdmj/shenzhou-app',
});

export default {
  fetch,
  MyContainer
};
