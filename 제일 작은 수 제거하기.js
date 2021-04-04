function solution(arr) {
    var answer = [];
    if(arr.length <= 1){
        answer[0] = -1;
    } else {
        var min = Math.min(...arr);
        var index = arr.findIndex(num=>num===min);
        for(var i in arr) {
            if(arr[i] !== min) {
                answer.push(arr[i]);
            }
        }
    }
    return answer;
}