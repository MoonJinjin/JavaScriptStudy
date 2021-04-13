function solution(x) {
    var answer = true;
    var num = String(x).split("");
    var temp = 0;
    for (var i=0; i<num.length; i++) {
        temp += parseInt(num[i]);
        if(x % temp === 0) {
            answer = true;
        } else {
            answer = false;
        }
    }
    return answer;
}