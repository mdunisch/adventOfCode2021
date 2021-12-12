import { readFileSync } from 'fs';

const file: string[] = readFileSync('./02/input02a.txt', 'utf8').split('\n');

const solution = file.reduce(
  (acc, currenctCommand) => {
    const [command, valueAsString] = currenctCommand.split(' ');
    const value = parseInt(valueAsString);

    const [horizontal, depth, aim] = acc;

    if (command === 'up') {
      return [horizontal, depth, aim - value];
    }

    if (command === 'down') {
      return [horizontal, depth, aim + value];
    }
    return [horizontal + value, depth + value * aim, aim];
  },
  [0, 0, 0]
);

console.log(solution[0] * solution[1]);
