document.getElementById('cal1').addEventListener('click',
    function(){
        let rmax = Number(document.getElementById('inp1').value);
        let rmin = Number(document.getElementById('inp2').value);
        let a = (rmax+rmin)/2 ;
        let b = Math.sqrt(rmax*rmin);
        document.getElementById('res1').innerHTML+=a;
        document.getElementById('res2').innerHTML+=b;
        console.log(rmax);
        console.log(a);
        console.log(rmax+rmin);
        console.log(typeof(rmax));
    }
);
document.getElementById('b1').addEventListener('click',
    function(){
        window.location.reload();
    }
);
document.getElementById('b2').addEventListener('click',
    function(){
        window.location.reload();
    }
);
document.getElementById('b3').addEventListener('click',
    function(){
        window.location.reload();
    }
);
document.getElementById('cal2').addEventListener('click',
    function(){
        let a = Number(document.getElementById('inp3').value);
        let res =Math.sqrt(a*a*a)*0.999813;
        document.getElementById('res3').innerHTML+=res;
    }
);
document.getElementById('cal3').addEventListener('click',
    function(){
        let a = Number(document.getElementById('inp4').value);
        let b = Number(document.getElementById('inp5').value);
        let t = Number(document.getElementById('inp6').value);
        let res =Math.PI*a*b/t;
        document.getElementById('res4').innerHTML+=res;
    }
);

