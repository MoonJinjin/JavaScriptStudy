function solution(n) {
    var num = String(n);
    return Number(num.split("").sort().reverse().join(""));
}