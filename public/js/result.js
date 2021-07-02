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

    result.remove();
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

function generatePDF() {
    const element = document.getElementById('htmlToPdf');
    let options = {
        margin: 1,
        filename: 'mes-resultats.pdf',
        image: {type: 'png'},
        html2canvas: {scale: 1}, // Scaling de TOUT l'élement à imprimer
        jsPDF: {unit: 'cm', format: 'a4', orientation: 'portrait'}
    };
    html2pdf().set(options).from(element).save();
}

(function() {
    let popupCenter = function(url, title, width, height){
        let popupWidth = width || 640;
        let popupHeight = height || 320;
        let windowLeft = window.screenLeft || window.screenX;
        let windowTop = window.screenTop || window.screenY;
        let windowWidth = window.innerWidth || document.documentElement.clientWidth;
        let windowHeight = window.innerHeight || document.documentElement.clientHeight;
        let popupLeft = windowLeft + windowWidth / 2 - popupWidth / 2 ;
        let popupTop = windowTop + windowHeight / 2 - popupHeight / 2;
        let popup = window.open(url, title, 'scrollbars=no, width=' + popupWidth + ', height=' + popupHeight + ', top=' + popupTop + ', left=' + popupLeft);
        popup.focus();
        return true;
    };

    document.querySelector('.ui.circular.twitter.icon.button').addEventListener('click', function(e){
        e.preventDefault();
        let url = this.getAttribute('data-url');
        let shareUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.title) +
            "&url=" + encodeURIComponent(url);
        popupCenter(shareUrl, "Partager sur Twitter");
    });

    document.querySelector('.ui.circular.facebook.icon.button').addEventListener('click', function(e){
        e.preventDefault();
        let url = this.getAttribute('data-url');
        let shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
        popupCenter(shareUrl, "Partager sur facebook");
    });

    document.querySelector('.ui.circular.linkedin.icon.button').addEventListener('click', function(e){
        e.preventDefault();
        let url = this.getAttribute('data-url');
        let shareUrl = "https://www.linkedin.com/shareArticle?url=" + encodeURIComponent(url);
        popupCenter(shareUrl, "Partager sur Linkedin");
    });
})();
