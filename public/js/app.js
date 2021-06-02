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
        starColorManagement();
    }

    if (document.querySelector('#pageLinguistique')) {
        transformPictoIntoImage();
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
        $("<img width='75px' src='" + racineUrlPicto + pictoImage + "'draggable='true' ondragstart='dragStart(event)' id='" + id + "' alt='image picto'/>").insertAfter($(this));
        $(this).remove();
    });
}
