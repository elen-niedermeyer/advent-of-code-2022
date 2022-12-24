export default function run(data) {
  console.time("Day 05 Part 1");
  console.log("Part 1: ", part1(data));
  console.timeEnd("Day 05 Part 1");

  console.time("Day 05 Part 2");
  console.log("Part 2: ", part2(data));
  console.timeEnd("Day 05 Part 2");
}

export function part1(data) {
  const parsedData = parseData(data);

  parsedData.moves.forEach((move) => {
    for (let i = 0; i < move[0]; i++) {
      const elementToMove = parsedData.positions[move[1] - 1].pop();
      parsedData.positions[move[2] - 1].push(elementToMove);
    }
  });

  return parsedData.positions.map((stack) => stack.pop()).join("");
}

export function part2(data) {
  const parsedData = parseData(data);

  parsedData.moves.forEach((move) => {
    const elementsToMove = parsedData.positions[move[1] - 1].slice(
      parsedData.positions[move[1] - 1].length - move[0]
    );
    parsedData.positions[move[1] - 1].splice(
      parsedData.positions[move[1] - 1].length - move[0]
    );
    parsedData.positions[move[2] - 1]= parsedData.positions[move[2] - 1].concat(elementsToMove);
  });

  return parsedData.positions.map((stack) => stack.pop()).join("");
}

function parseData(data) {
  let positions = [];
  const moves = [];

  let startPositionParsed = false;

  const regexp = /(\d+)/g;

  data.forEach((element) => {
    if (!element.length) {
      startPositionParsed = true;
    }

    if (!startPositionParsed && element.length) {
      let i = 0;
      const crates = [];
      while (i < element.length - 1) {
        crates.push(element.slice(i + 1, i + 2));
        i += 4;
      }
      positions.push(crates);
    }

    if (startPositionParsed && element.length) {
      const matches = [...element.matchAll(regexp)];
      moves.push(matches.map((m) => Number(m[0])));
    }
  });

  positions.pop();
  positions.reverse();
  positions = positions[0].map((_, colIndex) =>
    positions.map((row) => {
      if (row[colIndex].length) return row[colIndex];
    })
  );
  positions.forEach((stack, i) => {
    positions[i] = stack.filter((crate) => crate != " ");
  });
  return { positions, moves };
}
