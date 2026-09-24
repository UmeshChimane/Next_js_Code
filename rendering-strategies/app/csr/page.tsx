"use client";

import { useQuery } from "@tanstack/react-query";

async function getTimestamp() {
  const response = await fetch("/api/timestamp");

  if (!response.ok) {
    throw new Error("Failed to fetch timestamp");
  }

  return response.json();
}

export default function CSRPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["timestamp"],
    queryFn: getTimestamp,
  });

  if (isLoading) {
    return (
      <main>
        <h1>CSR - Client-Side Rendering</h1>
        <p>Loading timestamp...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <h1>CSR - Client-Side Rendering</h1>
        <p>Failed to load timestamp.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>CSR - Client-Side Rendering</h1>

      <p>
        <strong>Server Timestamp:</strong>{" "}
        {data.timestamp}
      </p>

      <p>
        This data was fetched on the client using
        TanStack Query.
      </p>
    </main>
  );
}