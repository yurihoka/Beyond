import { createMocks } from "node-mocks-http";
import { GET, POST, PATCH } from "./route";
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

  describe("PATCH", () => {
    test("トレーニング種目を更新", async () => {
      const updatedExercise = {
        id: 1,
        name: "Bench Press (updated)",
      };
      const { req }: { req: NextApiRequest } = createMocks({
        method: "PATCH",
        body: updatedExercise,
        headers: { "Content-Type": "application/json" },
      });
      const response = await PATCH(req);

      expect(response.status).toBe(200);
    });
    test("更新トレーニング種目が既に存在する", async () => {
      const existentExercise = {
        id: 1,
        name: "Squat",
      };
      const { req }: { req: NextApiRequest } = createMocks({
        method: "PATCH",
        body: existentExercise,
        headers: { "Content-Type": "application/json" },
      });
      const response = await PATCH(req);

      expect(response.status).toBe(409);
    });
    test("更新トレーニング種目が存在しない", async () => {
      const nonExistentExercise = {
        id: 1000,
        name: "Bench Press",
      };
      const { req }: { req: NextApiRequest } = createMocks({
        method: "PATCH",
        body: nonExistentExercise,
        headers: { "Content-Type": "application/json" },
      });
      const response = await PATCH(req);

      expect(response.status).toBe(404);
    });
  });
});
