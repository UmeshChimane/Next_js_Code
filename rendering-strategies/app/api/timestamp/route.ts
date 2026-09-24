export async function GET() {
  return Response.json({
    timestamp: new Date().toISOString(),
  });
}