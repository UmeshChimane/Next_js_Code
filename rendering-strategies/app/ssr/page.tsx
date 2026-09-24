export const dynamic = "force-dynamic";

async function getTimestamp() {
  const response = await fetch(
    "http://localhost:3000/api/timestamp",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch timestamp");
  }

  return response.json();
}

export default async function SSRPage() {
  const data = await getTimestamp();

  return (
    <main>
      <h1>SSR - Server-Side Rendering</h1>

      <p>
        <strong>Server Timestamp:</strong>{" "}
        {data.timestamp}
      </p>

      <p>
        This page is dynamically rendered on every request.
      </p>
    </main>
  );
}