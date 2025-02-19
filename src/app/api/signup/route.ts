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
      .insert({ email: email, password: password });

    if (error?.details.includes("already exists")) {
      return new Response("Emailが既に使われています", { status: 401 });
    }
    if (error) {
      console.log(error);
      return new Response("サーバーエラー", { status: 500 });
    }
    return new Response("サインアップ成功", { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("サーバーエラー", { status: 500 });
  }
}
