const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const map = [];

for (let i = 1; i <= N; i++) {
  map.push(input[i].trim().split("").map(Number));
}

const visited = Array.from({ length: N }, () => Array(N).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(x, y) {
  const queue = [];
  queue.push([x, y]);
  visited[x][y] = true;

  let count = 1;

  while (queue.length > 0) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) {
        continue;
      }

      if (map[nx][ny] === 1 && visited[nx][ny] === false) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
        count++;
      }
    }
  }

  return count;
}

const result = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && visited[i][j] === false) {
      const houseCount = bfs(i, j);
      result.push(houseCount);
    }
  }
}

result.sort((a, b) => a - b);

console.log(result.length);
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
