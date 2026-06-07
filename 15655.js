const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let index = 0;
const N = input[index++];
const M = input[index++];

const arr = [];

for (let i = 0; i < N; i++) {
  arr.push(input[index++]);
}

arr.sort((a, b) => a - b);

const result = [];
const selected = [];

function dfs(start) {
  if (selected.length === M) {
    result.push(selected.join(" "));
    return;
  }

  for (let i = start; i < N; i++) {
    selected.push(arr[i]);
    dfs(i + 1);
    selected.pop();
  }
}

dfs(0);

console.log(result.join("\n"));
