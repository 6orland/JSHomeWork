//Цикл while

let i = 0;
let lastNumber = 15;
let message = " ";
while (++i <= lastNumber) {
    message += `${i}${i !== lastNumber ? ", " : ""}`;
}  
    console.log(message);


//Цикл for
//let n = 0;
//for (n = 0; n < 5; n++ ) {
//    alert(n);
//}
//alert(n);

let n = 10000;
let m = 500;
count = 0;

while(n>m){
    n = n/2;
    count++;
}

console.log(count);

let firstDate = 1800;
let lastDate = 2020;
let iterationNum = 0;
let message = " ";
while (++iterationNum; ++firstDate <= lastDate;) 