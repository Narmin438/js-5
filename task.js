// let id = prompt("mehsul id daxil edin: ")
// switch (id) {
//     case "1":
//         alert("Movcud 10 eded.");
//         break;
//     case "2":
//         alert("Movcud 256 eded.");
//         break;
//     case "3":
//         alert("53 eded movcuddur.");
//         break;
//     case "4":
//         alert("movcud 3 eded.");
//         break;

//     default:
//         alert("Movcud deyil");
//         break;
// }


// let gender = prompt("cinsinizi daxil edin (M or F): ")
// let genderLetter = "M" &&  "F" ? "Male" : "Female";
// console.log(gender);


// Task 1

let monthNum = prompt("Ayin nomresini daxil edin: ")
switch (monthNum) {
    case "1":
        console.log("Yanvar");
        break;
    case "2":
        console.log("Fevral");
        
        break;
    case "3":
        console.log("Mart");
        break;

    case "4":
        console.log("Aprel");
        break;

    case "5":
        console.log("May");
        break;

    case "6":
        console.log("Iyun");
        break;

    case "7":
        console.log("Iyul");
        break;

    case "8":
        console.log("Avqust");
        break;

    case "9":
        console.log("Sentyabr");
        break;

    case "10":
        console.log("Oktyabr");
        break;

    case "11":
        console.log("Noyabr");
        break;

    case "12":
        console.log("Dekabr");
        break;

    default:
        console.log("Bele ay nomresi yoxdur.");
        break;
}


// Task 2

let date = prompt("Tarixi YYYY.MM.DD kimi daxil edin:");

let dateParts = date.split('.');
let year = dateParts[0];
let month = dateParts[1];
let day = dateParts[2];
if ( +day < 32) {
    let monthNames = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
let monthName = monthNames[month - 1];
let result = `${day} ${monthName} ${year}-cu il`;
console.log(result);
}else{
    console.log("Yanlis tarix daxil edilib.");
    
}


