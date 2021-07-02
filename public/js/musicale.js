let speed = 0.5;
let idInputSolutionAdmin = '#musicale_form_solution';
let idInputReponseUser = '#reponseUser';

function loadNumberOfNote() {
    let holderContainerDiv = $('#holderContainer');
    let numberOfColumns = holderContainerDiv.attr('data-col');

    if (!document.getElementById('styleMusicale')) {
        $('body').prepend('<style id="styleMusicale"></style>');
    }

    changeNumberOfNote(numberOfColumns);

    if (document.querySelector(idInputSolutionAdmin)) {
        adminControls();
        userControls(idInputSolutionAdmin);
        if ($(idInputSolutionAdmin).val()) {
            let noteCode = $(idInputSolutionAdmin).val();
            importMelody(noteCode, idInputSolutionAdmin);
        }
    }
    else {
        userControls(idInputReponseUser);
    }
}

function changeNumberOfNote(numberOfColumns) {
    let holderContainerDiv = $("#holderContainer");
    holderContainerDiv.children().remove();
    holderContainerDiv.append('<div class="row"></div>');
    let notesOnTheRow = '';
    for (let i = 0; i < numberOfColumns; i++) {
        notesOnTheRow += '<div class="holder"><div class="note"><div class="ripple"></div></div></div>';
    }
    $('#holderContainer .row').last().append(notesOnTheRow);

    let styleBalise = $('style');
    styleBalise.empty();
    let property1 = ".holder {" +
        "width: " + ((100 / numberOfColumns) - 0.5) + "%;" +
        "}";
    let property2 = ".holderContainer.play .holder {" +
        "   animation: line " + numberOfColumns * speed + "s linear infinite;" +
        "}";
    let property3 = "";
    for (let h = 0; h < numberOfColumns; h++) {
        property3 += ".holderContainer.play .holder:nth-child(" + numberOfColumns + "n+" + (h+1) + ") {" +
            "animation-delay: " + h * speed + "s;" +
            "}";
    }
    let property4 = "@keyframes line {" +
        "0% {" +
        "background: #F36E6B;" +
        "border: solid 2px #F36E6B;" +
        "box-shadow: 0 0 5px #F36E6B;" +
        "}" +
        100/numberOfColumns+"% {" +
        "background: transparent;" +
        "border: solid 2px transparent;" +
        "box-shadow: none;" +
        "}";
    styleBalise.append(property1 + property2 + property3 + property4);

    tonesManager();
}

function tonesManager() {
    let tones = [];

    for (let i = 0; i < 6; i++) {
        tones[i] = new Howl({
            src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/380275/' + i*3 + '.mp3',
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/380275/' + i*3 + '.ogg']
        });
    }

    playNote(tones);
}

function playNote(tones) {
    $('#holderContainer .holder').off();
    $('#holderContainer .holder').
    on('webkitAnimationStart mozAnimationStart animationstart webkitAnimationIteration mozAnimationIteration animationiteration',
        function () {
            if ($(this).hasClass('active') && !$('#holderContainer').hasClass('mute')) {
                tones[$(this).attr('data-note')].play();

                $(this).find('.ripple').addClass('rippleAnim').delay(500).queue(function () {
                    $(this).removeClass('rippleAnim').dequeue();
                });
            }
        });
    $('.touchPad').off();
    $('.touchPad').on('click', function () {
        tones[$(this).attr('data-note')].play();
        $(this).find('.ripple').addClass('rippleAnim').delay(500).queue(function () {
            $(this).removeClass('rippleAnim').dequeue();
        });
    });
}

function userControls(idInput) {
    $('.ui.bottom.attached.label').off();
    $('.ui.bottom.attached.label').on('click', function () {
        let soundNumber = $(this).parent().attr('data-note');
        let boolean = true;
        let iconCloseDiv = '<i class="close icon"></i>';

        $('.note').each(function() {
            if (!$(this).hasClass('active') && boolean) {
                $(this).parent().attr('data-note', soundNumber);
                $(this).parent().addClass("active");
                $(this).addClass("active");
                $(this).addClass('color' + soundNumber);
                $(this).append(iconCloseDiv);
                boolean = false;
            }
        });
        exportMelody(idInput);
        closeIcon(idInput);
    });

    let playButton = $('#play');
    playButton.off();
    playButton.on('click', function () {
        $('#holderContainer').toggleClass('play');
        if (playButton.find('i').hasClass('play')) {
            playButton.find('i').addClass('stop');
            playButton.find('i').removeClass('play');
        }
        else {
            playButton.find('i').addClass('play');
            playButton.find('i').removeClass('stop');
        }
    });

    if (document.querySelector('#lecture')) {
        let lectureButton = $('#lecture');
        let solution = $('#reponseUser').val();
        let listeningNumber = lectureButton.find('div').text();
        $('#reponseUser').val('');
        let splitCode = solution.split(';');
        splitCode.splice(-1,1) // supprime le dernier élément du tableau : ""
        let tonesX = [];
        for (let i = 0; i < 6; i++) {
            tonesX[i] = new Howl({
                src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/380275/' + i*3 + '.mp3',
                    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/380275/' + i*3 + '.ogg']
            });
        }
        lectureButton.off();
        lectureButton.on('click', function () {
            if (listeningNumber > 0 ) {
                let i = 0;
                let myInterval = setInterval(function() {
                    tonesX[splitCode[i]].play();
                    i++;
                    if (i >= splitCode.length) {
                        clearInterval(myInterval);
                    }
                }, 500 );
                listeningNumber--;
                lectureButton.find('div').text(listeningNumber);
            }
        });
    }
}

function closeIcon(idInput) {
    $('.close.icon').off();
    $('.close.icon').on('click', function () {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            $(this).parent().removeClass('color' + $(this).parent().parent().attr('data-note'));
            $(this).parent().parent().removeClass('active');
            $(this).remove();
            exportMelody(idInput);
        }
    });
}

function adminControls() {
    $('#musicale_form_numberOfColumns').off();
    $('#musicale_form_numberOfColumns').on('change', function () {
        editNumberOfNote();
    });
}

function editNumberOfNote() {
    let numberOfColumnsDiv = $('#musicale_form_numberOfColumns');
    if (numberOfColumnsDiv.val() < 2) {
        numberOfColumnsDiv.val(2);
    }
    if (numberOfColumnsDiv.val() > 20) {
        numberOfColumnsDiv.val(20);
    }

    changeNumberOfNote(numberOfColumnsDiv.val());
}

function exportMelody(idInput) {
    let holder = $('#holderContainer .holder');
    let noteCode = "";

    holder.each(function() {
        if ($(this).hasClass('active')) {
            noteCode += $(this).attr('data-note') + ";";
        }
        else {
            noteCode += "empty;";
        }
    });

    if (!noteCode.includes("empty")) {
        $(idInput).val(noteCode);
    }
    else {
        $(idInput).val('');
    }
}

function importMelody(noteCode, idInput) {

    let splitCode = noteCode.split(';');

    let iconCloseDiv = '<i class="close icon"></i>';
    let currentIndex = 0;

    $('.note').each(function() {
        $(this).parent().attr('data-note', splitCode[currentIndex]);
        $(this).parent().addClass("active");
        $(this).addClass("active");
        $(this).addClass('color' + splitCode[currentIndex]);
        $(this).append(iconCloseDiv);
        currentIndex++;
    });
    closeIcon(idInput);
}
