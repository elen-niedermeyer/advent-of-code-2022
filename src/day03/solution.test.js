import fs from "fs";

const solution = require("./solution");

test("Day 03 Sample Part 1", async () => {
  const data = await loadData("sample.txt");
  expect(solution.part1(data)).toBe(157);
});

test("Day 03 Sample Part 2", async () => {
  const data = await loadData("sample.txt");
  expect(solution.part2(data)).toBe(70);
});

test("Day 03 Input Part 1", async () => {
  const data = await loadData("input.txt");
  expect(solution.part1(data)).toBe(7845);
});

test("Day 03 Input Part 2", async () => {
  const data = await loadData("input.txt");
  expect(solution.part2(data)).toBe(2790);
});

async function loadData(filename) {
  const data = await fs.readFileSync(`./src/day03/${filename}`, "utf-8");
  return data.split("\n");
}
