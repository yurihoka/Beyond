import { createClient } from "@supabase/supabase-js";
import { NextApiRequest } from "next";

export async function POST(req: NextApiRequest) {
  const { email, password } = req.body;

  const supabase = createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_ANON_KEY as string
  );

  const { data, error } = await supabase
    .from("users")
    .insert({ email: email, password: password });

  if (error?.details.includes("already exists")) {
    return new Response("Emailが既に使われています", { status: 401 });
  } else if (error) {
    console.log(error);
    return new Response("サーバーエラー", { status: 500 });
  }
  return new Response("サインアップ成功", { status: 200 });
}
