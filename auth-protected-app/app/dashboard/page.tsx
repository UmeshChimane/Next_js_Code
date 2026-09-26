import { auth } from "@/auth";
import { protectedAction } from "../actions";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <p>
        Welcome {session?.user?.name}
      </p>

      <p>
        Email: {session?.user?.email}
      </p>

      <form action={protectedAction}>
        <button
          type="submit"
          className="rounded bg-green-600 px-6 py-3 text-white"
        >
          Run Protected Action
        </button>
      </form>
    </main>
  );
}