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
        $('.popup').popup();
        starColorManagement();
    }

    if (document.querySelector('#pageKinesthesique')) {
    }

    if (document.querySelector('#pageLinguistique')) {
        transformPictoIntoImage();
    }

    if (document.querySelector('#pageMusicale')) {
        loadNumberOfNote();
    }

    if (document.querySelector('#pageNaturaliste')) {
        effectIconCloseRadio();
    }

    if (document.querySelector('#pageVisuoSpatiale')) {
        initTimerBlur();
    }

    if (document.querySelector('#pageResult')) {
        displayBrainResult();
    }
}

function initBrainCharacterAnimation() {
    if (document.querySelector('#pageInterpersonnelle')) {
        brainCharacterAnimationInterpersonnelle();
    }

    if (document.querySelector('#pageIntrapersonnelle')) {
    }

    if (document.querySelector('#pageKinesthesique')) {
        brainCharacterAnimationKinesthesique();
    }

    if (document.querySelector('#pageLinguistique')) {
        brainCharacterAnimationLinguistique();
    }

    if (document.querySelector('#pageMathematique')) {
        brainCharacterAnimationMathematique();
    }

    if (document.querySelector('#pageMusicale')) {
        brainCharacterAnimationMusicale();
    }

    if (document.querySelector('#pageNaturaliste')) {
        brainCharacterAnimationNaturaliste();
    }

    if (document.querySelector('#pageVisuoSpatiale')) {
        brainCharacterAnimationVisuoSpatiale();
    }

    if (document.querySelector('#pageResult')) {
        brainCharacterAnimationResult();
    }
}

function onOffAudioBackground() {
    let buttonOnOff = $('#audioBackgroundButton');
    if (buttonOnOff.children().hasClass("volume up")) {
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

function afficherModalHelp(className) {
    $('.mini.modal.'+className).modal('show');
}

function afficherModalDemo() {
    $('.mini.modal.demo').modal('show');
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
        $("<img width='75px' src='" + "images/linguistique_pictos/" + pictoImage + "' draggable='true' onclick='clickMovePicto(" + id + ")' ondragstart='dragStart(event)' data-id='" + id + "' id='" + id + "' alt='image picto'/>").insertAfter($(this));
        $(this).remove();
    });
}

function transformEmoticonIntoImage() {
    $('.popup').popup();
    $('.field img').click(function() {
        $('.field img').addClass('blackAndWhite');
        $(this).removeClass('blackAndWhite');
    });
}

function effectIconCloseRadio() {
    $('.fourImagesInOneBox img').click(function() {
        $('.fourImagesInOneBox label').find('i').remove();
        $('<i class="close icon massive icon"></i>').insertAfter(this);
    });
}

function playClick() {
    let audio = document.getElementById("audioClick");
    audio.play();
}

function playBack() {
    let audio = document.getElementById("audioBack");
    audio.play();
}

function playLink() {
    let audio = document.getElementById("audioLink");
    audio.play();
}

function playNext() {
    let audio = document.getElementById("audioNext");
    audio.play();
}
