// This Function is used to take realtime date and time from system.
function updatetill(){
    const currentDatetime = new Date();
    const year = currentDatetime.getFullYear();
    const month = String(currentDatetime.getMonth() + 1).padStart(2, '0');
    const day = String(currentDatetime.getDate()).padStart(2, '0');
    const hours = String(currentDatetime.getHours()).padStart(2, '0');
    const minutes = String(currentDatetime.getMinutes()).padStart(2, '0');
    const formattedDatetime = `${year}-${month}-${day}T${hours}:${minutes}`;

    document.getElementById("ip2").value = formattedDatetime;
}

//When the webpage reloads , the current time get updated automatically
window.onload = function () {
    updatetill();
};

//This funtion is used to calculate actual age using given inputs
function calculateage(){
    const userinput2 = document.getElementById("ip2").value;
    const currentDatetime = new Date(userinput2);
    const year = currentDatetime.getFullYear();
    const month = currentDatetime.getMonth() + 1;
    const userinput = document.getElementById("ip1").value;

    //here we check if user don't give any input ,  it will not work further anymmore.
    if (userinput === '') {
        return;
    }


    //Getting data that user submitted to it
    const userip = new Date(userinput);
    const yearip = userip.getFullYear();
    const monthip = userip.getMonth() + 1;
    const fyear = year - yearip;
    const fmonth = month - monthip;
    const fmonth1 = 12*fyear + fmonth;


    document.getElementById("op1").innerHTML = "Age = " + fyear + " Years " + fmonth + " Months";
    document.getElementById("op2").innerHTML = "~ " + fmonth1 + " Months"


    var timeDifference = Math.abs(currentDatetime - userip);

    //If user give data/time of future , it will  show 0 in all fields.
    if (currentDatetime < userip) {
        timeDifference=0;
        document.getElementById("op1").innerHTML = "Age = 0 Years 0 Months";
        document.getElementById("op2").innerHTML = "- 0 Months"
        document.getElementById("op3").innerHTML = "- 0 Days";
        document.getElementById("op7").innerHTML = "~ 0 Weeks";
        document.getElementById("op4").innerHTML = "- 0 Hours";
        document.getElementById("op5").innerHTML = "- 0 Minutes";
        document.getElementById("op6").innerHTML = "- 0 Seconds";
        document.getElementById("photo").src = "error.svg";
        return;
    }

    const fday = Math.floor(timeDifference/(1000*60*60*24))

    document.getElementById("op3").innerHTML = "- " + fday + " Days"

    const fweeks = (fday / 7).toFixed(1);

    document.getElementById("op7").innerHTML = "~ " + fweeks + " Weeks"

    const fhours = Math.floor(timeDifference/(1000*60*60))

    document.getElementById("op4").innerHTML = "- " + fhours + " Hours"

    const fminute = Math.floor(timeDifference/(1000*60))

    document.getElementById("op5").innerHTML = "- " + fminute + " Minutes"

    const fsecond = Math.floor(timeDifference/(1000))

    document.getElementById("op6").innerHTML = "- " + fsecond + " Seconds"


    // Here we just check for age group so that we can show images according to it.
    if(fyear<5 && fyear >=0)
    {
        document.getElementById("photo").src = "child1.svg";
    }
    if(fyear<10 && fyear >=5)
    {
        document.getElementById("photo").src = "child2.svg";
    }
    if(fyear<15 && fyear >=10)
    {
        document.getElementById("photo").src = "teen1.svg";
    }
    if(fyear<20 && fyear >=15)
    {
        document.getElementById("photo").src = "teen2.svg";
    }
    if(fyear<25 && fyear >=20)
    {
        document.getElementById("photo").src = "20to25.svg";
    }
    if(fyear<30 && fyear >=25)
    {
        document.getElementById("photo").src = "25to30.svg";
    }
    if(fyear<40 && fyear >=30)
    {
        document.getElementById("photo").src = "30to40.svg";
    }
    if(fyear<50 && fyear >=40)
    {
        document.getElementById("photo").src = "40to50.svg";
    }
    if(fyear<=100 && fyear >=50)
    {
        document.getElementById("photo").src = "50plus.svg";
    }
    if(fyear >=100)
    {
        document.getElementById("photo").src = "god.svg";
    }
}