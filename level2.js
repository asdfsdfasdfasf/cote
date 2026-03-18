function solution(numbers) {
    var answer = '';
    
    var arr = numbers.map(function(num) {
        return num.toString();
    });
    
    arr.sort(function(a, b) {
        if (b + a > a + b) return 1;
        else if (b + a < a + b) return -1;
        else return 0;
    });


    if (arr[0] === '0') {
        return '0';
    }

    answer = arr.join('');
    
    return answer;
}
