export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

let tasks: Task[] = [
  {
    id: 1,
    title: "Learn Server Components",
    completed: true,
  },
  {
    id: 2,
    title: "Learn Server Actions",
    completed: false,
  },
  {
    id: 3,
    title: "Build Task Manager",
    completed: false,
  },
];

export async function getTasks() {
  return tasks;
}

export async function addTask(title: string) {
  const newTask: Task = {
    id: Date.now(),
    title,
    completed: false,
  };

  tasks.push(newTask);
}

export async function toggleTask(id: number) {
  tasks = tasks.map((task) =>
    task.id === id
      ? {
          ...task,
          completed: !task.completed,
        }
      : task
  );
}

export async function deleteTask(id: number) {
  tasks = tasks.filter((task) => task.id !== id);
}