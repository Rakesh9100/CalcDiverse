function calculate() {
    var billSubtotal = parseFloat(document.getElementById('billSubtotal').value) || 0;
    var tipPercentage = parseFloat(document.getElementById('tipPercentage').value) || 0;
    var numberOfPersons = parseInt(document.getElementById('numberOfPersons').value) || 1;

    var tipAmount = (billSubtotal * tipPercentage) / 100;
    var totalBill = billSubtotal + tipAmount;
    var billPerPerson = totalBill / numberOfPersons;

    document.getElementById('totalBill').innerText = '₹ ' + totalBill.toFixed(2);
    document.getElementById('billPerPerson').innerText = '₹ ' + billPerPerson.toFixed(2);
}
