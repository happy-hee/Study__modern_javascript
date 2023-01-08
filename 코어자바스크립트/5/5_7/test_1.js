/**
 * 배열에서 중복 요소 제거하기
 * arr에서 중복 값을 제거해주는 함수 unique(arr)을 만들어보세요.
 * (arr은 배열이라 가정)
 */

function unique(arr) {
    //내가 풀어봤던 문제
    // let set = new Set(arr);
    // for (let value of set) {
    //     console.log(value); // // John, Pete, Mary 순으로 출력
    // }

    //해답
    // Array.form 이터러블이나 유사 배열을 받아 '진짜' Array를 만들어주는 메서드 사용
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.