// include API for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";
const currencyDetailsApi = "https://restcountries.com/v2/currency/";
const flagBaseUrl = "https://flagsapi.com/";

// for selecting different controls
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrency = document.querySelector(".from");
var toCurrency = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var fromFlag = document.getElementById("fromFlag");
var toFlag = document.getElementById("toFlag");
var resultFrom;
var resultTo;
var searchValue;

// Event when currency is changed
fromCurrency.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
    fetchCurrencyDetails(resultFrom, 'from');
    displayFlag(resultFrom, fromFlag);
});

// Event when currency is changed
toCurrency.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
    fetchCurrencyDetails(resultTo, 'to');
    displayFlag(resultTo, toFlag);
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

// Map of currencies to country codes
const currencyToCountryCode = {
    USD: "us",
    AED: "ae",
    ARS: "ar",
    AUD: "au",
    BGN: "bg",
    BRL: "br",
    BSD: "bs",
    CAD: "ca",
    CHF: "ch",
    CLP: "cl",
    CNY: "cn",
    COP: "co",
    CZK: "cz",
    DKK: "dk",
    DOP: "do",
    EGP: "eg",
    EUR: "eu",
    FJD: "fj",
    GBP: "gb",
    GTQ: "gt",
    HKD: "hk",
    HRK: "hr",
    HUF: "hu",
    IDR: "id",
    ILS: "il",
    INR: "in",
    ISK: "is",
    JPY: "jp",
    KRW: "kr",
    KZT: "kz",
    MVR: "mv",
    MXN: "mx",
    MYR: "my",
    NOK: "no",
    NZD: "nz",
    PAB: "pa",
    PEN: "pe",
    PHP: "ph",
    PKR: "pk",
    PLN: "pl",
    PYG: "py",
    RON: "ro",
    RUB: "ru",
    SAR: "sa",
    SEK: "se",
    SGD: "sg",
    THB: "th",
    TRY: "tr",
    TWD: "tw",
    UAH: "ua",
    UYU: "uy",
    ZAR: "za"
};

// Function to get the country code from currency code
function getCountryCodeFromCurrency(currencyCode) {
    const countryCode = currencyToCountryCode[currencyCode];
    if (!countryCode) {
        console.error("No country code found for currency", currencyCode);
    }
    return countryCode;
}


// Function to display currency flags
function displayFlag(currencyCode, flagElement) {
    const countryCode = getCountryCodeFromCurrency(currencyCode);
    const capcountryCode = countryCode.toUpperCase()
    if (countryCode) {
        flagElement.src = `${flagBaseUrl}${capcountryCode}/flat/64.png`;
        flagElement.style.display = "inline";
    } else {
        flagElement.style.display = "none";
    }
}

// when user click on reset button
function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
}
