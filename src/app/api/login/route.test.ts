import { createMocks } from "node-mocks-http";

import { POST } from "./route";
import { NextApiRequest } from "next";

describe("API: Login", () => {
  describe("ログイン成功", () => {
    test("", async () => {
      const user = { email: "test@xyz.com", password: "test" };
      const { req }: { req: NextApiRequest } = createMocks({
        method: "POST",
        body: user,
        headers: { "Content-Type": "application/json" },
      });
      const response = await POST(req);

      expect(response.status).toBe(200);
    });
  });

  describe("ログイン失敗", () => {
    test("無効なパスワード", async () => {
      const userWithWrngPasswrd = { email: "test@xyz.com", password: "testt" };
      const { req }: { req: NextApiRequest } = createMocks({
        method: "POST",
        body: userWithWrngPasswrd,
        headers: { "Content-Type": "application/json" },
      });
      const response = await POST(req);

      expect(response.status).toBe(401);
    });

    test("存在しないユーザー", async () => {
      const nonexisistentUser = { email: "noexist@xyz.com", password: "test" };
      const { req }: { req: NextApiRequest } = createMocks({
        method: "POST",
        body: nonexisistentUser,
        headers: { "Content-Type": "application/json" },
      });
      const response = await POST(req);

      expect(response.status).toBe(404);
    });
  });
});
