document.getElementById("convert-form").onsubmit = function (event) {
    event.preventDefault();
    let amount = Number(document.getElementById("amount").value);
    var per = document.getElementById("period").value;

    if (amount) {
        var currentDate = new Date();

        switch (per) {
            case "minutes-ago-from-now":
                currentDate.setMinutes(currentDate.getMinutes() - amount);
                var headingText = `What Time Was It ${amount} Minutes Ago From Now?`;
                break;
            case "hours-ago-from-now":
                currentDate.setHours(currentDate.getHours() - amount);
                var headingText = `What Time Was It ${amount} Hour Ago From Now?`;
                break;
            case "days-ago-from-today":
                currentDate.setDate(currentDate.getDate() - amount);
                var headingText = `What Was The Date ${amount} Days Ago From Today?`;
                break;
            case "weeks-ago-from-today":
                currentDate.setDate(currentDate.getDate() - amount * 7);
                var headingText = `What Was The Date ${amount} Weeks Ago From Today?`;
                break;
            case "months-ago-from-today":
                currentDate.setMonth(currentDate.getMonth() - amount);
                var headingText = `What Was The Date ${amount} Months Ago From Today?`;
                break;
            case "years-ago-from-today":
                currentDate.setFullYear(currentDate.getFullYear() - amount);
                var headingText = `What Was The Date ${amount} Years Ago From Today?`;
                break;
            case "minutes-from-now":
                currentDate.setMinutes(currentDate.getMinutes() + amount);
                var headingText = `What Time Will It Be ${amount} Minutes From Now?`;
                break;
            case "hours-from-now":
                currentDate.setHours(currentDate.getHours() + amount);
                var headingText = `What Time Will It Be ${amount} Hour From Now?`;
                break;
            case "days-from-today":
                currentDate.setDate(currentDate.getDate() + amount);
                var headingText = `What Will Be The Date ${amount} Days From Today?`;
                break;
            case "weeks-from-today":
                currentDate.setDate(currentDate.getDate() + amount * 7);
                var headingText = `What Will Be The Date ${amount} Weeks From Today?`;
                break;
            case "months-from-today":
                currentDate.setMonth(currentDate.getMonth() + amount);
                var headingText = `What Will Be The Date ${amount} Months From Today?`;
                break;
            case "years-from-today":
                currentDate.setFullYear(currentDate.getFullYear() + amount);

                var headingText = `What Will Be The Date ${amount} Years From Today?`;
                break;
            default:
                break;
        }

        var calculatedTimeDiv = document.getElementById("calculated-time");
        var options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
        };
        calculatedTimeDiv.innerHTML = `
            <div id="time">
                ${currentDate.toLocaleString("en-US", options).split(" at ")[1]
            }    
            </div>
            <div id="date">
                ${currentDate.toLocaleString("en-US", options).split(" at ")[0]
            }    
            </div>
        `;

        document.querySelector(".calculated-heading").innerHTML = headingText;
    }
};
