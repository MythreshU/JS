
function oddEven(limit){
    for(let i=0;i<=limit;i++){
        if(i % 2 === 0)
            console.log(i,'Even');
        else
            console.log(i,'Odd');
    }

}
console.log(oddEven(10));