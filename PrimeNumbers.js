function primenumbers(limit){
    for(let i=2;i<=limit;i++){
        let count =0;
        for(let j=2;j<i;j++){
            if(i%j===0)
                count++;
                break;
        }
        if(count == 0)console.log(i);
    }
    
}
primenumbers(10);