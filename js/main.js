var dayOfTheWeek = prompt("What day of the week is today?");
switch (dayOfTheWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        alert("Working day");
        break;
    case "Saturday":
    case "Sunday":
        alert("Weekend");
        break;
    default:
        alert("Can not define, please try another value");
}

// if (dayOfTheWeek == "Monday" ||
//     dayOfTheWeek == "Tusday" ||
//     dayOfTheWeek == "Wednesday" ||
//     dayOfTheWeek == "Thursday" ||
//     dayOfTheWeek == "Friday") {
//     alert("Working day");
// } else if (dayOfTheWeek == "Saturday" ||
//     dayOfTheWeek == "Sunday") {
//     alert("Weekend")
// } else {
//     alert("Can not define, please try another value");
// }