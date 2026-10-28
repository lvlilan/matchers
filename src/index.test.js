import { sortHeroes } from './index.js';

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const expected = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('sorts heroes by health descending (toEqual)', () => {
  expect(sortHeroes(heroes)).toEqual(expected);
});

test('toBe does NOT work for objects (deep equality demo)', () => {
  const result = sortHeroes(heroes);
  expect(result).not.toBe(expected);
});