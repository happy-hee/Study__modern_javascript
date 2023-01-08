/**
 * border-left-width를 borderLeftWidth로 변경하기
 */
function camelize(str) {
    //대시(-) 뺀 뒤 배열에 넣기
    let strArr = str.split('-');

    //카멜 표기법 사용해서 만들기
    let camelizeStrArr = strArr.map((item,index) => {
       return index === 0 ? item : item[0].toUpperCase() + item.slice(1);
    });

    //카멜 표기법 사용해서 만든 배열 합치기
    return camelizeStrArr.join('');
}


//해답
function camelize(str) {
    return str
        //대시(-) 뺀 뒤 배열에 넣기
        .split('-')
        //카멜 표기법 사용해서 만들기
        .map(
            (item,index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)
        )
        //카멜 표기법 사용해서 만든 배열 합치기
        .join('');
}

alert(camelize('list-style-image'));