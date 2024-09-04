// import RSS from "rss";
// import { getBlogPostList } from "@/helpers/file-helpers";

// export async function GET() {
//   const site_url = "localhost:3000";

//   const feedOptions = {
//     title: "Halit Aydin's Blog",
//     description: "Focus on React, CSS, animation, and careers.",
//     site_url,
//     copyright: `All rights reserved ${new Date().getFullYear()}`,
//   };

//   const feed = new RSS(feedOptions);

//   const posts = await getBlogPostList();

//   // Add each individual post to the feed.
//   posts.map((post) => {
//     feed.item({
//       title: post.title,
//       description: post.abstract,
//       url: `${site_url}/${post.slug}`,
//       date: post.publishedOn,
//       author: "Halit Aydin",
//     });
//   });

//   return new Response(feed.xml({ indent: true }), {
//     headers: {
//       "Content-Type": "application/atom+xml; charset=utf-8",
//     },
//   });
// }
