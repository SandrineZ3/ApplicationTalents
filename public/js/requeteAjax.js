/**
 * Génère une requête Ajax
 * @param {string} selectorFormulaire Sur quel formulaire voulez-vous activer la requête Ajax.
 * @param {string} selectorReponse Dans quel élément HTML souhaitez-vous que le bloc réponse s'affiche.
 * @param {boolean} modificationUrl (facultatif) Affiche la requête dans l'Url. Par default à false.
 */
function requeteAjaxPostv2(selectorFormulaire, selectorReponse, modificationUrl= false) {

    const Form = new FormData(document.querySelector(selectorFormulaire));
    const Params = new URLSearchParams();
    let reponseError = '' +
        '<div class="ui message-fixed compact error message auto-close manuel-close" id="messageFlash">' +
        '<i class="close icon" onClick="removeMessage()"></i>' +
        '<div class="header">' +
        'Réponse invalide' +
        '</div>' +
        '<p>Merci de choisir une réponse</p>' +
        '</div>';

    Form.forEach((value, key) => {
        if (value.trim()) {
            Params.append(key, value);
        }
        else {
            document.querySelector('header div.errorMessage').innerHTML = reponseError;
            init();
            throw 'Réponse invalide';
        }
    });

    const Url = new URL(window.location.href);

    fetch(Url.pathname + "?" + Params.toString() + "&ajax=1", {
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    }).then(response =>
        response.json()
    ).then(data => {

        if (data.content === 'error') {
            document.querySelector('header div.errorMessage').innerHTML = reponseError;
        }
        else {
            document.querySelector(selectorReponse).innerHTML = data.content;
        }
        init();

        if (modificationUrl) {
            history.pushState({}, null, Url.pathname + "?" + Params.toString());
        }
        else {
            history.pushState({}, null, Url.pathname);
        }

    }).catch(e => alert(e));

}
