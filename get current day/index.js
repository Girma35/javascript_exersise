const d1 = new Date();
let day =String(d1.getDate()).padStart(2,"0");
let month = String(d1.getMonth()).padStart(2,+1);
let year =d1.getFullYear();
let date_gb = day+"-"+month+"-"+year;
let date_us = month+"-"+day+"-"+year;
console.log(date_us);
console.log(date_gb);