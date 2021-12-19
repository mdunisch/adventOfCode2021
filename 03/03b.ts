import { readFileSync } from 'fs';

const file: string[] = readFileSync('./03/input03a.txt', 'utf8').split('\n');

function getMostCommon(lines: string[], searchPos: number) {
  const sum0 = lines.filter(line => line[searchPos] === '0').length;
  const sum1 = lines.length - sum0;

  return sum0 > sum1 ? '0' : '1';
}

function getLessCommon(lines: string[], searchPos: number) {
  const sum0 = lines.filter(line => line[searchPos] === '0').length;
  const sum1 = lines.length - sum0;

  return sum0 <= sum1 ? '0' : '1';
}

function filterFileToOneElement(file: string[], filterFunction: (lines: string[], searchPos: number) => string) {
  let fileCopy = [...file];
  for (let i = 0; i < file.length; i++) {
    fileCopy = fileCopy.filter(line => line[i] === filterFunction(fileCopy, i));
    if (fileCopy.length === 1) {
      return fileCopy[0];
    }
  }
}

const solution_oxygen = parseInt(filterFileToOneElement(file, getMostCommon), 2);
const solution_CO2 = parseInt(filterFileToOneElement(file, getLessCommon), 2);

console.log(solution_oxygen, solution_CO2);
console.log(solution_oxygen * solution_CO2);
