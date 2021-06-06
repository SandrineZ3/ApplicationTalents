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

    if (document.querySelector('#messageFlash')) {
        autoClosingMessageFlash();
    }

    if (document.querySelector('#pageIntrapersonnelle')) {
        console.log('pageIntrapersonnelle');
        starColorManagement();
    }

    if (document.querySelector('#pageLinguistique')) {
        console.log('pageLinguistique');
        transformPictoIntoImage();
    }

    if (document.querySelector('#pageInterpersonnelle')) {
        console.log('pageInterpersonnelle');
        transformEmoticonIntoImage();
    }

    if (document.querySelector('#pageMusicale')) {
        console.log('pageMusicale');
        loadNumberOfNote(0.5, '#musicale_form_solution');
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
        $('.message.auto-close').closest('.message').transition('fade');
    }, 10000 );
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
    $('.field label').each(function() {
        let text = $(this).text().trim();
        let urlImage = text.split('--')[0];
        let label = text.split('--')[1];
        $("<img width='75px' src='" + "images/emoticon/" + urlImage + "' class='popup' data-content='" + label + "' data-position='top left' alt='image emoticone'/>").insertAfter($(this));
        $(this).remove();
    });
    $('.popup').popup();
}

function tonesManager() {
    let numberOfRows = $('#holderContainer .row').length;
    let note = $('.note');
    let numberOfColumns = note.length / numberOfRows;
    let speed = 0.5;
    let idInputSolutionAdmin = '#musicale_form_solution';
    let idInputReponseUser = '#reponseRecuperee';
    let tones = [];

    for (let i = 0; i < numberOfRows; i++) {
        tones[i] = new Howl({
            src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/380275/' + i*3 + '.mp3',
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/380275/' + i*3 + '.ogg']
        });
    }

    playNote(numberOfColumns, tones);
    if (document.querySelector('#musicale_form_numberOfRows')) {
        adminControls(speed, idInputSolutionAdmin);
        userControls(note, idInputSolutionAdmin);
    }
    else {
        userControls(note, idInputReponseUser);
    }
}
