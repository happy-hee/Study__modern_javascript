//1. for 반복문을 이용하여 짝수 출력하기
// 짝수 출력법 : 2로 나눴을 때  나머지가 0이 나오면 짝수
// for(i = 2; i<=10; i++) {
//     if(i % 2 == 0) {
//         alert(i);
//     }
// }

//2. ‘for’ 반복문을 ‘while’ 반복문으로 바꾸기
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }

// let i = 0;
// while(i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }

//3. 사용자가 유효한 값을 입력할 때까지 프롬프트 창 띄우기
// do while문 사용
// let num;

// do {
//     num = prompt('100을 초과하는 숫자를 입력하시오', 0);
//     // num <= 100 (100보다 같거나 작은 경우만)
//     // && num 을 사용하여 null 혹은 빈 문자열인지 확인
// } while ( num <= 100 && num );

//4. 소수 출력하기
// 범위 내 모든 숫자 i 에 대해서 {
//     1과 i 사이에 제수가 있는지 확인
//     있으면 = 소수가 아님
//     없으면 = 소수이므로 출력
// }
