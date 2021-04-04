function solution(arr) {
    var answer = 0;
    for (var i in arr) {
        answer += arr[i];
    }
    return answer/=arr.length;
}