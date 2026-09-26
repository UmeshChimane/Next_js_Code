import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">
        My Product
      </h1>

      <p className="text-gray-600">
        Welcome to our marketing page.
      </p>

      <Link
        href="/dashboard"
        className="rounded bg-blue-600 px-6 py-3 text-white"
      >
        Go to Dashboard
      </Link>
    </main>
  );
}