import { NextApiRequest } from "next";

export default async function POST(req: NextApiRequest) {
  const { email } = req.body;

  // 以下は全てDB構築するまでの一時的な認証処理
  if (email === "existentuser@xyz.com") {
    return new Response("Emailが既に使われています", { status: 401 });
  }
  return new Response("サインアップ成功", { status: 200 });
}
