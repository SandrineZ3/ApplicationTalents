function init() {
    $('.ui.checkbox').checkbox();

    $('.sidebar-menu-toggler').on('click', function() {
        let target = $(this).data('target');
        $(target)
            .sidebar({
                dinPage: true,
                transition: 'overlay',
                mobileTransition: 'overlay'
            })
            .sidebar('toggle');
    });

    $('form').keypress(function(e) {
        if (e.which === 13) {
            return false;
        }
    });

    if (document.querySelector('#pageConnexion')) {
        let inputPassword = $('input[type=password]');
        inputPassword.parent().addClass('hiddenField');
        $('#iHavePasswordSession').on('change', function () {
            if ($(this).parent().hasClass('checked')) {
                inputPassword.parent().removeClass('hiddenField');
                inputPassword.val('');
            }
            else {
                inputPassword.parent().addClass('hiddenField');
                inputPassword.val('password');
            }
        });
    }

    if (document.querySelector('#messageFlash')) {
        autoClosingMessageFlash();
    }

    if (document.querySelector('#pageInterpersonnelle')) {
        transformEmoticonIntoImage();
    }

    if (document.querySelector('#pageIntrapersonnelle')) {
        starColorManagement();
    }

    if (document.querySelector('#pageLinguistique')) {
        transformPictoIntoImage();
    }

    if (document.querySelector('#pageMusicale')) {
        loadNumberOfNote();
    }

    if (document.querySelector('#pageResult')) {
        displayBrainResult();
    }
}

function onOffAudioBackground() {
    let buttonOnOff = $('#audioBackgroundButton');
    if (audioBackground.playing()) {
        audioBackground.pause();
        buttonOnOff.children().removeClass("volume up");
        buttonOnOff.children().addClass("volume off");
    }
    else {
        audioBackground.play();
        buttonOnOff.children().removeClass("volume off");
        buttonOnOff.children().addClass("volume up");
    }
}

function removeMessage() {
    $('.message.manuel-close').remove();
}

function afficherModalDelete() {
    $('.mini.modal.trash').modal('show');
}

// Liste des fonctions appelées automatiquement par init() si besoin
function autoClosingMessageFlash() {
    setTimeout(function() {
        // $('.message.auto-close').closest('.message').transition('fade');
        removeMessage();
    }, 5000 );
}

function starColorManagement() {
    $('label').click(function() {
        $(this).parent().find("label").css({'color': 'lightgrey'});
        $(this).css({'color': 'orange'});
        $(this).nextAll().css({'color': 'orange'});
    });
}

function transformPictoIntoImage() {
    $('.picto').each(function () {
        let urlPicto = $(this).data('src');
        let pictoImage = urlPicto.trim();
        let id = $(this).data('id');
        $("<img width='75px' src='" + "images/linguistique_pictos/" + pictoImage + "' draggable='true' ondragstart='dragStart(event)' id='" + id + "' alt='image picto'/>").insertAfter($(this));
        $(this).remove();
    });
}

function transformEmoticonIntoImage() {
    $('.popup').popup();
    $('img').click(function() {
        $('img').addClass('blackAndWhite');
        $(this).removeClass('blackAndWhite');
    });
}
