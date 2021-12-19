import { readFileSync } from 'fs';

const file: string[] = readFileSync('./03/input03a.txt', 'utf8').split('\n');

// 1. generate matrix
const matrix = new Array(file[0].length).fill(0).map((x, index) => file.map(line => line[index]).join(''));

// 2. generate frist binary number
const num1 = matrix.reduce((acc, curr) => {
  const sum0 = curr.split('').filter(x => x === '0').length;
  const sum1 = curr.length - sum0;

  if (sum0 > sum1) {
    return acc + '0';
  }

  return acc + '1';
}, '');

// 3. generate opposite binary number
const num2 = num1
  .split('')
  .map(x => (x === '0' ? '1' : '0'))
  .join('');

// 4. calculate solution
const solution = parseInt(num1, 2) * parseInt(num2, 2);

console.log(solution);
