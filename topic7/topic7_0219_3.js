/*
    alert : 경고창을 띄워 알려준다 (경고창에 출력)
        - 사용자가 확인 버튼을 누를 때까지 계속 떠있는다
    prompt : 창에서 입력을 받는다 (파이썬에서 일종의 input, sys.stdin.readline())
    confirm : 확인을 받는다
*/

let user_name = prompt("이름을 입력하세요 : ");
console.log(user_name);
// 만약 prompt에 아무것도 입력하지 않고 취소버튼을 누르면 user_name에 null이 대입된다.

let date = prompt("예약일을 입력하세요 : ", "2024-02-"); 
// 디폴트로 input 란에 넣을 문자열을 미리 선언할 수 있다. (두번째 인자)
// 이때 디폴트로 되어있는 문자열은 이미 date에 저장이 되어있는 것

const isAdult = confirm("당신은 성인입니까? (맞으면 확인, 아니면 취소 버튼을 누르세요.)");
console.log (isAdult); 
// 사용자가 확인 버튼을 누르면 isAdult에 true값이,
// 취소 버튼을 누르면 false값이 들어간다.

alert(`알겠습니다, ${user_name}님. ${date}로 예약이 완료되었습니다.`);

/*
    단점
    - 창이 떠있으면 스크립트가 일시정지 되어있다
    - 스타일링이 되지 않는다
*/