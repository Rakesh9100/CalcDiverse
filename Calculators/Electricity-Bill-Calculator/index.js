function calculate() {
    // Get input values
    var country = document.getElementById("country").value;
    var appliance = document.getElementById("appliance").value;
    var power = parseFloat(document.getElementById("power").value);
    var unit = document.getElementById("unit").value;
    var hours = parseFloat(document.getElementById("hours").value);
    var cost = parseFloat(document.getElementById("cost").value);
    var currency = document.getElementById("currency").value;
    
    // Convert power to kilowatts if necessary
    if (unit == "watts") {
      power = power / 1000;
    }
    
    // Calculate electricity cost per day, month, and year
    var costPerDay = power * hours * cost;
    var costPerMonth = costPerDay * 30;
    var costPerYear = costPerDay * 365;
    
    // Display results
    document.getElementById("result-day").innerHTML = formatCurrency(costPerDay, currency);
    document.getElementById("result-month").innerHTML = formatCurrency(costPerMonth, currency);
    document.getElementById("result-year").innerHTML = formatCurrency(costPerYear, currency);
  }
  
  function formatCurrency(amount, currency) {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    });
    return formatter.format(amount);
  }