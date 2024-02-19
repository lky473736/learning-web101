/*
    switch문
    - 똑같음
*/

let token = 0;

while (true) {
    let a = prompt ("1~3중에 아무거나 입력");
    token = 0;

    switch (Number(a)) {
        case 1 :
            alert ("1 입력함");
            token = 1;
            break;
            
        case 2 :
            alert ("2 입력함");
            token = 1;
            break;
        
        case 3 :
            alert ("3 입력함");
            token = 1;
            break;

        default :
            alert ("에러. 다시 입력하세요.")
            continue;
    }
    
    if (token === 1) {
        break;
    }
}