/*
상근이는 매일 아침 알람을 듣고 일어난다. 알람을 듣고 바로 일어나면 다행이겠지만, 항상 조금만 더 자려는 마음 때문에 매일 학교를 지각하고 있다.
상근이는 모든 방법을 동원해보았지만, 조금만 더 자려는 마음은 그 어떤 것도 없앨 수가 없었다.
이런 상근이를 불쌍하게 보던, 창영이는 자신이 사용하는 방법을 추천해 주었다.
바로 "45분 일찍 알람 설정하기"이다.
이 방법은 단순하다. 원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾸는 것이다. 어차피 알람 소리를 들으면, 알람을 끄고 조금 더 잘 것이기 때문이다. 이 방법을 사용하면, 매일 아침 더 잤다는 기분을 느낄 수 있고, 학교도 지각하지 않게 된다.
현재 상근이가 설정한 알람 시각이 주어졌을 때, 창영이의 방법을 사용한다면, 이를 언제로 고쳐야 하는지 구하는 프로그램을 작성하시오.
*/

/*
첫째 줄에 두 정수 H와 M이 주어진다. (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 그리고 이것은 현재 상근이가 설정한 놓은 알람 시간 H시 M분을 의미한다.
입력 시간은 24시간 표현을 사용한다. 24시간 표현에서 하루의 시작은 0:0(자정)이고, 끝은 23:59(다음날 자정 1분 전)이다. 시간을 나타낼 때, 불필요한 0은 사용하지 않는다.
*/

// 첫째 줄에 상근이가 창영이의 방법을 사용할 때, 설정해야 하는 알람 시간을 출력한다. (입력과 같은 형태로 출력하면 된다.)

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', function (line) {

    input.push(line);
});

rl.on('close', () => {

    const inputArr = input[0].split(' ');
    let h = +inputArr[0];
    let m = +inputArr[1];

    if (m >= 45) {
        m -= 45;
    } else {
        m += 15;
        h = h > 0 ? --h : 23;
    }
    console.log(`${h} ${m}`);
    rl.close();
});

/*
다른 풀이

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', function(line){

   input.push(line);
});

rl.on('close', ()=>{

    const inputArr = input[0].split(' ');
    let h = +inputArr[0];
    let m = +inputArr[1];

    if(m >= 45){
        m -= 45;
    }else{
        m = m + 60 - 45;
        if(h > 0){
            h--;
        }else{
            h = 23;
        }

    }

    console.log(`${h} ${m}`);
    // 45분 땡기기




    rl.close();
});
*/

/*
다른 풀이2

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', function(line){

    const input = line.split(' ');

    let H = input[0]; // 입력 한 시간
    //console.log(`입력된 H : ${H}`);

    let M = input[1]; // 입력 한 분
    //console.log(`입력된 M : ${M}`);

    //  45 <= 45
    if( M < 45 ) {
        if(H == 0){
            let h = 24;
            h -= 1;
            H = h;
        }else{
            H -= 1;
        }
        let m = 60;
        m -= 45;
        m += +M;
        console.log(`${H} ${m}`);
    }else if( M >= 45) {
        M -= 45;
        console.log(`${H} ${M}`);
    }

    rl.close();
});

*/