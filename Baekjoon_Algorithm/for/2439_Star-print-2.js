// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
// 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.
// 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

// 별찍기2의 로직
// 1. 변수(const)readline에 readline을 require한다
const readline = require('readline');
// 2. 변수(const) rl에 readline클래스 안에 createInterface를 실행한다
const rl = readline.createInterface({
    // 3. 인풋과 아웃풋을 적용시킨다
    input: process.stdin,
    output: process.stdout
});
// 4. rl.on이벤트 (\n)를 실행한다
rl.on('line', (line) => {

    // 5. 입력을 담을 변수를 만든다
    let input = line;
    // 6. 결과를 담을 변수를 만든다
    let result = "";

    for (let i = 1; i <= input; i++) { // 12. 줄을 만드는 for문
        // 초기값 i는 변수input를 대입한다; i가 1보다 크거나 같으면; i는 1씩 감소한다
        for (let j = 1; j <= input - i; j++) { // 7. 상위의 for문의 조건이 맞으면 이 for문을 실행한다
            // 초기값 j는 1이다; j가 6보다 작으면; j는 1씩 증가한다
            result += " "; // 8. 실행 : result에 공백(" ")을 대입한다
        }
        for (let k = 1; k <= i; k++) { // 9. 상위의 for문의 조건이 맞으면 이 for문을 실행한다
            // 초기값 k는 1이다; k가 i보다 작거나 같을때; k는 1씩 증가한다
            result += "*"; // 10. 실행 : result에 별("*")을 대입한다
        }
        result += "\n"; // 11. 중첩 for문이 종료 된후 result에 줄바꿈("\n")을 대입한다
    }
    console.log(result); // 13. for문을 빠져나온후 콘솔에 결과result를 출력한다

    // 14. rl.on이벤트를 종료한다
    rl.close();
});