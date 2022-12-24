export default function run(data) {
  console.time("Day 07 Part 1");
  console.log("Part 1: ", part1(data));
  console.timeEnd("Day 07 Part 1");

  console.time("Day 07 Part 2");
  console.log("Part 2: ", part2(data));
  console.timeEnd("Day 07 Part 2");
}

export function part1(data) {
  let root = new TreeNode("/", true);
  let currentNode = root;
  data.forEach((line) => {
    if (line.startsWith("$ cd /") || line.startsWith("$ ls")) {
      // go to next line
    } else {
      if (line.startsWith("$ cd")) {
        if (line != "$ cd ..") {
          // move one level in
          const dirName = line.split(" ")[1];
          currentNode = currentNode.children.filter(
            (child) => child.name == dirName
          );
        } else {
          // move one level out
          currentNode = currentNode.parent;
        }
      } else {
        if (line.startsWith("dir")) {
          // dir child
          const dirName = line.split(" ")[1];
          currentNode.children.push(new TreeNode(dirName, true, currentNode));
        } else {
          // file child
          currentNode.children.push(
            new TreeNode(
              line.split(" ")[1],
              false,
              currentNode,
              line.split(" ")[0]
            )
          );
        }
      }
    }
  });
  return root.size();
}

export function part2(data) {
  return 0;
}

class TreeNode {
  constructor(name, isDir, parent = undefined, size = undefined) {
    this.name = name;
    this.isDir = isDir;
    this.parent = parent;
    this.size = size;
    this.children = [];
  }

  size() {
    return size || this.children.reduce((sum, child) => (sum += child.size()));
  }
}
