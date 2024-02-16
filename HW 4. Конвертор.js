let quantity = 1;
let unit = "km"
switch(unit) {
    case "km":
        console.log("1 километр это " + 1000 * quantity + " метров");
        break; 
        case("h"):
        console.log("1 час это " + 60 * quantity + " минут");
        break;
        case("kg"):
        console.log("1 килограмм это " + 1000 * quantity + " миллиграмм");
        break; 
        default:
            console.log("Введите правильный вариант");
}