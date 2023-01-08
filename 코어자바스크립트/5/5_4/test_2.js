/**
 * 입력한 숫자의 합 구하기
 */
    function sumInput() {
    let numArr = [];
    while(true) {
        let inputNum = prompt("숫자를 입력하세요.", '');

        //입력받는것을 정지
        if(inputNum === "" || inputNum === null || !isFinite(inputNum)) break;

        numArr.push(inputNum);
    }

    let sum = 0;
    for(let num of numArr) {
        sum += +num;
    }

    return sum;
}

alert(sumInput());