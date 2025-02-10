import { validateLoginUser } from "./validateLoginUser";

describe("Login APIコール用のUtil関数", () => {
  describe("ログイン成功", () => {
    // test("＿", async () => {
    //   const res = await validateLoginUser("newuser@xyz.com", "newuser");
    //   expect(res?.isValidLoginUser).toBeTruthy();
    // });
  });

  describe("ログイン失敗", () => {
    test("Emailが存在しない", async () => {
      //   const res = await validateLoginUser("test@xyz.com", "test");
      //   expect(res?.isValidLoginUser).toBeFalsy();
      //   expect(res?.msg).toEqual("Emailが既に使われています");
    });
  });
});
