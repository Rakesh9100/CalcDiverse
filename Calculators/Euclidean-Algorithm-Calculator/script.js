const form=document.querySelector(".form-container")
const submitBtn=document.querySelector(".submit")
form.addEventListener("submit",calculate);

function calculate(e){ 
    e.preventDefault();
    let a=document.querySelector(".num1").value;
    let b=document.querySelector(".num2").value;

    let res=gcd(a,b);
    let res2=lcm(a,b);

    const gcdFinal=document.querySelector(".gcd-final");
    const lcmFinal=document.querySelector(".lcm-final");

    const gcdVal=document.querySelector(".gcd");
    const lcmVal=document.querySelector(".lcm");
    const num1=document.querySelector(".n1");
    const num2=document.querySelector(".n2");
    const num3=document.querySelector(".n3");
    const num4=document.querySelector(".n4");

    gcdVal.innerText=res;
    lcmVal.innerText=res2;

    num1.innerText=a;
    num2.innerText=b;
    num3.innerText=a;
    num4.innerText=b;

    gcdFinal.classList.add("show");
    lcmFinal.classList.add("show");
}
function gcd(a,b){
    var r;
    while((a%b)>0){
        r=a%b
        a=b
        b=r
    }
    return b
}
function lcm(a,b){
    return a*b/gcd(a,b);
}