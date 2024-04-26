function convert() {
    let magnitude = parseFloat(document.getElementById("Magnitude").value);
    let unit = document.getElementById("Unit").value;
  
    switch (unit) {
      case "c":
        var resultFahrenheit = (magnitude * 9) / 5 + 32;
        document.getElementById("result").textContent = magnitude + "°C is " + resultFahrenheit + "°F";
        break;
  
      case "f":
        var resultCelsius = ((magnitude - 32) * 5) / 9;
        document.getElementById("result").textContent = magnitude + "°F is " + resultCelsius + "°C";
        break;
  
      default:
        alert("Please write the unit as 'c' for Celsius or 'f' for Fahrenheit.");
        break;
    }
  }