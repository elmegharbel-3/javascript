let day = "     wednesday   ";
day = day.trim().toLowerCase()
day = day.charAt(0).toUpperCase() + day.slice(1)

switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No appointments available");
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM to 5:00 PM");
        break
    case "Tuesday":
        console.log("From 10:00 AM to 6:00 PM");
        break;
    case "Wednesday":
        console.log("From 10:00 AM to 7:00 PM");
        break;
    default:
        console.log("Invalid day");
}
