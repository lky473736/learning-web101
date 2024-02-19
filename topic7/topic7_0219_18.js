// for in 예제

const lky = {
    name : "lky",
    age : 21
}

for (key in lky) { // key는 아무거나 써줘도 된다 (a, b, c, ...)
    console.log(key, lky[key]);
}

