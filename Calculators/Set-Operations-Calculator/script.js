var set=document.querySelectorAll(".set input");
var setAnode=set[0];
var setBnode=set[1];
var ans=document.getElementById("ans");

function union(obj){
    obj.classList.add("clicked");
    let setAVal=setAnode.value;
    let setBVal=setBnode.value;
    let unionArr=[];
    let unionStr="";
    if(setAVal=='' && setBVal==''){
        ans.innerHTML="Please fill the sets";
    }
    else{
        setAVal=setAVal.replaceAll("{",'[').replaceAll("}",']').replaceAll("(",'[').replaceAll(")",']').trim();
        let setA=new Set(eval(setAVal));
        setBVal=setBVal.replaceAll("{",'[').replaceAll("}",']').replaceAll("(",'[').replaceAll(")",']').trim();
        let setB=new Set(eval(setBVal));
        setA=Array.from(setA);
        setB=Array.from(setB);
        
        unionArr=unionArr.concat(setA);
        unionStr=JSON.stringify(unionArr);
        setB.forEach(val => {
            if (Array.isArray(val)==true){
                if(unionStr.includes(JSON.stringify(val))==false){
                    unionArr.push(val);
                }
            }else{
                if(unionArr.includes(val)==false){
                    unionArr.push(val);
                }
            }
        });
        unionArr=JSON.stringify(unionArr);
        unionArr=unionArr.replaceAll("[","(").replaceAll("]",")")
        unionArr=unionArr.slice(1,unionArr.length-1);
        ans.innerHTML=`A U B is {${unionArr}}`;
    }
}

function inter(obj){
    obj.classList.add("clicked");
    let setAVal=setAnode.value;
    let setBVal=setBnode.value;
    let interArr=[];
    let Arr=[];
    if(setAVal=='' && setBVal==''){
        ans.innerHTML="Please fill the sets";
    }
    else{
        setAVal=setAVal.replaceAll("{",'[').replaceAll("}",']').replaceAll("(",'[').replaceAll(")",']').trim();
        let setA=new Set(eval(setAVal));
        setBVal=setBVal.replaceAll("{",'[').replaceAll("}",']').replaceAll("(",'[').replaceAll(")",']').trim();
        let setB=new Set(eval(setBVal));
        setA=Array.from(setA);
        setB=Array.from(setB);
        
        Arr=Arr.concat(setA);
        Arr=JSON.stringify(Arr);
        setB.forEach(val => {
            if (Array.isArray(val)==true){
                if(Arr.includes(JSON.stringify(val))==true){
                    interArr.push(val);
                }
            }else{
                if(setA.includes(val)==true){
                    interArr.push(val);
                }
            }
        });
        interArr=JSON.stringify(interArr);
        interArr=interArr.replaceAll("[","(").replaceAll("]",")")
        interArr=interArr.slice(1,interArr.length-1);
        ans.innerHTML=`A n B is {${interArr}}`;
    }
}