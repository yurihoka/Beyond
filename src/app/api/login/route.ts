import { NextApiRequest } from "next";

export default async function POST(req: NextApiRequest) {
  const { email, password } = req.body;

  // 以下は全てDB構築するまでの一時的な認証処理
  if (email !== "test@xyz.com") {
    return new Response("存在しないユーザーです", { status: 404 });
  }
  if (password !== "test") {
    return new Response("パスワードが間違っています", { status: 401 });
  }
  return new Response("ログイン成功", { status: 200 });
}
