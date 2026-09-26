import { signIn } from "@/auth";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="rounded-lg border p-8 text-center">
        <h1 className="mb-4 text-2xl font-bold">
          Login
        </h1>

        <form
          action={async () => {
            "use server";

            await signIn("github", {
              redirectTo: "/dashboard",
            });
          }}
        >
          <button
            type="submit"
            className="rounded bg-black px-6 py-3 text-white"
          >
            Continue with GitHub
          </button>
        </form>
      </div>
    </main>
  );
}