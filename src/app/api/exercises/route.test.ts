import { GET } from "./route";

describe("API: exercises", () => {
  test("トレーニング種目を全て取得", async () => {
    const response = await GET();

    expect(response.status).toBe(200);
    expect(response.body).toEqual(["Bench Press", "Squat", "Deadlift"]);
  });
});
