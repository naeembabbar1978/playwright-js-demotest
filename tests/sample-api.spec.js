import { test, expect } from '@playwright/test';

test('Public API: GET post returns 200 and valid fields', async ({ request }) => {
  const res = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body).toHaveProperty('id', 1);
  expect(body).toHaveProperty('title');
});
