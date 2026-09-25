import { addTask } from "@/app/actions";

export default function AddTaskForm() {
  return (
    <form action={addTask} className="flex gap-2">
      <input
        type="text"
        name="title"
        placeholder="Enter a task..."
  className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:border-black focus:outline-none"
      />

      <button
        type="submit"
        className="rounded-lg bg-black px-5 py-2 text-white"
      >
        Add Task
      </button>
    </form>
  );
}