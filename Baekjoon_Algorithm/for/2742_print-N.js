// 자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
// 첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.
// 첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let answer = '';

for (let i = input; i >= 1; i--) {
    answer += i + "\n";
}

console.log(answer);