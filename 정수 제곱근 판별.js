function solution(n) {
    var answer = 0;
    var sq = Math.sqrt(n);
    if(Number.isInteger(sq)) {
        answer = (sq+1)*(sq+1);
    } else {
        answer = -1;
    }
    return answer;
}