import fs from "fs";

const solution = require("./solution");

test("Day 02 Sample Part 1", async () => {
  const data = await loadData("sample.txt");
  expect(solution.part1(data)).toBe(15);
});

test("Day 02 Sample Part 2", async () => {
  const data = await loadData("sample.txt");
  expect(solution.part2(data)).toBe(12);
});

test("Day 02 Input Part 1", async () => {
  const data = await loadData("input.txt");
  expect(solution.part1(data)).toBe(9241);
});

test("Day 02 Input Part 2", async () => {
  const data = await loadData("input.txt");
  expect(solution.part2(data)).toBe(14610);
});

async function loadData(filename) {
  const data = await fs.readFileSync(`./src/day02/${filename}`, "utf-8");
  return data.split("\n");
}
