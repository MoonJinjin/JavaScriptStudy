function solution(arr)
{
    var answer = [];
    for(var i in arr) {
        if(arr[i] !== arr[i+1]) {
            answer.push(arr[i]);
        }
    }
    
    return answer;
}