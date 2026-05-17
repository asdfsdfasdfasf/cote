const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let idx = 0;

const n = input[idx++];

const start = input[idx++];
const end = input[idx++];

const m = input[idx++];

const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < m; i++) {
  const x = input[idx++];
  const y = input[idx++];

  graph[x].push(y);
  graph[y].push(x);
}

const visited = Array(n + 1).fill(false);
const queue = [[start, 0]];

visited[start] = true;

let answer = -1;

while (queue.length > 0) {
  const [current, count] = queue.shift();

  if (current === end) {
    answer = count;
    break;
  }

  for (const next of graph[current]) {
    if (!visited[next]) {
      visited[next] = true;
      queue.push([next, count + 1]);
    }
  }
}

console.log(answer);
