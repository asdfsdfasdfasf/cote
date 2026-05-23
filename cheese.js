const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const board = [];

for (let i = 1; i <= N; i++) {
  board.push(input[i].split(" ").map(Number));
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let time = 0;

while (true) {

  // 외부 공기 표시용
  const air = Array.from({ length: N }, () =>
    Array(M).fill(false)
  );

  // BFS
  const queue = [[0, 0]];
  air[0][0] = true;

  let front = 0;

  while (front < queue.length) {
    const [x, y] = queue[front++];

    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];

      if (
        nx < 0 || ny < 0 ||
        nx >= N || ny >= M
      ) continue;

      // 공기이고 아직 방문 안 했으면
      if (!air[nx][ny] && board[nx][ny] === 0) {
        air[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }

  // 녹을 치즈 저장
  const melt = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {

      if (board[i][j] === 1) {

        let count = 0;

        for (let d = 0; d < 4; d++) {
          const ni = i + dx[d];
          const nj = j + dy[d];

          if (
            ni < 0 || nj < 0 ||
            ni >= N || nj >= M
          ) continue;

          // 외부 공기와 접촉
          if (air[ni][nj]) {
            count++;
          }
        }

        // 2면 이상 접촉하면 녹음
        if (count >= 2) {
          melt.push([i, j]);
        }
      }
    }
  }

  // 더 이상 녹을 치즈 없으면 종료
  if (melt.length === 0) {
    break;
  }

  // 치즈 제거
  for (const [x, y] of melt) {
    board[x][y] = 0;
  }

  time++;
}

console.log(time);
