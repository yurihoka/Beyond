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
      return new Response("データが存在しません", { status: 200 });
    }

    return new Response(JSON.stringify(data));
  } catch (err) {
    console.log(err);
    return new Response("サーバーエラーが発生しました", { status: 500 });
  }
}

export async function POST(req: Request) {
  const { email, workoutData } = await req.json();

  console.log(email, workoutData);
  try {
    const client = createClient(
      process.env.SUPABASE_URL as string,
      process.env.SUPABASE_ANON_KEY as string
    );
    const { data, error } = await client
      .from("histories")
      .insert([{ data: workoutData, date: workoutData[0].date, email: email }]);

    if (error) throw error;

    return new Response(JSON.stringify(data));
  } catch (err) {
    console.log(err);
    return new Response("サーバーエラーが発生しました", { status: 500 });
  }
}

export async function PATCH(req: Request) {
  const { email, workoutData } = await req.json();

  try {
    const client = createClient(
      process.env.SUPABASE_URL as string,
      process.env.SUPABASE_ANON_KEY as string
    );
    const { data, error } = await client
      .from("histories")
      .update({ data: workoutData })
      .eq("email", email)
      .eq("date", workoutData[0].date);

    if (error) throw error;

    return new Response(JSON.stringify(data));
  } catch (err) {
    console.log(err);
    return new Response("サーバーエラーが発生しました", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const { email, date } = await req.json();

  try {
    const client = createClient(
      process.env.SUPABASE_URL as string,
      process.env.SUPABASE_ANON_KEY as string
    );
    const { data, error } = await client
      .from("histories")
      .delete()
      .eq("email", email)
      .eq("date", date);

    if (error) throw error;

    return new Response(JSON.stringify(data));
  } catch (err) {
    console.log(err);
    return new Response("サーバーエラーが発生しました", { status: 500 });
  }
}
