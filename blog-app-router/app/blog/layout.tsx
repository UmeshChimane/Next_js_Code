import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <nav>
          <Link href="/blog">My Blog</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>© 2026 My Blog</p>
      </footer>
    </div>
  );
}