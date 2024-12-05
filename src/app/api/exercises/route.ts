import { createClient } from "@supabase/supabase-js";
import { type NextApiRequest } from "next";

export async function GET() {
  try {
    const client = createClient(
      process.env.SUPABASE_URL as string,
      process.env.SUPABASE_ANON_KEY as string
    );
    const { data, error } = await client.from("exercises").select("name");

    if (error) throw error;

    return new Response(JSON.stringify(data));
  } catch (err) {
    console.log(err);
    return new Response("サーバーエラーが発生しました", { status: 500 });
  }
}
export async function POST(req: NextApiRequest) {
  const newExercise = req.body;

  try {
    const client = createClient(
      process.env.SUPABASE_URL as string,
      process.env.SUPABASE_ANON_KEY as string
    );
    const { error } = await client.from("exercises").insert(newExercise);

    if (error) {
      if (error.code === "23505")
        return new Response("既に存在するトレーニング種目です", {
          status: 409,
        });
      return new Response("サーバーエラーが発生しました", { status: 500 });
    }

    return new Response("トレーニング種目が追加されました", { status: 201 });
  } catch (err) {
    return new Response("サーバーエラーが発生しました", { status: 500 });
  }
}

export async function PATCH(req: NextApiRequest) {
  try {
    const client = createClient(
      process.env.SUPABASE_URL as string,
      process.env.SUPABASE_ANON_KEY as string
    );
    const { data, error } = await client
      .from("exercises")
      .update({ name: req.body.name })
      .eq("id", req.body.id)
      .select();

    if (error?.code === "23505")
      return new Response("既に存在するトレーニング種目です", {
        status: 409,
      });
    if (data?.length === 0) {
      return new Response("存在しないトレーニング種目です", { status: 404 });
    }
    if (error) {
      return new Response("サーバーエラーが発生しました", { status: 500 });
    }

    return new Response("トレーニング種目が更新されました", { status: 200 });
  } catch (err) {
    return new Response("サーバーエラーが発生しました", { status: 500 });
  }
}
