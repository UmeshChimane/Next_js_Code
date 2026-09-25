import AddTaskForm from "@/components/AddTaskForm";
import TaskList from "@/components/TaskList";
import { getTasks } from "@/lib/tasks";

export default async function Home() {
  const tasks = await getTasks();

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-2xl px-6 py-12">

        <h1 className="mb-2 text-4xl font-bold text-gray-900">
  Task Manager
</h1>

<p className="mb-8 text-lg text-gray-600">
  Manage your tasks using Next.js Server Components and Server Actions.
</p>

        <div className="mb-8">
          <AddTaskForm />
        </div>

        <TaskList tasks={tasks} />

      </div>
    </main>
  );
}