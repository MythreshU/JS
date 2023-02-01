const movie ={
    title : 'a',
    year : 2022,
    rating : 3.9,
    hero : 'b'
};

showproperty(movie);
function showproperty(obj){
    for (let key in obj)
        if(typeof obj[key] === 'string')
            console.log(key,obj[key]);
}