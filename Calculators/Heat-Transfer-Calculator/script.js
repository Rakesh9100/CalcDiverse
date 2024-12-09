const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    console.log("hi");
    e.preventDefault();
    calcHeat();
});

function calcHeat() {
    const k = document.getElementById("cond").value;
    const a = document.getElementById("area").value;
    const temp1 = document.getElementById("t1").value;
    const temp2 = document.getElementById("t2").value;
    const t = document.getElementById("time").value;
    const l = document.getElementById("length").value;
    if (
        k === "" ||
        a === "" ||
        temp1 === "" ||
        temp2 === "" ||
        t === "" ||
        l === ""
    ) {
        alert("You must enter all fields");
        return;
    }
    let h = (k * a * t * Math.abs(temp1 - temp2)) / l;
    document.getElementById("ans").value = h;
}