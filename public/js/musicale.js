let speed = 0.5;
let idInputSolutionAdmin = '#musicale_form_solution';
let idInputReponseUser = '#reponseRecuperee';

function loadNumberOfNote() {
    let holderContainerDiv = $('#holderContainer');
    let numberOfRows = holderContainerDiv.attr('data-row');
    let numberOfColumns = holderContainerDiv.attr('data-col');
    $('body').prepend('<style></style>');
    let noteCode = $(idInputSolutionAdmin).val();

    changeNumberOfNote(numberOfRows, numberOfColumns);
    importMelody(noteCode);
}

function tonesManager(numberOfRows, numberOfColumns) {
    let tones = [];

    for (let i = 0; i < numberOfRows; i++) {
        tones[i] = new Howl({
            src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/380275/' + i*3 + '.mp3',
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/380275/' + i*3 + '.ogg']
        });
    }

    playNote(numberOfColumns, tones);
    if (document.querySelector(idInputSolutionAdmin)) {
        adminControls();
        userControls(idInputSolutionAdmin);
    }
    else {
        userControls(idInputReponseUser);
    }
}

function playNote(numberOfColumns, tones) {
    for (let i = 0; i < numberOfColumns; i++) {
        $('#holderContainer .holder:nth-child(' + numberOfColumns + 'n + ' + i + ')').
        on('webkitAnimationIteration mozAnimationIteration animationiteration',
            function () {
                if ($(this).hasClass('active')) {
                    tones[$(this).attr('data-note')].play();

                    $(this).find('.ripple').addClass('rippleAnim').delay(500).queue(function () {
                        $(this).removeClass('rippleAnim').dequeue();
                    });
                }
            });
    }
}

function userControls(idInput) {
    $('.note').on('click', function () {
        $(this).toggleClass("active");
        $(this).parent().toggleClass("active");
        exportMelody(idInput);
    });
    let resetButton = $('#reset');
    resetButton.off();
    resetButton.on('click', function () {
        $('.active').removeClass('active');
        exportMelody(idInput);
    });
    let audioButton = $('#audio');
    audioButton.off();
    audioButton.on('click', function () {
        if ($(this).hasClass("mute")) {
            Howler.mute(false);
            $(this).children().removeClass("volume off");
            $(this).children().addClass("volume up");
        }
        else {
            Howler.mute(true);
            $(this).children().removeClass("volume up");
            $(this).children().addClass("volume off");
        }
        $(this).toggleClass('mute');
    });
}

function adminControls() {
    $('#musicale_form_numberOfRows').on('change', function () {
        editNumberOfNote();
    });
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

    let numberOfRowsDiv = $('#musicale_form_numberOfRows');
    if (numberOfRowsDiv.val() < 1) {
        numberOfRowsDiv.val(1);
    }
    if (numberOfRowsDiv.val() > 6) {
        numberOfRowsDiv.val(6);
    }

    changeNumberOfNote(numberOfRowsDiv.val(), numberOfColumnsDiv.val());
}

function changeNumberOfNote(numberOfRows, numberOfColumns) {
    let holderContainerDiv = $("#holderContainer");
    holderContainerDiv.children().remove();
    for (let j = 0; j < numberOfRows; j++) {
        holderContainerDiv.append('<div class="row"></div>');
        let notesOnTheRow = '';
        for (let i = 0; i < numberOfColumns; i++) {
            notesOnTheRow += '<div class="holder" data-note="' + j + '"><div class="note"><div class="ripple"></div></div></div>';
        }
        $('#holderContainer .row').last().append(notesOnTheRow);
    }

    let styleBalise = $('style');
    styleBalise.empty();
    let property1 = ".holder {" +
        "   width: " + ((100 / numberOfColumns) - 0.5) + "%;" +
        "}";
    let property2 = ".holderContainer .holder {" +
        "   animation: line " + numberOfColumns * speed + "s linear infinite;" +
        "}";
    let property3 = "";
    for (let h = 0; h < numberOfColumns; h++) {
        property3 += ".holderContainer .holder:nth-child(" + numberOfColumns + "n+" + h + ") {" +
            "   animation-delay: " + h * speed + "s;" +
            "}";
    }
    styleBalise.append(property1 + property2 + property3);
    $(idInputSolutionAdmin).val('');

    tonesManager(numberOfRows, numberOfColumns);
}

function exportMelody(idInput) {
    let holder = $('#holderContainer .holder');
    let noteCode = "",
        offCount = 0,
        onCount = 0;

    holder.each(function() {
        if ($(this).hasClass('active')) {
            if (offCount > 0) {
                noteCode = noteCode + "-" + offCount + " ";
            }
            onCount++;
            offCount = 0;
        } else {
            if (onCount > 0) {
                noteCode = noteCode + "+" + onCount + " ";
            }
            offCount++;
            onCount = 0;
        }
    });

    if (offCount > 0) {
        noteCode = noteCode + "-" + offCount;
    }
    else if (onCount > 0) {
        noteCode = noteCode + "+" + onCount;
    }

    if (noteCode === '-'+holder.length) {
        noteCode = '';
    }
    $(idInput).val(noteCode);
}

function importMelody(noteCode) {
    $(idInputSolutionAdmin).val(noteCode);

    let splitCode = noteCode.split(' ');

    let holder = document.querySelectorAll('.holder');
    let currentIndex = 0;

    for (let i = 0; i < splitCode.length; i++) {
        let currentNoteCode = parseInt(splitCode[i]);
        if (currentNoteCode > 0) {
            for (let k = 0; k < currentNoteCode; k++) {
                holder[currentIndex].className += ' active';
                holder[currentIndex].firstChild.className += ' active';
                currentIndex++;
            }
        }
        else {
            currentIndex += Math.abs(currentNoteCode);
        }
    }
}
