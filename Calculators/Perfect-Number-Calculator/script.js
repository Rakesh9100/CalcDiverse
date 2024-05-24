const checkPerfect=()=>{
  let num=document.querySelector(".number").value;
  if(!isNaN(num)&& num.trim() !== "")
    {
      num = parseInt(num);
    
  let sum=0;
  let txt=document.querySelector(".text");
  for(let i=1;i<num;i++)
    {
      if(num%i==0)
        {
          sum=sum+i;
        }
    }
    
    if(sum==num)
      { txt.textContent="It is a Perfect Number!";
        
       
      }
      else
      {txt.textContent="Not a Perfect Number!";
      }
    }
    else
    {
      alert("Please enter a Number!");
    }

}
