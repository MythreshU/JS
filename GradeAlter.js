const marks = [80,90,90];

function calculateGrade(marks){
    const avg = calculateAverage(marks);
    if(avg < 60)return 'F';
    if(avg < 70)return 'D';
    if(avg < 80)return 'C';
    if(avg < 90)return 'B';
    return 'A';
}
console.log(calculateGrade(marks));

function calculateAverage(marks){
    let sum =0;
    for(let i=0;i<marks.length;i++){
        sum += marks[i];       
    }
    return sum/marks.length;
}