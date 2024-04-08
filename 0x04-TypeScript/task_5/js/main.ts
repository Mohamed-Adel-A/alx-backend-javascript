// task_5/js/main.ts
export function getBudget(obj: { income: number; expenses: number }): number {
  return obj.income - obj.expenses;
}

console.log(getBudget({
  income: 1000,
  expenses: 900
}));

console.log(getBudget({
  income: 1000,
  expenses: 1200
}));

console.log(getBudget({
  income: 1000,
  expenses: 700
}));
