import fs from "fs";

const solution = require("./solution");

test("Day 05 Sample Part 1", async () => {
  const data = await loadData("sample.txt");
  expect(solution.part1(data)).toBe('CMZ');
});

test("Day 05 Sample Part 2", async () => {
  const data = await loadData("sample.txt");
  expect(solution.part2(data)).toBe('MCD');
});

test("Day 05 Input Part 1", async () => {
  const data = await loadData("input.txt");
  expect(solution.part1(data)).toBe('CVCWCRTVQ');
});

test("Day 05 Input Part 2", async () => {
  const data = await loadData("input.txt");
  expect(solution.part2(data)).toBe('CNSCZWLVT');
});

async function loadData(filename) {
  const data = await fs.readFileSync(`./src/day05/${filename}`, "utf-8");
  return data.split("\n");
}
