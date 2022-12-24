import fs from "fs";

const solution = require("./solution");

test("Day 06 Sample Part 1", async () => {
  const data = await loadData("sample.txt");
  expect(solution.part1(data)).toBe(7);
});

test("Day 06 Sample Part 2", async () => {
  const data = await loadData("sample.txt");
  expect(solution.part2(data)).toBe(19);
});

test("Day 06 Input Part 1", async () => {
  const data = await loadData("input.txt");
  expect(solution.part1(data)).toBe(1238);
});

test("Day 06 Input Part 2", async () => {
  const data = await loadData("input.txt");
  expect(solution.part2(data)).toBe(3037);
});

async function loadData(filename) {
  const data = await fs.readFileSync(`./src/day06/${filename}`, "utf-8");
  return data.split("\n");
}
