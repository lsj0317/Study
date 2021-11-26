/* 
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
    472
   X385
   2360
  3776
 1416
181720

(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {

    input.push(line);

}).on('close', function () {

    const num = parseInt(input[0]);
    // ("456").split('');
    const num2Arr = input[1].split('');
    const num100 = parseInt(num2Arr[0]);
    const num10 = parseInt(num2Arr[1]);
    const num1 = parseInt(num2Arr[2]);

    console.log(num * num1);
    console.log(num * num10);
    console.log(num * num100);
    console.log(num * parseInt(input[1]));


    rl.close();
});