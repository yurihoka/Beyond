import { validateLoginUser } from "./validateLoginUser";

describe("Login APIコール用のUtil関数", () => {
  describe("ログイン成功", () => {
    test("＿", async () => {
      const res = await validateLoginUser("newuser@xyz.com", "newuser");

      expect(res?.isSucceeded).toBeTruthy();
    });
  });

  describe("ログイン失敗", () => {
    test("登録なし", async () => {
      const res = await validateLoginUser(
        "nonexistentuser@xyz.com",
        "noexistentuser"
      );

      expect(res?.isSucceeded).toBeFalsy();
      expect(res?.msg).toEqual("存在しないユーザーです");
    });
    test("パスワード間違い", async () => {
      const res = await validateLoginUser("test@xyz.com", "wrongpassword");

      expect(res?.isSucceeded).toBeFalsy();
      expect(res?.msg).toEqual("パスワードが間違っています");
    });
  });
});
