
function calculate() {
    const population = document.getElementById("population").value;
    const area = document.getElementById("area").value;
    const result = document.getElementById('result');

    result.innerHTML="The population density of the area "+area+" km with a population of "+population+" is "+population/area;
}

function reset() {
    document.getElementById('population').value = ''
    document.getElementById('area').value = ''
    const result = document.getElementById('result');
    result.innerHTML = '';
}