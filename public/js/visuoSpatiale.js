let wholeTime = 4;

function initTimerBlur() {
    displayTimeLeft(wholeTime);
    timer(wholeTime);
}

function timer(seconds) {
    let remainTime = Date.now() + (seconds * 1000);
    displayTimeLeft(seconds);

    let intervalTimer = setInterval(function() {
        let timeLeft = Math.round((remainTime - Date.now()) / 1000);
        if (timeLeft < 0) {
            clearInterval(intervalTimer);
            blurImage();
            return;
        }
        displayTimeLeft(timeLeft);
    }, 1000);
}

function displayTimeLeft(timeLeft) {
    const displayOutput = document.querySelector('.display-remain-time')

    displayOutput.textContent = `${timeLeft < 10 ? '0' : ''}${timeLeft}s`;
    update(timeLeft, wholeTime);
}

function update(value, timePercent) {
    let progressBar = document.querySelector('.e-c-progress');
    let pointer = document.getElementById('e-pointer');
    let length = Math.PI * 2 * 100;

    progressBar.style.strokeDasharray = length;
    progressBar.style.strokeDashoffset = - length - length * value / (timePercent);
    pointer.style.transform = `rotate(${360 * value / (timePercent)}deg)`;
}

function blurImage() {
    const image = document.querySelector('#formEnigme img');
    image.remove();
}
