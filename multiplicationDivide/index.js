function Multiply() {
let num1 =document.getElementById("FirstNumber").value;
let num2 =document.getElementById("SecondNumber").value;
var result =num1* num2;
document.getElementById("result").textContent = result ;
}
function Devide(e) {
    let num1 = document.getElementById("FirstNumber").value;
    let num2 = document.getElementById("SecondNumber").value;
    var result =num1 /num2;
    document.getElementById("result").textContent= result;
}