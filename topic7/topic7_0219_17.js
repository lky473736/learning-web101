// 객체 연습 2

function isAdult(user) {
    if(!('age' in user) || user.age < 20) { // age가 user안에 없거나 user.age가 20일때 (차례대로 불리언 표현 검증)
        return false;
    }
    return true;
}

const lky = {
    name : 'lky',
    age : 21
};

const daramji = {
    name : 'daramji'
};

console.log(isAdult(lky)); // true
console.log(isAdult(daramji)); // undefined이기 때문에 true가 나옴. 그러면 안되니깐 in 키워드를 사용해 방지해주어야 한다