let digitInput = +prompt("Вкажіть ваш вік");
let age1 = "рік";
let age2 = "роки";
let age3 = "років";

if (digitInput % 10 === 1 && + digitInput % 100 !== 11 && + digitInput % 100 !== 21) {
    console.log (digitInput, age1);

} else if (digitInput % 10 === 2 || digitInput % 10 === 3 || digitInput % 10 === 4) {
    
    
 console.log (digitInput, age2);
} else {

    console.log (digitInput, age3);
   }

