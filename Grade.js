const marks = [90,90,90];
function grade(marks){
    let sum = 0;
    for(let i=0;i<marks.length;i++){
        sum += marks[i];
    }
    let avg = sum/marks.length;
    if(avg >= 0 && avg <= 59)
        return 'F';
    if(avg >= 60 && avg <= 69)
        return 'D';
    if(avg >= 70 && avg <= 79)
        return 'C';
    if(avg >= 80 && avg <= 89)
        return 'B';
    if(avg >= 90 && avg <= 100)
        return 'A';
}
console.log(grade(marks));