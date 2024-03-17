function cubeRootCalc() {
    const numb = document.getElementById("numb").value;
    if (numb === "") {
        alert("Please enter a Number");
        return;
    }
    let cubeAns = (numb) ** (1 / 3);
    // cubeAns = Math.pow(numb,(1/3));
    let roundAns = cubeAns.toFixed(4);
    ansString = `${roundAns}`
    console.log(ansString.slice(-4))
    if (ansString.slice(-4) == parseInt("0000")) {
        roundAns = parseInt(roundAns)
    }
    const resultPara = document.querySelector(".res-stat");
    resultPara.innerHTML = `<h3>Cube Root of Number ${numb}: </h3><h2>${roundAns}</h2>`;
    document.getElementById("numb").value = "";
}