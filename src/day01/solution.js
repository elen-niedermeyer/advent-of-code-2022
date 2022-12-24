export default function run(data) {
  console.time("Day 01 Part 1");
  console.log("Part 1: ", part1(data));
  console.timeEnd("Day 01 Part 1");

  console.time("Day 01 Part 2");
  console.log("Part 2: ", part2(data));
  console.timeEnd("Day 01 Part 2");
}

export function part1(data) {
  return getArrayFromData(data)[0];
}

export function part2(data) {
  const sortedData = getArrayFromData(data);
  return sortedData[0] + sortedData[1] + sortedData[2];
}

function getArrayFromData(data) {
  const elves = [];
  let elf = 0;
  data.forEach((element) => {
    if (element.length) {
      elf += Number(element);
    } else {
      elves.push(elf);
      elf = 0;
    }
  });
  // push last elf
  elves.push(elf)

  return elves.sort(function (a, b) {
    return b - a;
  });
}
