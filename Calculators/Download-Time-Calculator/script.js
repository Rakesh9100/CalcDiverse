function MakeArray(n) {

    this.length = n;

    for (var i = 1; i <= n; i++) {

        this[i] = 0
    }

    return this

}

speedVar = new MakeArray(11);

speedVar[1] = "1.1719"
speedVar[2] = "1.7578"
speedVar[3] = "3.5156"
speedVar[4] = "6.8359"
speedVar[5] = "7.8125"
speedVar[6] = "16.6250"
speedVar[7] = "187.9883"
speedVar[8] = "1220.7031"
speedVar[9] = "3295.8984"
speedVar[10] = "5493.1641"
speedVar[11] = "18920.8984"

function compute(form, mult) {

    for (i = 1; i < 12; i++) {

        if (form.size.value == null || form.size.value.length == 0) {

            form.size.value = 0;
        }

        if (form[i + "hour"].value == null || form[i + "hour"].value.length == 0) {

            form[i + "hour"].value = 0;
        }

        if (form[i + "minute"].value == null || form[i + "minute"].value.length == 0) {

            form[i + "minute"].value = 0;
        }

        if (form[i + "second"].value == null || form[i + "second"].value.length == 0) {

            form[i + "second"].value = 0;
        }

        if (mult != 0 && form.size.value != 0) {

            with (Math) {

                var speed = speedVar[i];

                var TotalTime = ((form.size.value * mult) / speed);

                var TotalHours = floor((TotalTime / 3600));

                var TotalHoursMod = (TotalTime % 3600);

                var TotalMin = floor(TotalHoursMod / 60);

                var TotalMinMod = (TotalHoursMod % 60);

                var TotalSec = floor(TotalMinMod);

                form[i + "hour"].value = TotalHours;

                form[i + "minute"].value = TotalMin;

                form[i + "second"].value = TotalSec;

            }

        }

    }

    return;

}