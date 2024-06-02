document.getElementById('leapYearForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const year = document.getElementById('year').value;
    const result = isLeapYear(year) ? `${year} is a leap year.` : `${year} is not a leap year.`;
    document.getElementById('result').textContent = result;
});

function isLeapYear(year) {
    year = parseInt(year);
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
