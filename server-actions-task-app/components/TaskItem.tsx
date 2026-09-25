"use client";

import { useOptimistic, useTransition } from "react";
import { deleteTask, toggleTask } from "@/app/actions";
import type { Task } from "@/lib/tasks";

type TaskItemProps = {
  task: Task;
};

export default function TaskItem({ task }: TaskItemProps) {
  const [isPending, startTransition] = useTransition();

  const [optimisticTask, updateOptimisticTask] = useOptimistic(
    task,
    (
      currentTask,
      update: {
        type: "toggle";
      }
    ) => {
      if (update.type === "toggle") {
        return {
          ...currentTask,
          completed: !currentTask.completed,
        };
      }

      return currentTask;
    }
  );

  return (
    <div className="flex items-center justify-between rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">

        <form
          action={toggleTask}
          onSubmit={() => {
            startTransition(() => {
              updateOptimisticTask({
                type: "toggle",
              });
            });
          }}
        >
          <input
            type="hidden"
            name="id"
            value={task.id}
          />

          <button
            type="submit"
            className="flex h-6 w-6 items-center justify-center rounded border"
          >
            {optimisticTask.completed ? (
              <span className="font-bold text-black">
                ✓
              </span>
            ) : (
              ""
            )}
          </button>
        </form>

        <span
          className={
            optimisticTask.completed
              ? "text-gray-400 line-through"
              : "text-gray-800"
          }
        >
          {optimisticTask.title}
        </span>
      </div>

      <form action={deleteTask}>
        <input
          type="hidden"
          name="id"
          value={task.id}
        />

        <button
          type="submit"
          className="text-sm text-red-600 hover:text-red-800"
        >
          Delete
        </button>
      </form>
    </div>
  );
}