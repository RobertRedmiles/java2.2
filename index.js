let q1test = 15;
    if (q1test % 3 === 0 && q1test % 5 === 0) {
        console.log(`both`);
    } else if ( q1test % 5 === 0) {
        console.log(`true5`);
    } else if (q1test % 3 === 0) {
        console.log(`true3`);
    }

function leapyear(year) {
    return (year % 100 === 0)
    ? (year % 400 === 0) :
    (year % 4 === 0);
}
console.log(leapyear(1999));
console.log(leapyear(2000));
console.log(leapyear(1900));
console.log(leapyear(2024));

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 4 === 0){
        console.log(i);
    }
}