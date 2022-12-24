import fs from "fs";

const solution = require("./solution");

test("Day 01 Sample Part 1", async () => {
  const data = await loadData("sample.txt");
  expect(solution.part1(data)).toBe(24000);
});

test("Day 01 Sample Part 2", async () => {
  const data = await loadData("sample.txt");
  expect(solution.part2(data)).toBe(45000);
});

test("Day 01 Input Part 1", async () => {
  const data = await loadData("input.txt");
  expect(solution.part1(data)).toBe(72070);
});

test("Day 01 Input Part 2", async () => {
  const data = await loadData("input.txt");
  expect(solution.part2(data)).toBe(211805);
});

async function loadData(filename) {
  const data = await fs.readFileSync(`./src/day01/${filename}`, "utf-8");
  return data.split("\n");
}
