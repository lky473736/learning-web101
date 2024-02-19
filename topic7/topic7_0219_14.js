/*
    객체 

    - 파이썬의 딕셔너리와 비슷하다
    - https://agvim.wordpress.com/2017/08/30/python-dictionary-vs-javascript-object/
    - 중괄호로 구성되며, key-value 쌍인 property로 구성됨, 쉼표로 구분됨
    - 객체에 접근 시에 .이나 [] 사용한다.
    - 추가/수정할 때에도 .이나 []를 사용한다.
    - 삭제할 때엔 delete를 사용한다. key값을 지울 수 있다. key를 지우면 value도 같이 지워진다
*/

const lky = {
    name : "lky",
    age : 21,
    pet : "dog", 
    univ : "gachon"
}

console.log(lky.age);
console.log(lky['pet']);

lky.mainLang = 'python';
lky['isAdult'] = false;
lky['isAdult'] = true;

delete lky.isAdult;