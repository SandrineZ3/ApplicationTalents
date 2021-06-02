
/**
 * Génère une requête Ajax
 * @param {string} selectorFormulaire Sur quel formulaire voulez-vous activer la requête Ajax.
 * @param {string} selectorElementAction Sur quel élément HTML souhaitez-vous placer le déclenchement de la requête Ajax.
 * @param {string} typeAction Type d'action mis en place sur le selectorElementAction (exemple : "click", "change", etc...).
 * @param {string} selectorReponse Dans quel élément HTML souhaitez-vous que le bloc réponse s'affiche.
 * @param {boolean} modificationUrl (facultatif) Affiche la requête dans l'Url. Par default à false.
 */
function requeteAjaxPost(selectorFormulaire, selectorElementAction, typeAction, selectorReponse, modificationUrl= false) {

    document.querySelector(selectorElementAction).addEventListener(typeAction, (event) => {

        event.preventDefault();

        const Form = new FormData(document.querySelector(selectorFormulaire));
        const Params = new URLSearchParams();

        Form.forEach((value, key) => {
            if (value.trim()) {
                Params.append(key, value);
            }
            else {
                throw 'Les champs sont obligatoires';
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

            const contentPage = document.querySelector(selectorReponse);
            contentPage.innerHTML = data.content;

            if (modificationUrl) {
                history.pushState({}, null, Url.pathname + "?" + Params.toString());
            }
            else {
                history.pushState({}, null, Url.pathname);
            }

        }).catch(e => alert(e));

    });

}


/**
 * Génère une requête Ajax
 * @param {string} selectorElementAction Sur quel élément HTML souhaitez-vous placer le déclenchement de la requête Ajax.
 * @param {string} typeAction Type d'action mis en place sur le selectorElementAction (exemple : "click", "change", etc...).
 * @param {string} selectorReponse Dans quel élément HTML souhaitez-vous que le bloc réponse s'affiche.
 * @param {boolean} modificationUrl (facultatif) Affiche la requête dans l'Url. Par default à false.
 */
function requeteAjaxGet(selectorElementAction, typeAction, selectorReponse, modificationUrl= false) {

    document.querySelector(selectorElementAction).addEventListener(typeAction, (event) => {

        event.preventDefault();

        const Params = new URLSearchParams();
        Params.append(document.querySelector(selectorElementAction).name, document.querySelector(selectorElementAction).value);

        const Url = new URL(window.location.href);

        fetch(Url.pathname + "?" + Params.toString() + "&ajax=1", {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then(response =>
            response.json()
        ).then(data => {

            const contentPage = document.querySelector(selectorReponse);
            contentPage.innerHTML = data.content;

            if (modificationUrl) {
                history.pushState({}, null, Url.pathname + "?" + Params.toString());
            }
            else {
                history.pushState({}, null, Url.pathname);
            }

        }).catch(e => alert(e));

    });

}


/**
 * Génère une requête Ajax
 * @param {string} selectorFormulaire Sur quel formulaire voulez-vous activer la requête Ajax.
 * @param {string} selectorReponse Dans quel élément HTML souhaitez-vous que le bloc réponse s'affiche.
 * @param {boolean} modificationUrl (facultatif) Affiche la requête dans l'Url. Par default à false.
 */
function requeteAjaxPostv2(selectorFormulaire, selectorReponse, modificationUrl= false) {

    const Form = new FormData(document.querySelector(selectorFormulaire));
    const Params = new URLSearchParams();

    Form.forEach((value, key) => {
        if (value.trim()) {
            Params.append(key, value);
        }
        else {
            throw 'Les champs sont obligatoires';
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

        const contentPage = document.querySelector(selectorReponse);
        contentPage.innerHTML = data.content;
        init();

        if (modificationUrl) {
            history.pushState({}, null, Url.pathname + "?" + Params.toString());
        }
        else {
            history.pushState({}, null, Url.pathname);
        }

    }).catch(e => alert(e));

}
