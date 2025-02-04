import { GET } from "./route";
import { createMocks } from "node-mocks-http";
import { type NextApiRequest } from "next";

describe("API: histories", () => {
  test("全ユーザのデータ取得", async () => {
    const { req }: { req: NextApiRequest } = createMocks({
      method: "GET",
      query: { email: "test@xyz.com" },
    });
    const response = await GET(req);

    expect(response.status).toBe(200);
  });

  describe("エラー処理", () => {
    test("存在しないユーザ", async () => {
      const { req }: { req: NextApiRequest } = createMocks({
        method: "GET",
        query: { email: "nonexistentuser@xyz.com" },
      });
      const response = await GET(req);

      expect(response.status).toBe(404);
    });
  });
});
