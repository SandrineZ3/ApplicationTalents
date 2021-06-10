function displayBrainResult() {
    let circle = document.querySelectorAll('.st1');
    let result = document.querySelector('#tableauResult');
    let tableauAttribute = result.getAttributeNames();
    tableauAttribute.splice(0 ,1);
    let color = ["#D9C7ED", "#B3EDF8", "#E1DACA", "#BCE9D5", "#F6BDCE", "#FEEEB3", "#F9C29B", "#FF889A"]

    let sommeResultat = 0;
    for (let i = 0; i < tableauAttribute.length; i++) {
        sommeResultat += parseInt(result.getAttribute(tableauAttribute[i]));
    }

    let j = 0;
    let k = 0;
    for (let i = 0; i < tableauAttribute.length; i++) {
        for (j; j < Math.round(((circle.length / sommeResultat) * result.getAttribute(tableauAttribute[i]))) + k; j++) {
            circle[j].setAttribute("fill", color[i]);
            insertRandomCircle(circle[j], color[i]);
        }
        k = j;
    }
    while (j < circle.length) {
        circle[j].setAttribute("fill", color[color.length-1]);
        insertRandomCircle(circle[j], color[color.length-1]);
        j++;
    }
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
