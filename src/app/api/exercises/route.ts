import { createClient } from "@supabase/supabase-js";

export async function GET() {
  try {
    const client = createClient(
      process.env.SUPABASE_URL as string,
      process.env.SUPABASE_ANON_KEY as string
    );
    const { data, error } = await client.from("exercises").select("name");

    if (error) {
      throw error;
    }
    return new Response(JSON.stringify(data));
  } catch (err) {
    console.log(err);
    return new Response("サーバーエラーが発生しました", { status: 500 });
  }
}
