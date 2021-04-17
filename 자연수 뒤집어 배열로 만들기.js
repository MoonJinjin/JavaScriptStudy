function solution(n) {
    var answer = [];
    var temp = String(n).split("").reverse();
    for(var i of temp) {
        answer.push(parseInt(i));
    }
    return answer;
}