export const prerender = false;
import { createClient } from '@supabase/supabase-js';
import type { APIRoute } from 'astro';

console.log("SUPABASE_URL:", import.meta.env.PUBLIC_SUPABASE_URL);
console.log("SUPABASE_ANON_KEY:", import.meta.env.PUBLIC_SUPABASE_ANON_KEY);


const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL as string,  
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string
);

export const POST: APIRoute = async ({ request }) => {

  const formData = await request.formData();
  const email = formData.get("email");

  if (!email) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from('suscribers')
    .insert([
      { "email": "user2@example.com" },
    ])
    .select()
          
  console.log(data)

  if (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Error saving email", error: error.message }),
      { status: 500 }
    );
  }

  return new Response(
    JSON.stringify({ message: "Success!" }),
    { status: 200 }
  );
};
