import fs from "fs";

const solution = require("./solution");

test("Day 04 Sample Part 1", async () => {
  const data = await loadData("sample.txt");
  expect(solution.part1(data)).toBe(2);
});

test("Day 04 Sample Part 2", async () => {
  const data = await loadData("sample.txt");
  expect(solution.part2(data)).toBe(4);
});

test("Day 04 Input Part 1", async () => {
  const data = await loadData("input.txt");
  expect(solution.part1(data)).toBe(518);
});

test("Day 04 Input Part 2", async () => {
  const data = await loadData("input.txt");
  expect(solution.part2(data)).toBe(909);
});

async function loadData(filename) {
  const data = await fs.readFileSync(`./src/day04/${filename}`, "utf-8");
  return data.split("\n");
}
