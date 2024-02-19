/*
    반복문
    - for, while, do-while
    - 똑같음. break나 continue 또한 똑같음.
*/

// 1부터 10까지 합을 출력하는 코드

// for문

let sum = 0;

for (let i = 1; i < 11; i++) {
    sum += i;
}

console.log(sum);

//////////////

// while문

sum = 0;
i = 1;

while (i <= 10) {
    sum += i++;
}

console.log(sum);

//////////////

// do-while문

sum = 0;
i = 0;

do {
    i += 1;
    sum += i;
} while (i < 10);

console.log(sum);

//////////////

// break, continue 실습해보기

let a = 1;

while (true) { 
    a += 1;
    
    if (a > 10)
    {
        break;
    }
}

console.log(a);

a = 1;

while (true) {
    a += 1;

    if (a > 10)
    {
        break;
    }

    else 
    {
        continue;
    }
}

console.log(a);

while (true) {
    let keep = confirm("계속 진행할까요?");

    if (keep) {
        continue;
    }

    else if (!keep) {
        break;
    }
}