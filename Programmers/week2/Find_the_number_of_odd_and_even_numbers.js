function solution(num_list) {
    var answer = [];
    var num1 = 0;
    var num2 = 0;
    for( var i = 0;i<num_list.length;i++ )
        if(num_list[i] % 2 === 0){
        num1 = num1 + 1;
    }
        else{
        num2 = num2 + 1;
    }
    answer =[num1,num2]
    
    return answer;
}