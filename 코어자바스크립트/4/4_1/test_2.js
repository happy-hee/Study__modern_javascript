function isEmpty(obj) {
    for (let key in obj) {
        //키가 한개라도 있을시 false
        return false;
    }
    //키가 없다면 true
    return true;
}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false