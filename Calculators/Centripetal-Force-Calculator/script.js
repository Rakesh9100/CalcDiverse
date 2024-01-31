function show_result(){
    let m = document.querySelector("#m").value;
    let v = document.querySelector("#v").value;
    let r = document.querySelector("#r").value;
   
    let acc =  parseFloat(v) * parseFloat(v) /parseFloat(r);
   
    document.querySelector(".acc").innerHTML = acc;
   
    let f =  parseFloat(m) * parseFloat(v) * parseFloat(v) / parseFloat(r);
   
    document.querySelector(".f").innerHTML = f;
   }
   
   