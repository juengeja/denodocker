import { serve } from "https://deno.land/std/http/server.ts";

serve(req => new Response("Hello world from Deno!"), { addr: ":8088" });

console.log(`HTTP server is running at: http://localhost:8088/`);