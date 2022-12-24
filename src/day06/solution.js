export default function run(data) {
  console.time("Day 06 Part 1");
  console.log("Part 1: ", part1(data));
  console.timeEnd("Day 06 Part 1");

  console.time("Day 06 Part 2");
  console.log("Part 2: ", part2(data));
  console.timeEnd("Day 06 Part 2");
}

export function part1(data) {
  return detectMarker(data[0], 4);
}

export function part2(data) {
  return detectMarker(data[0], 14);
}

function detectMarker(string, markerSize) {
  let elements = [];
  for (let i = 0; i < string.length; i++) {
    if (elements.length == markerSize) {
      if (!elements.some((item, index) => elements.indexOf(item) !== index)) {
        return i;
      }
    }
    elements.push(string[i]);
    if (elements.length > markerSize) {
      elements.splice(0, 1);
    }
  }
}
