// computed property
let a = 'age';

const user = {
    name : 'lky', 
    // age : 21 <- 이거 대신에 저기 위에 있는 a를 활용해서
    [a] : 21, // <- 이렇게 사용해도 된다 (computed property)
    [1 + 4] : 5, // 이것도 가능
    ["안녕하세요" + " 반갑습니다"] : "hello nice to meet you" // 이것도 가능
};

console.log(user)

