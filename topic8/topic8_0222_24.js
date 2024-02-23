/*
    async

    - promise의 then, catch, finally의 가독성을 더욱 좋게 만들어줄 수 있음
    - async : function앞에 async를 하면 promise를 반환한다
*/

async function getName() { // promise
    console.log('getName() 호출');
}

getName().then( // getName()이 애초에 promise이기 때문에 then을 사용할 수 있게 된다
    function() {
        console.log("then 호출");
    }
).catch(
    function() {
        console.log("catch 호출");
    }
).finally(
    function() {
        console.log("finally 호출");
    }
);