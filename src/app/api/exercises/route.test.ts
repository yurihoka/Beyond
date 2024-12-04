import { createMocks } from "node-mocks-http";
import { GET, POST } from "./route";
import { type NextApiRequest } from "next";

describe("API: exercises", () => {
  describe("GET", () => {
    test("トレーニング種目を全て取得", async () => {
      const response = await GET();
      const body = await response.json();

      expect(response.status).toBe(200);
      expect(body.length).toBeGreaterThan(0);
    });
  });

  describe("POST", () => {
    const newExercise = {
      name: "Overhead Press",
    };
    const { req }: { req: NextApiRequest } = createMocks({
      method: "POST",
      body: newExercise,
      headers: { "Content-Type": "application/json" },
    });

    test("トレーニング種目を追加", async () => {
      const response = await POST(req);

      expect(response.status).toBe(201);
    });
    test("追加トレーニング種目が既に存在する", async () => {
      const response = await POST(req);

      expect(response.status).toBe(409);
    });
  });
});
