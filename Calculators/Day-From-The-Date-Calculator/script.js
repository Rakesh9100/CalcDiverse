var date_field = document.getElementById("day");
var result = document.getElementById("res");

/*Function Convert*/
function convert() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date((date_field.value).toString());
    let day = days[d.getDay()];
    result.value = day;
}

/*Function Reset*/
function reset() {
    date_field.value = "";
    result.value = "";
}
