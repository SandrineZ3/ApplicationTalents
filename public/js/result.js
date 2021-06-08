function displayBrainResult() {
    let vect = document.querySelectorAll('.st1');
    console.log(vect.length);
    let color = ["#D9C7ED", "#B3EDF8", "#E1DACA", "#BCE9D5", "#F6BDCE", "#FEEEB3", "#F9C29B", "#FF889A"]
    let i = 0;
    let index = 0;
    for (i; i < 5; i++) {
        vect[i].setAttribute("fill", color[index]);
        insertRandomCircle(vect[i], color[index]);
    }
    index++;
    for (i; i < 9; i++) {
        vect[i].setAttribute("fill", color[index]);
        insertRandomCircle(vect[i], color[index]);
    }
    index++;
    for (i; i < 17; i++) {
        vect[i].setAttribute("fill", color[index]);
        insertRandomCircle(vect[i], color[index]);
    }
    index++;
    for (i; i < 28; i++) {
        vect[i].setAttribute("fill", color[index]);
        insertRandomCircle(vect[i], color[index]);
    }
    index++;
    for (i; i < 32; i++) {
        vect[i].setAttribute("fill", color[index]);
        insertRandomCircle(vect[i], color[index]);
    }
    index++;
    for (i; i < 39; i++) {
        vect[i].setAttribute("fill", color[index]);
        insertRandomCircle(vect[i], color[index]);
    }
    index++;
    for (i; i < 42; i++) {
        vect[i].setAttribute("fill", color[index]);
        insertRandomCircle(vect[i], color[index]);
    }
    index++;
    for (i; i < vect.length; i++) {
        vect[i].setAttribute("fill", color[index]);
        insertRandomCircle(vect[i], color[index]);
    }
    index++;
}

function insertRandomCircle(initialCircle, color) {
    for (let i = 0; i < 5; i++) {
        let X = parseInt(initialCircle.getAttribute("cx")) + getRandomNumber(-50, 50);
        let Y = parseInt(initialCircle.getAttribute("cy")) + getRandomNumber(-50, 50);
        let newCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        newCircle.setAttributeNS(null, 'cx', X.toString());
        newCircle.setAttributeNS(null, 'cy', Y.toString());
        newCircle.setAttributeNS(null, 'r', getRandomNumber(5, 25).toString());
        newCircle.setAttributeNS(null, 'style', 'fill: ' + color + '; opacity: 0.8;');
        document.getElementById('brain_svg').prepend(newCircle);
    }
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
