// 급여 관련 정보
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

//가장 많은 급여를 받는 사람의 이름을 반환

function topSalary(salaries) {
    let max = 0;
    let maxName = null;

    // 객체의 키와 값 순회하기
    for (let [name, salary] of Object.entries(salaries)) {
        // name: John, salary: 100
        // name: Pete, salary: 300
        // name : Mary, salary: 250

        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }

    return maxName;
}

topSalary(salaries)