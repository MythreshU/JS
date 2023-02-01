
console.log('HI');

let colours = ['Blue','Red'];
console.log(colours);
colours[2] = 'Green'; 
console.log(colours);
console.log(colours.length);
console.log(colours[2]);

function demo(greet, sendoff){
    console.log('Hello' + ' '+ greet +'\n'+ sendoff);
}
demo('World','Bye World');

function square(num){
    return num * num;
}
console.log('Result :',square(10));

let points = 200;
let type = points > 100 ? 'Gold Membership' : 'Silver Membership';
console.log(type);

