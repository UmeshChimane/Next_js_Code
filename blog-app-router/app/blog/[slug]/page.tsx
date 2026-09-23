import type { Metadata } from "next";
import { notFound } from "next/navigation";
import posts from "@/data/posts.json";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post was not found.",
    };
  }

  return {
    title: post.title,
    description: post.description,

    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <h1>{post.title}</h1>

      <p>{post.description}</p>

      <p>
        By {post.author} · {post.date}
      </p>

      <hr />

      <p>{post.content}</p>
    </article>
  );
}