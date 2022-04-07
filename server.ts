import { opine } from "https://deno.land/x/opine/mod.ts";

const app = opine();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(
  3005,
  () => console.log("server has started on http://localhost:3005 🚀"),
);