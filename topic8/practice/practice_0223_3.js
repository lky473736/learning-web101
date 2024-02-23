// practice 3. symbol 이해하기

// 객체의 key가 될 수 있는 것 : 문자열 or symbol

// symbol을 사용하는 이유 : https://velog.io/@fkszm3/JS-%EC%8B%AC%EB%B3%BCsymbol%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%B4%EA%B3%A0-%ED%95%98%EB%8A%94-%EC%97%AD%ED%95%A0%EC%9D%80

// 즉 symbol은 아직 개발 중이거나 특정 상수를 가리킬 때 절대로 다른 것과 충돌되면 안될 때 사용하는 키워드이다.

const user = {
    name : 'lky',
    age : 21
};

// symbol을 객체에 집어넣는 방법 : 먼저 symbol 함수로 symbol 만들기 -> 객체에 대입

const showName = Symbol('showName() 함수 작업중 (지금 이 symbol은 user에게 보이지 않음)');

// 객체 안에 showName이라고 하는 함수를 집어넣는다
user[showName] = () => {
    console.log(user.name);
};

user[showName](user.name);
