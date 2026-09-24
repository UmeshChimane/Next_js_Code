const buildTimestamp = new Date().toISOString();

export default function SSGPage() {
  return (
    <main>
      <h1>SSG - Static Site Generation</h1>

      <p>
        <strong>Server Timestamp:</strong>{" "}
        {buildTimestamp}
      </p>

      <p>
        This page was statically generated at build time.
      </p>
    </main>
  );
}