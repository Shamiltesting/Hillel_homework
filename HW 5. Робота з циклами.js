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

    let result = 0 ;
    for(i = 0; i <= 100; i++) {
        if(i % 3 && i !== 0) {
            result += i;
        }
    }
    console.log(result);


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


