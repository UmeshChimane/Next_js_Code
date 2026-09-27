import Image from "next/image";

const posts = [
  {
    title: "Getting Started with Next.js",
    description:
      "Next.js makes it easier to build fast and modern web applications. In this article, we will look at some of its important features.",
    image: "/blog1.jpg",
    alt: "Developer working on code",
  },
  {
    title: "Improving Web Performance",
    description:
      "Website performance is important for providing a good experience to users. Image optimization, fonts and scripts can have a big impact on performance.",
    image: "/blog2.jpg",
    alt: "Web development workspace",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-black px-6 py-10 text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold">My Tech Blog</h1>

          <p className="mt-3 text-gray-300">
            Simple articles about web development and technology
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="mb-8 text-3xl font-bold">Latest Articles</h2>

        <div className="space-y-10">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-xl bg-white p-6 shadow"
            >
              <Image
                src={post.image}
                alt={post.alt}
                width={1200}
                height={675}
                className="h-auto w-full rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 1024px"
              />

              <h3 className="mt-6 text-2xl font-bold">
                {post.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {post.description}
              </p>

              <button className="mt-5 rounded bg-black px-5 py-2 text-white">
                Read More
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}