const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

function solution(input) {
    const N = Number(input[0]);
    const heap = [];

    function compare(a, b) {
        if (Math.abs(a) === Math.abs(b)) {
            return a < b;
        }
        return Math.abs(a) < Math.abs(b);
    }

    function push(x) {
        heap.push(x);
        let i = heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (compare(heap[i], heap[parent])) {
                [heap[i], heap[parent]] = [heap[parent], heap[i]];
                i = parent;
            } else break;
        }
    }

    function pop() {
        if (heap.length === 0) return 0;

        const top = heap[0];
        const last = heap.pop();

        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;

            while (true) {
                let left = i * 2 + 1;
                let right = i * 2 + 2;
                let smallest = i;

                if (left < heap.length && compare(heap[left], heap[smallest])) {
                    smallest = left;
                }

                if (right < heap.length && compare(heap[right], heap[smallest])) {
                    smallest = right;
                }

                if (smallest !== i) {
                    [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                    i = smallest;
                } else break;
            }
        }

        return top;
    }

    const result = [];

    for (let i = 1; i <= N; i++) {
        const x = Number(input[i]);

        if (x === 0) {
            result.push(pop());
        } else {
            push(x);
        }
    }

    console.log(result.join('\n'));
}

solution(input);
