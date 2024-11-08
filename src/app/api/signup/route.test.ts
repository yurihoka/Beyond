import { NextApiRequest } from "next";
import { createMocks } from "node-mocks-http";

import POST from "./route";

describe("API: Signup", () => {
  describe("サインアップ成功", () => {
    test("", async () => {
      const newUser = { email: "newuser@xyz.com", password: "newuser" };
      const { req }: { req: NextApiRequest } = createMocks({
        method: "POST",
        body: newUser,
        headers: { "Content-Type": "application/json" },
      });
      const response = await POST(req);

      expect(response.status).toBe(200);
    });
  });

  describe("サインアップ失敗", () => {
    test("既登録ユーザーあり", async () => {
      const existentUser = {
        email: "existentuser@xyz.com",
        password: "existentuser",
      };
      const { req }: { req: NextApiRequest } = createMocks({
        method: "POST",
        body: existentUser,
        headers: { "Content-Type": "application/json" },
      });
      const response = await POST(req);

      expect(response.status).toBe(401);
    });
  });
});
