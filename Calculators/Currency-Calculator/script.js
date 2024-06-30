// include API for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";
const currencyDetailsApi = "https://restcountries.com/v2/currency/";

// for selecting different controls
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrency = document.querySelector(".from");
var toCurrency = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var selectField2 = document.getElementById("selectField2");
var selectText2 = document.getElementById("selectText2");
var options = document.getElementsByClassName("options");
var options2 = document.getElementsByClassName("options2");
var list = document.getElementById("list");
var list2 = document.getElementById("list2");
selectField.onclick = function(){
    list.classList.toggle("hide");
}
selectField2.onclick = function(){
    list2.classList.toggle("hide");
}
for(option of options){
    option.onclick=function(){
        selectText.innerHTML=this.textContent;
    }
}
for(option of options2){
    option.onclick=function(){
        selectText2.innerHTML=this.textContent;
    }
}
var resultFrom;
var resultTo;
var searchValue;

// Event when currency is changed
fromCurrency.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
    fetchCurrencyDetails(resultFrom, 'from');
});

// Event when currency is changed
toCurrency.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
    fetchCurrencyDetails(resultTo, 'to');
});

search.addEventListener('input', updateValue);

// function for updating value
function updateValue(e) {
    searchValue = e.target.value;
}

// when user clicks, it calls function getresults
convert.addEventListener("click", getResults);

// function getresults
function getResults() {
    if (isNaN(searchValue) || searchValue === "") {
        alert("Please enter a valid number for conversion");
        return;
    }

    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}

// display results after conversion
function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    const convertedAmount = ((toRate / fromRate) * searchValue).toFixed(2);

    // Display the converted amount
    finalValue.innerHTML = convertedAmount;

    // Display the currency details (countries)
    fetchCurrencyDetails(resultFrom, 'from');
    fetchCurrencyDetails(resultTo, 'to');

    // Display the final amount container
    finalAmount.style.display = "block";
}

// Function to fetch currency details (countries)
function fetchCurrencyDetails(currencyCode, target) {
    fetch(`${currencyDetailsApi}${currencyCode}`)
        .then(response => response.json())
        .then(data => displayCurrencyDetails(data, target))
        .catch(error => console.error("Error fetching currency details:", error));
}

// Function to display currency details
function displayCurrencyDetails(data, target) {
    const countryList = data.map(country => country.name).join(', ');

    if (target === 'from') {
        // Display the country for the 'From' currency
        document.getElementById('fromCountryDetails').innerHTML = `Countries using ${resultFrom}: ${countryList}`;
    } else if (target === 'to') {
        // Display the country for the 'To' currency
        document.getElementById('toCountryDetails').innerHTML = `Countries using ${resultTo}: ${countryList}`;
    }
}

// when user click on reset button
function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
}
