var days = ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"];
var current_day = "Tuesday";
var current_hour = 10;
var current_minute = 30;
var current_second = 45;

function pick(current_day) {
  switch (current_day) {
    case "monday":
    case "Tuesday":
    case "wednesday":
    case "Friday":
    case "Saturday":
    case "Sunday":
      console.log("Today is: " + current_day);
      break;
    default:
      console.log("Invalid day");
      break;
  }
}

pick(current_day);
console.log("Current time is: " + current_hour + ":" + current_minute + ":" + current_second);