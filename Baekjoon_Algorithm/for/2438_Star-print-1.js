// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.
// 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

// 별찍기 로직
// 1. 리드라인을 리콰이어하고 변수 const에 저장한다.
const readline = require('readline');
// 2. rl을 변수로 선언하고 readline을 입력받을 인터페이스를 생성한다.
const rl = readline.createInterface({
    // 3. 변수 rl의 on이벤트 (enter를 입력받았을때)를 실행하고 인풋과 아웃풋을 받는다.
    input: process.stdin,
    output: process.stdout
});

// 4. 문자 '*'를 받을 변수 star를 만든다.
let star = "";
// 5. \n 입력시 이벤트를 활성화시킨다.
rl.on('line', (line) => {
    // 6. 입력을 받아 변수 num에 저장한다 ( +를 붙여 숫자로 변환)
    let num = +line;
    /* console.log(`readline input ${num}`); */
    // 9. 3-4를 for문으로 반복한다 : for( i = 1; i < input; i++ )
    for (let i = 1; i <= num; i++) {
        // 7. 실행시, 변수 star에 문자 '*'를 대입한다. 
        star += "*";
        // 8. 콘솔에 변수 star에 담은 "*"를 출력한다.
        console.log(star);
    }
    // 10. rl.close();로 입력을 종료한다.
    rl.close();
});