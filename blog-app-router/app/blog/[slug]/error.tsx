"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>

      <p>We could not load this blog post.</p>

      <button onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}