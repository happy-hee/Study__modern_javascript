let user = {
    name: "John Smith",
    age: 35
};

// 1. JSON 형태의 문자열로 바꾸기
let userJson = JSON.stringify(user);
console.log(userJson);

// 2. 이를 다시 객체로 바꾼 후 제2의 변수에 저장
let userObj = JSON.parse(userJson);
console.log(userObj);

// 해답
//let user2 = JSON.parse(JSON.stringify(user));


