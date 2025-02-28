import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");

  try {
    const client = createClient(
      process.env.SUPABASE_URL as string,
      process.env.SUPABASE_ANON_KEY as string
    );
    const { data, error } = await client
      .from("histories")
      .select("data")
      .eq("email", email);

    if (error) throw error;
    if (data?.length === 0) {
      return new Response("存在しないトレーニング種目です", { status: 404 });
    }

    return new Response(JSON.stringify(data));
  } catch (err) {
    console.log(err);
    return new Response("サーバーエラーが発生しました", { status: 500 });
  }
}
