import { validateSignupUser } from "./validateSignupUser";

describe("Signup APIコール用のUtil関数", () => {
  describe("サインアップ成功", () => {
    test("＿", async () => {
      const res = await validateSignupUser("newuser@xyz.com", "newuser");

      expect(res?.isSignedUp).toBeTruthy();
    });
  });

  describe("サインアップ失敗", () => {
    test("Emailが既に登録済み", async () => {
      const res = await validateSignupUser("test@xyz.com", "test");

      expect(res?.isSignedUp).toBeFalsy();
      expect(res?.msg).toEqual("Emailが既に使われています");
    });
  });
});
