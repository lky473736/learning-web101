// practice 2. 객체 메소드 연습

const userInfo = {
    name : 'lky',
    sex : 'male',
    age : 21,
    univ : 'gachon',
    skill : 'python, AI',
};

// 이미 만들어놓은 객체를 복사할 때 + 덧붙일 때 assign을 사용한다.
const anotherInfo = Object.assign({sex : 'female'}, userInfo);
// 언뜻 봐서는 sex : female이 male을 덮어쓸 것 같지만 아니다.
// 덧붙일 땐 뒤에 있는 객체가 우선순위이다.
console.log(anotherInfo)

const userInfo2 = {
    location : 'seongnam'
};

const userInfo3 = {
    hobby : 'Problem Solving'
};

const lky = Object.assign(userInfo, userInfo2, userInfo3);
console.log (lky);
// 이러면 다 합쳐진다. (서로 겹치는게 없기 때문에)

// keys, values, entries
console.log(Object.keys(lky));
console.log(Object.values(lky));
console.log(Object.entries(lky));

// Object.fromEntries : entries랑 반대. entries는 key와 value를 2차원 형태로 매칭시켰지만 fromEntries는 2차원 형태의 배열을 객체로 만들 수 있다
const arrOfDaramji = [['name', 'daramji'], ['age', 3], ['hobby', 'playing game']];
const daramji = Object.fromEntries(arrOfDaramji);
console.log(daramji);