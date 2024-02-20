// miniproj 2. 선형적인 입력 순서에 반응하는 계산기 만들기

const initialOperand = prompt("initial operand을 입력하세요.");
let result = Number(initialOperand);

while (true) {
    let nextOperand = prompt(`현재 계산결과 : ${result} / next operand을 입력하세요. (계산을 더 이상 진행하고 싶지 않다면 '+' 입력)`);

    if (nextOperand == '+') {
        break;
    }

    nextOperand = Number(nextOperand);

    while (true) {
        const operator = prompt("+, -, * /, %");
        
        switch (operator) {
            case '+' : 
                result += nextOperand;
                break;

            case '-' : 
                result -= nextOperand;
                break;

            case '*' : 
                result *= nextOperand;
                break;

            case '/' : 
                result /= nextOperand;
                break;

            default : 
                alert ("operator 입력이 잘못 되었습니다. 다시 operator를 입력하십시오.");
                continue;
        }

        break;
    }
}

alert(`최종 계산 결과는 ${result}`);