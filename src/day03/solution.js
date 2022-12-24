export default function run(data) {
  console.time("Day 03 Part 1");
  console.log("Part 1: ", part1(data));
  console.timeEnd("Day 03 Part 1");

  console.time("Day 03 Part 2");
  console.log("Part 2: ", part2(data));
  console.timeEnd("Day 03 Part 2");
}

const priorities = ".abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function part1(data) {
  let prioritiesSum = 0;
  data.forEach((element) => {
    const splitIndex = element.length / 2;
    const partOne = element.slice(0, splitIndex);
    const partTwo = element.slice(splitIndex);

    const sharedItem = Array.from(partOne).find((c) => partTwo.indexOf(c) > -1);
    prioritiesSum += priorities.indexOf(sharedItem);
  });

  return prioritiesSum;
}

export function part2(data) {
  let prioritiesSum = 0;
  const chunkSize = 3;
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    const sharedItem = Array.from(chunk[0]).find((c) => chunk[1].indexOf(c) > -1 && chunk[2].indexOf(c) > -1);
    prioritiesSum += priorities.indexOf(sharedItem);
  }

  return prioritiesSum;
}
