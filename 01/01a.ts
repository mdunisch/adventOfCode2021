import { readFileSync } from 'fs';

const file = readFileSync('./01/input01a.txt', 'utf8')
  .split('\n')
  .map((i: string) => parseInt(i));

const solution = file.reduce((acc, currentDepth, index) => {
  if (currentDepth > file[index - 1]) {
    acc++;
  }
  return acc;
}, 0);

console.log(solution);
