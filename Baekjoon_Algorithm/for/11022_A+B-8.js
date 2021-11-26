// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다.
// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 각 테스트 케이스마다 "Case #x: A + B = C" 형식으로 출력한다. x는 테스트 케이스 번호이고 1부터 시작하며, C는 A+B이다.

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];

// 1. 입력 받는다 
rl.on('line', (line) => {
    // 2. input에 저장(push)
    input.push(line);
});

rl.on('close', () => {
    //                             0      1      2     3      4       5    총 6개 
    // 3. 예를 들어 input 변수에 [ '5', '1 1', '2 3', '3 4', '9 8', '5 2' ] 이 값이 있을 경우 
    // 4. input 변수의 첫 번째 요소는 변수 testCase(number)에 다시 저장한다.
    let testCase = input[0];

    // 10. 5 ~ 9번 까지 반복한다.
    // 조건 : 전체 크기에서 1을 뺀 만큼 반복한다
    // 초깃값 : 두 번째 요소 부터 반복할꺼니까 i = 1로 설정
    // 증감값 : i를 1씩 증가한다.
    for (let i = 1; i <= input.length - 1; i++) {
        // 5. input 변수의 두 번째 요소의 값을 공백(' ')으로 나누어(string.split) 변수(AB)에 저장한다.
        // 세 번째, 네 번째 .... N 번째(input.length - 1) 까지 반복을 할꺼다
        let AB = input[i].split(' ');
        //    (예상 되는 AB의 값은 [ '1', '3' ] 이다)
        // 6. AB의 첫 번째 요소를 변수(A)에 숫자로 변환하여 저장한다.
        let A = +AB[0];
        // 7. AB의 두 번째 요소를 변수(B)에 숫자로 변환하여 저장한다.
        let B = +AB[1];
        // 8. A와 B를 더하여 변수(Result)에 저장한다.
        const Result = A + B;
        // 9. 문자 포맷에 맞추어 결과값을 출력한다.
        //    (문자 포맷 -> "Case#${testCase}: ${A} + ${B} = ${A+B}" )
        // 반복문 : testCase 대신 순차를 입력
        console.log(`Case #${i}: ${A} + ${B} = ${Result}`);
    }
});