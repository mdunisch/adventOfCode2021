import { readFileSync } from 'fs';

const file = readFileSync('./01/input01b.txt', 'utf8')
  .split('\n')
  .map((i: string) => parseInt(i));

// 1. build array of measurement windows
const windows: number[] = [];
for (let i = 0; i < file.length; i++) {
  if (i + 3 > file.length) {
    break;
  }
  // calculate sum of window
  const window = file.slice(i, i + 3).reduce((a, b) => a + b);
  windows.push(window);
}

// 2. calculte solution
const solution = windows.reduce((acc, currentDepth, index) => {
  if (currentDepth > windows[index - 1]) {
    acc++;
  }
  return acc;
}, 0);

console.log(solution);
