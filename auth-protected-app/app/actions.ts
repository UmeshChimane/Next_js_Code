"use server";

import { auth } from "@/auth";

export async function protectedAction() {
  const session = await auth();

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  console.log(
    "Protected action called by:",
    session.user.email
  );
}