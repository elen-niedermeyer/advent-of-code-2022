// Points: 1 for Rock, 2 for Paper, and 3 for Scissors; 0 if you lost, 3 if the round was a draw, and 6 if you won

export default function run(data) {
  console.time("Day 02 Part 1");
  console.log("Part 1: ", part1(data));
  console.timeEnd("Day 02 Part 1");

  console.time("Day 02 Part 2");
  console.log("Part 2: ", part2(data));
  console.timeEnd("Day 02 Part 2");
}

export function part1(data) {
  let points = 0;
  data.forEach((element) => {
    const opponentsChoice = element[0]; // A for Rock, B for Paper, and C for Scissors
    const myChoice = element.slice(-1); // X for Rock, Y for Paper, and Z for Scissors

    // points for shape
    switch (myChoice) {
      case "X":
        points += 1;
        break;
      case "Y":
        points += 2;
        break;
      case "Z":
        points += 3;
        break;
    }

    // points for outcome
    if (
      (opponentsChoice == "A" && myChoice == "Y") ||
      (opponentsChoice == "B" && myChoice == "Z") ||
      (opponentsChoice == "C" && myChoice == "X")
    ) {
      // won
      points += 6;
    } else if (
      (opponentsChoice == "A" && myChoice == "X") ||
      (opponentsChoice == "B" && myChoice == "Y") ||
      (opponentsChoice == "C" && myChoice == "Z")
    ) {
      //draw
      points += 3;
    }
    // do not handle lost because it does not add points
  });

  return points;
}

export function part2(data) {
  let points = 0;
  data.forEach((element) => {
    const opponentsChoice = element[0]; // A for Rock, B for Paper, and C for Scissors
    const myOutcome = element.slice(-1); // X lose, Y draw, Z win

    // points for outcome
    switch (myOutcome) {
      case "Y":
        points += 3;
        break;
      case "Z":
        points += 6;
        break;
    }

    // points for shape
    if (
      (opponentsChoice == "A" && myOutcome == "Y") ||
      (opponentsChoice == "B" && myOutcome == "X") ||
      (opponentsChoice == "C" && myOutcome == "Z")
    ) {
      // rock
      points += 1;
    } else if (
      (opponentsChoice == "A" && myOutcome == "Z") ||
      (opponentsChoice == "B" && myOutcome == "Y") ||
      (opponentsChoice == "C" && myOutcome == "X")
    ) {
      // paper
      points += 2;
    } else if (
      (opponentsChoice == "A" && myOutcome == "X") ||
      (opponentsChoice == "B" && myOutcome == "Z") ||
      (opponentsChoice == "C" && myOutcome == "Y")
    ) {
      // scissors
      points += 3;
    }
    // do not handle lost because it does not add points
  });

  return points;
}
