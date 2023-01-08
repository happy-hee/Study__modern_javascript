/**
 * 배열과 관련된 연산
 */

//1. 요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
let styles = ["Jazz", "Blues"];
console.log(styles);

//2. "Rock-n-Roll"을 배열 끝에 추가합니다.
styles.push("Rock-n-Roll");
console.log(styles);

//3. 배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 
//   가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.
styles[Math.floor((styles.length)/2)] = "Classics";
//!! 해답에선 위 부분이 styles[Math.floor((styles.length - 1) / 2)] = "Classics"; 로 되어있었음.
console.log(styles);

//4. 배열의 첫 번째 요소를 꺼내서 출력합니다.
styles.shift();
console.log(styles);

//5. "Rap"과 "Reggae"를 배열의 앞에 추가합니다.
styles.unshift("Rap", "Reggae");
console.log(styles);
