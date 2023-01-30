window.onload = function () {
    var seconds = 00;
    var tens = 00;
    var editTens = document.getElementById('tens');
    var editSeconds = document.getElementById('seconds');
    var startBtn = document.getElementById('start');
    var stopBtn = document.getElementById('stop');
    var resetBtn = document.getElementById('reset');
    var Interval;

    startBtn.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 19);
    }

    stopBtn.onclick = function () {
        clearInterval(Interval);
    }

    resetBtn.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        editSeconds.innerHTML = seconds;
        editTens.innerHTML = tens;
    }


    function startTimer() {
        tens++;

        if (tens <= 9) {
            editTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            editTens.innerHTML = tens;
        }


        if (tens > 99) {
            console.log('seconds');
            seconds++;
            editSeconds.innerHTML = "0" + seconds;
            tens = 0;
            editTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            editSeconds.innerHTML = seconds;
        }
    }
}