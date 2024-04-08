// task_4/js/main.ts
export default function createTask(deadline: string | null, description: string, completed: boolean = false): {
  deadline: string | null;
  description: string;
  completed: boolean;
} {
  return {
    deadline,
    description,
    completed
  };
}

console.log(createTask('2022-03-16', 'Finish TypeScript Homework'));
console.log(createTask(null, 'Start daily coding challenge'));
