/*
    논리 연산자 
    - AND && : 그리고 (둘 다 참일 때)
        - 첫번째 false를 발견하는 즉시 평가를 멈춘다
    - OR || : 또는 (둘 중 하나가 참일 때)
        - 첫번째 true를 발견하는 즉시 평가를 멈춘다 (시간복잡도 면에서 좋음)
        - 따라서 and와 or의 불리언 표현을 잘 배치해서 시간복잡도를 줄이는게 좋음
    - NOT ! : 부정 연산자 (unary, 진리값을 변경)
*/

const input_name = prompt("이름이 무엇입니까?");
const isAdult = confirm("성인인가요?");

if (input_name === "TOM" && isAdult == true) {
    alert ("당신은 TOM이자 성인이군요. 통과입니다.")
}

else if (input_name === "TOM" || isAdult == true) {
    alert ("당신은 TOM이거나 성인이군요. 통과입니다.")
}

/* else랑 똑같은 표현임
else if (!(input_name === "TOM") && !(isAdult == true)) {
    alert ("당신은 TOM도 아니고 성인도 아니네요. 퇴장입니다.")
}
*/

else {
    alert ("당신은 TOM도 아니고 성인도 아니네요. 퇴장입니다.")
}