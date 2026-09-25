import type { Task } from "@/lib/tasks";
import TaskItem from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
};

export default function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="rounded-lg border bg-white p-8 text-center text-gray-500">
        No tasks yet.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}