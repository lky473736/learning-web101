// miniproj 1. 이길 때까지 반복하는 가위 바위 보 만들기

while (true) 
{
    let randomNum = Math.floor(Math.random() * 3); // 0, 1, 2
    // 0 : 가위 / 1 : 바위 / 2 : 보

    const userNum = prompt("가위 : 0 / 바위 : 1 / 보 : 2");

    let token = true;

    if (userNum == null) { // 사용자가 취소를 눌렀을 때
        alert ("게임에 참여해주세요.");
        continue;
    }

    else if (userNum == "") { // 사용자가 아무것도 입력하지 않았을 때
        alert ("아무것도 입력하지 않았습니다. 입력하십시요.");
        continue;
    }

    switch (Number(userNum)) {
        case 0 : // user가 가위를 냈으면
            token = winorlose(scissor(randomNum));
            break;

        case 1 : // user가 바위를 냈다면
            token = winorlose(rock(randomNum));
            break;

        case 2 : // user가 보를 냈다면
            token = winorlose(paper(randomNum));
            break;

        default : 
            alert("ERROR. 값을 잘못 입력하였습니다.")
            token = false;
            break;
    }

    if (token == false) 
    {
        break;
    }
}

function scissor (com) {
    switch (com) {
        case 0 : // 가위
            return 1; // 비김

        case 1 : // 바위
            return 0; // 짐

        case 2 : // 보
            return 2; // 이김

        default :
            break;
    }
}

function rock (com) {
    switch (com) {
        case 0 : // 가위
            return 2; // 이김

        case 1 : // 바위
            return 1; // 비김

        case 2 : // 보
            return 0; // 짐

        default :
            break;
    }
}

function paper (com) {
    switch (com) {
        case 0 : // 가위
            return 0; // 짐

        case 1 : // 바위
            return 2; // 이김

        case 2 : // 보
            return 1; // 비김 

        default :
            break;
    }
}

function winorlose (exp) {
    if (exp == 2) {
        alert ("이겼습니다.");
        return false;
    }

    else if (exp == 1) {
        alert ("비겼습니다. 다시 게임을 진행합니다.");
        return true;
    }

    else {
        const askContinue = confirm ("졌습니다. 다시 게임을 진행하시겠습니까?");

        if (askContinue) {
            return true;
        }

        else {
            return false;
        }
    }
}