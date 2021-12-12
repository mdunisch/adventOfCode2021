import { readFileSync } from 'fs';

const file: string[] = readFileSync('./02/input02a.txt', 'utf8').split('\n');

const solution = file.reduce(
  (acc, currenctCommand) => {
    const [command, value] = currenctCommand.split(' ');
    const [horizontal, vertical] = acc;

    if (command === 'up' || command === 'down') {
      const newVertical = command === 'up' ? vertical - parseInt(value) : vertical + parseInt(value);
      return [horizontal, newVertical];
    }
    return [horizontal + parseInt(value), vertical];
  },
  [0, 0]
);

console.log(solution[0] * solution[1]);
