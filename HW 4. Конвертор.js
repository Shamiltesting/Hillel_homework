
let quantity = 5;
let unit = " km";
let distanceKM =  quantity + unit; 
if (distanceKM === "5 km") {
    let distanceM = "5000 m";
    let resultOfDistance = "5 km its 5000 m"
    let hour = "часы"
    let minutes = "минуты"
    let kilograms = "килограммы"
    let milligrams = "миллиграммы"
}  
switch("5 km its 5000 mв") {
    case "часы":
        console.log("часы") ;
        break;
    case "минуты":
        console.log("минуты");
        break;
    case "килограммы":
        console.log("килограммы");
        break;
    case "миллиграммы":
        console.log("миллиграммы");
        break;
    case "5":
        console.log("просто цифра");
        break;
    case " km":
        console.log("просто кг");
        break;      
    case "5 km its 5000 m":
        console.log("5 км это 5000 метров");
        break;
        default:
            console.log("введите правильный вариант");
                    
        
}
