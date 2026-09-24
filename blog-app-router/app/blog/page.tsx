import Link from "next/link";
import posts from "@/data/posts.json";

export default function BlogPage() {
  return (
    <main>
      <h1>Blog</h1>

      <p>Latest articles from our blog.</p>

      <div>
        {posts.map((post) => (
          <article key={post.slug}>
            <h2>
               <Link href={`/blog/${post.slug}`}>  {/*//it will create the url as /blog/slugName ex:/blog/nextjs-basics */}
                {post.title}
              </Link>
            </h2>

            <p>{post.description}</p>

            <small>
              {post.author} · {post.date}
            </small>
          </article>
        ))}
      </div>
    </main>
  );
}