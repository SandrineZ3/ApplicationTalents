function displayBrainResult() {
    let circle = document.querySelectorAll('.st1');
    let result = document.querySelector('#tableauResult');
    let tableauAttribute = result.getAttributeNames();
    tableauAttribute.splice(0, 1);
    let color = ["#FFED78", "#B3A1EC", "#FFBD6D", "#7593D4", "#E86E6E", "#95E7E4", "#94DA7E", "#C3AB87"]

    let sommeResultat = 0;
    for (let i = 0; i < tableauAttribute.length; i++) {
        sommeResultat += parseInt(result.getAttribute(tableauAttribute[i]));
    }

    let j = 0;
    let k = 0;
    for (let i = 0; i < tableauAttribute.length; i++) {
        for (j; j < Math.round(((circle.length / sommeResultat) * result.getAttribute(tableauAttribute[i]))) + k; j++) {
            if (circle[j]) {
                circle[j].setAttribute("fill", color[i]);
                insertRandomCircle(circle[j], color[i]);
            }
        }
        k = j;
    }
    while (j < circle.length) {
        circle[j].setAttribute("fill", color[color.length - 1]);
        insertRandomCircle(circle[j], color[color.length - 1]);
        j++;
    }

    result.remove();
    $("#brainClone").prepend($("#brainSVG").clone());
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

function generatePDF(button) {
    const element = document.getElementById('brainClone').parentNode;
    const body = document.querySelector('body');

    button.classList.add('loading');
    body.style.overflow = 'hidden';
    element.style.display = '';
    domtoimage.toPng(element).then(function (dataUrl) {
        let img = new Image();
        img.src = dataUrl;
        element.style.display = 'none';
        body.style.overflow = '';

        let options = {
            margin: 1,
            filename: 'mes-resultats.pdf',
            html2canvas: {scale: 1},
            jsPDF: {unit: 'cm', format: 'a4', orientation: 'landscape'}
        };
        html2pdf().set(options).from(img).save();
        button.classList.remove('loading');

    }).catch(e => console.error('oops, something went wrong to generate PDF!', e));
}

function saveImageBrainArchives() {
    const element = document.getElementById('brainClone').parentNode;
    const body = document.querySelector('body');

    body.style.overflow = 'hidden';
    element.style.display = '';

    return domtoimage.toPng(element).then(function (dataUrl) {
        let img = new Image();
        img.src = dataUrl;
        element.style.display = 'none';
        body.style.overflow = '';

        const Url = new URL(window.location.href);

        return fetch(Url.pathname + "?" + "ajax=1", {
            method: 'POST',
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            body: dataUrl,
        }).then(response =>
            response.json()
        ).then(data => {
            document.querySelectorAll('#buttonShareSocialNetwork button').forEach((element)=>
                element.setAttribute("data-url", 'http://www.rdvnomade.fr/result/' + data.uniqueNameImage)
            )
            history.pushState({}, null, Url.pathname);
        }).catch(e => console.error('oops, something went wrong to AjaxRequest!', e));

    }).catch(e => console.error('oops, something went wrong to generate SocialNetworks Page!', e));
}

async function shareSocialNetworksFacebook(button) {
    button.classList.add('loading');
    if (button.getAttribute('data-url') === '#') {
        await saveImageBrainArchives();
    }
    let url = button.getAttribute('data-url');
    let shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
    socialNetworksPopupCenter(shareUrl, "Partager sur facebook");
    button.classList.remove('loading');
}

async function shareSocialNetworksTwitter(button) {
    button.classList.add('loading');
    if (button.getAttribute('data-url') === '#') {
        await saveImageBrainArchives();
    }
    let url = button.getAttribute('data-url');
    let shareUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.title) +
        "&url=" + encodeURIComponent(url);
    socialNetworksPopupCenter(shareUrl, "Partager sur Twitter");
    button.classList.remove('loading');
}

async function shareSocialNetworksLinkedin(button) {
    button.classList.add('loading');
    if (button.getAttribute('data-url') === '#') {
        await saveImageBrainArchives();
    }
    let url = button.getAttribute('data-url');
    let shareUrl = "https://www.linkedin.com/shareArticle?url=" + encodeURIComponent(url);
    socialNetworksPopupCenter(shareUrl, "Partager sur Linkedin");
    button.classList.remove('loading');
}

function socialNetworksPopupCenter(url, title, width, height) {
    let popupWidth = width || 640;
    let popupHeight = height || 320;
    let windowLeft = window.screenLeft || window.screenX;
    let windowTop = window.screenTop || window.screenY;
    let windowWidth = window.innerWidth || document.documentElement.clientWidth;
    let windowHeight = window.innerHeight || document.documentElement.clientHeight;
    let popupLeft = windowLeft + windowWidth / 2 - popupWidth / 2;
    let popupTop = windowTop + windowHeight / 2 - popupHeight / 2;
    let popup = window.open(url, title, 'scrollbars=yes, width=' + popupWidth + ', height=' + popupHeight + ', top=' + popupTop + ', left=' + popupLeft);
    popup.focus();
    return true;
}
