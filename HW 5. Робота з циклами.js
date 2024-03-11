//Задача №1:

let triangle = function(hight, symbol) {
    for(i = 1; i <= hight; i++) {
        let line = '';
        for(j = 1; j <= i; j++ ) {
            line += symbol;
        }
        console.log(line);
    }
    }
    triangle(8, "*"); 
    

//Задача №2:

label: for(i = 0; i <= 100; i++) {
    if (i % 3) {
        console.log("Its should appaer digits which not divisible by 3:  " + i);
        continue label;  
     }
    }


//Задача №3   
let result = 1;
function pow(x, y) {
    if(y === 0) {
        return 1;
    }
    for(i = 0; i < y; i++) {
        result *= x
    }
    if(y > 0) {
        return result;
    }
    else {
        return 1 / result;
    }
}
console.log(pow(4, 2));