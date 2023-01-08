/**
 * 프로퍼티 값 두 배로 부풀리기
 */

//객체 obj의 프로퍼티 값이 숫자인 경우 그 값을 두 배 해주는 함수 multiplyNumeric(obj)을 만들어보세요.

function multiplyNumeric(obj) {
    for(key in obj) {
        if(typeof obj[key] === 'number') {
            obj[key] *= 2;
            console.log(obj[key]);
        }
    }
}

// 함수 호출 전
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
multiplyNumeric(menu);

console.log (menu);