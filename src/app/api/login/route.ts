import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const supabase = createClient(
      process.env.SUPABASE_URL as string,
      process.env.SUPABASE_ANON_KEY as string
    );
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("email", email);

    const isUserFound = data !== null && data.length > 0;
    const isPasswordCorrect = isUserFound && data[0].password === password;

    if (!isUserFound) {
      return new Response("存在しないユーザーです", { status: 404 });
    }
    if (!isPasswordCorrect) {
      return new Response("パスワードが間違っています", { status: 401 });
    }
    return new Response("ログイン成功", { status: 200 });
  } catch (err) {
    console.log(err);

    return new Response("サーバーエラー", { status: 500 });
  }
}
