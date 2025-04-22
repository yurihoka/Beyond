import { GET, POST, PATCH } from "./route";
import { createMocks } from "node-mocks-http";
import { type NextRequest } from "next/server";

describe("API: histories", () => {
  describe("GET", () => {
    test("全ユーザのデータ取得", async () => {
      const { req }: { req: NextRequest } = createMocks({
        method: "GET",
        query: { email: "test@xyz.com" },
      });
      const response = await GET(req);

      expect(response.status).toBe(200);
    });

    describe("エラー処理", () => {
      test("存在しないユーザ", async () => {
        const { req }: { req: NextRequest } = createMocks({
          method: "GET",
          query: { email: "nonexistentuser@xyz.com" },
        });
        const response = await GET(req);

        expect(response.status).toBe(404);
      });
    });
  });

  describe("POST", () => {
    test("トレーニング記録追加", async () => {
      const { req }: { req: Request } = createMocks({
        method: "POST",
        body: {
          email: "test@xyz.com",
          workoutData: [{ date: "2024-01-01", data: [] }],
        },
      });
      const response = await POST(req);

      expect(response.status).toBe(200);
    });
  });

  describe("PATCH", () => {
    test("トレーニング記録更新", async () => {
      const { req }: { req: Request } = createMocks({
        method: "PATCH",
        body: {
          email: "test@xyz.com",
          workoutData: [
            {
              date: "2024-02-02",
              data: [
                [
                  {
                    date: "2025-02-02",
                    data: [
                      {
                        name: "Bench Press",
                        sets: [
                          {
                            rep: 10,
                            weight: 100,
                          },
                        ],
                      },
                      {
                        name: "Squat",
                        sets: [
                          {
                            rep: 10,
                            weight: 100,
                          },
                        ],
                      },
                    ],
                  },
                ],
              ],
            },
          ],
        },
      });
      const response = await PATCH(req);

      expect(response.status).toBe(200);
    });
  });
});
