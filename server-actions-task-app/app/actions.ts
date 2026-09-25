"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  addTask as addTaskToDb,
  toggleTask as toggleTaskInDb,
  deleteTask as deleteTaskFromDb,
} from "@/lib/tasks";

export async function addTask(formData: FormData) {
  const title = formData.get("title");

  if (typeof title !== "string" || !title.trim()) {
    return;
  }

  await addTaskToDb(title.trim());

  revalidatePath("/");
  redirect("/");
}

export async function toggleTask(formData: FormData) {
  const id = Number(formData.get("id"));

  if (!Number.isInteger(id)) {
    return;
  }

  await toggleTaskInDb(id);

  revalidatePath("/");
  redirect("/");
}

export async function deleteTask(formData: FormData) {
  const id = Number(formData.get("id"));

  if (!Number.isInteger(id)) {
    return;
  }

  await deleteTaskFromDb(id);

  revalidatePath("/");
  redirect("/");
}