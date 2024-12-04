import { GET } from "./route";

describe("API: exercises", () => {
  test("トレーニング種目を全て取得", async () => {
    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.length).toBeGreaterThan(0);
  });
});
