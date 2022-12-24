export default function run(data) {
  console.time("Day 04 Part 1");
  console.log("Part 1: ", part1(data));
  console.timeEnd("Day 04 Part 1");

  console.time("Day 04 Part 2");
  console.log("Part 2: ", part2(data));
  console.timeEnd("Day 04 Part 2");
}

export function part1(data) {
  let count = 0;
  data.forEach((element) => {
    const sections = parseElement(element);
    if (
      (sections[0] <= sections[2] && sections[1] >= sections[3]) ||
      (sections[2] <= sections[0] && sections[3] >= sections[1])
    ) {
      count++;
    }
  });

  return count;
}

export function part2(data) {
  let count = 0;
  data.forEach((element) => {
    const sections = parseElement(element);
    if (
      (sections[0] <= sections[2] && sections[2] <= sections[1]) ||
      (sections[0] >= sections[2] && sections[0] <= sections[3])
    ) {
      count++;
    }
  });

  return count;
}

function parseElement(element) {
  const pair = element.split(",");
  let sections = pair.map((s) => s.split("-"));
  return sections.reduce(
    (prev, next) => prev.concat(next.map((s) => Number(s))),
    []
  );
}
