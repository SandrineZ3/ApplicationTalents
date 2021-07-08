let intervalTimer;

function initTimerBlur(wholeTime) {
    displayTimeLeft(wholeTime);
    timer(wholeTime);
}

function timer(seconds) {
    let wholeTime = seconds;
    const img = document.querySelector('#formEnigme img')
    let remainTime = Date.now() + (seconds * 1000);
    displayTimeLeft(seconds);

    clearInterval(intervalTimer);
    intervalTimer = setInterval(function() {
        let timeLeft = Math.round((remainTime - Date.now()) / 1000);
        if (timeLeft < 0) {
            clearInterval(intervalTimer);
            img.classList.add("blur-image");
        }
        displayTimeLeft(timeLeft, wholeTime);
    }, 1000);
}

function displayTimeLeft(timeLeft, wholeTime) {
    const displayOutput = document.querySelector('.display-remain-time')

    if (displayOutput) {
        if (timeLeft < 0) {
            timeLeft = 0;
        }
        displayOutput.textContent = `${timeLeft}`;
    }
    update(timeLeft, wholeTime);
}

function update(value, timePercent) {
    let progressBar = document.querySelector('.e-c-progress');
    let pointer = document.getElementById('e-pointer');
    let length = Math.PI * 2 * 100;

    if (progressBar && pointer) {
        progressBar.style.strokeDasharray = length;
        progressBar.style.strokeDashoffset = - length - length * value / (timePercent);
        pointer.style.transform = `rotate(${360 * value / (timePercent)}deg)`;
    }
}
