// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
// 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.
// 1부터 n까지 합을 출력한다.

const readline = require('readline'); // 변수명 readline(const : 상수값 변수 - 재할당 되지않는다.)에 저장한다 require(리드라인 모듈을 불러온다)
const rl = readline.createInterface({ // 변수명 rl에 새리드라인(줄을)만든다 이것은 입력값을 수신하는 인스턴스를 불러온다 = input
    input: process.stdin,
    output: process.stdout
})


rl.on('line', (input) => { // 변수 rl을 on이벤트 하였을때 (엔터 - \n 를 입력했을때 이벤트를 실행한다.) 입력(한줄)을 받겠다.
    // console.log(`라인 == 엔터를 입력받았을때 ${input}`);
    let N = input.split(' '); // 변수명 N에 입력(인풋)받은 값을 스페이스를 기준으로 나눈 값을 저장하겠다
    // console.log(`인풋값 = ${N}`);

    let sum = 0; // 변수명 sum에 숫자 0을 대입한다 <-- i의 증가값을 저장 할 변수

    for (let i = 1; i <= N; i++) { // for(변수명 i에 1을 대입한다 <-- 초기값; i가 N(입력)보다 작거나 같다면 실행한다 <--조건값; 실행후 i는 1씩 증가한다 <-- 증감값) <-- 괄호안은 조건문이다.

        sum += i; // 실행문 : i가 N(입력)보다 작거나 같다면 i값을 변수명 sum에 더하여 대입한다 (즉 sum = sum + i)

    }
    console.log(sum); // 콘솔에 출력한다( 변수명 sum의 값)

    rl.close(); // 변수 rl을 colse 이벤트 하였을때 더 이상 입력을 받지 않는다 <-- 종료한다.
})

/*
다른풀이

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
})


rl.on('line', (input) => {
    let N = input.split(' ');

    let sum = 0;

    for( let i = 1; i <= N; i++) {

        sum += i;

    }
    console.log( sum );

rl.close();
})
*/

/*
다른풀이2

const readline = require('readline'); // 변수명 readline(const : 상수값 변수 - 재할당 되지않는다.)에 저장한다 require(리드라인 모듈을 불러온다)
const rl = readline.createInterface({ // 변수명 rl에 새리드라인(줄을)만든다 이것은 입력값을 수신하는 인스턴스를 불러온다 = input
    input: process.stdin,
    output : process.stdout
})


rl.on('line', (input) => { // 변수 rl을 on이벤트 하였을때 (엔터 - \n 를 입력했을때 이벤트를 실행한다.) 입력(한줄)을 받겠다.
    // console.log(`라인 == 엔터를 입력받았을때 ${input}`);
    let N = input.split(' '); // 변수명 N에 입력(인풋)받은 값을 스페이스를 기준으로 나눈 값을 저장하겠다
    // console.log(`인풋값 = ${N}`);

    let sum = 0; // 변수명 sum에 숫자 0을 대입한다 <-- i의 증가값을 저장 할 변수

    for( let i = 1; i <= N; i++) { // for(변수명 i에 1을 대입한다 <-- 초기값; i가 N(입력)보다 작거나 같다면 실행한다 <--조건값; 실행후 i는 1씩 증가한다 <-- 증감값) <-- 괄호안은 조건문이다.

        sum += i; // 실행문 : i가 N(입력)보다 작거나 같다면 i값을 변수명 sum에 더하여 대입한다 (즉 sum = sum + i)

    }
    console.log( sum ); // 콘솔에 출력한다( 변수명 sum의 값)

rl.close(); // 변수 rl을 colse 이벤트 하였을때 더 이상 입력을 받지 않는다 <-- 종료한다.
});
*/
