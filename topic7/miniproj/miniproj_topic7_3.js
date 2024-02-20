// miniproj 3. for, while, do-while로 이용한 구구단 출력

// for문
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} * ${j} == ${i*j}`);
    }
}

// while문
i = 1;

while (i < 10) {
    j = 1;

    while (j < 10) {
        console.log(`${i} * ${j} == ${i*j}`);
        j += 1;
    }

    i += 1;
}

// do-while문
i = 1;

do {
    j = 0;

    do {
        j += 1;
        console.log(`${i} * ${j} == ${i*j}`);
    } while (j < 9);

    i += 1;
} while (i < 10);