async function getTimestamp() {
  const response = await fetch(
    "http://localhost:3000/api/timestamp",
    {
      next: {
        revalidate: 30,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch timestamp");
  }

  return response.json();
}

export default async function ISRPage() {
  const data = await getTimestamp();

  return (
    <main>
      <h1>ISR - Incremental Static Regeneration</h1>

      <p>
        <strong>Server Timestamp:</strong>{" "}
        {data.timestamp}
      </p>

      <p>
        This page is revalidated every 30 seconds.
      </p>
    </main>
  );
}