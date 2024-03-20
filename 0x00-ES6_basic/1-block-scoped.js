export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true; // eslint-disable-line no-unused-vars
    let task2 = false; 
  }

  return [task, task2];
}
