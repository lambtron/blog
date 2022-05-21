import blog from "https://deno.land/x/blog@0.0.1/blog.tsx";

blog(import.meta.url, {
  title: "Andy Jiang's Blog",
  author: "Andy Jiang",
  header: "Andy Jiang's Blog",
  style: "body { padding: 32px 0; background-color: #f0f0f0; }",

  // If you want to set up Google Analytics, paste your GA key here.
  // gaKey: "UA-XXXXXXXX-X",

  // If you want to provide some redirections, you can specify them here,
  // pathname specified in a key will redirect to pathname in the value.
  // redirectMap: {
  //  "/hello_world.html": "/hello_world",
  // },
});
