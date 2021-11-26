// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
// 첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.
// 시험 성적을 출력한다.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    input = line.split(' ');

    const num = Number(input);

    //59 ~ 0점은 F 
    //60 ~ 69점은 D 
    //70 ~ 79점은 C 
    //80 ~ 89점은 B 
    //90 ~ 100점은 A  


    if (num < 60) { // num이 60보다 작으면? -> F
        console.log('F');
    } else if (num < 70) { // num이 70보다 작으면? -> D
        console.log('D');
    } else if (num < 80) { // num이 80보다 작으면? -> C
        console.log('C');
    } else if (num < 90) { // num이 90보다 작으면? -> B
        console.log('B');
    } else if (num >= 90) { // num이 100보다 작거나 같으면? -> A
        console.log('A');
    }


    rl.close();
});