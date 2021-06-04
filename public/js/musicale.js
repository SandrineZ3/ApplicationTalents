function playNote(cols, tones) {
    for (let i = 0; i < cols; i++) {
        $('#holderContainer .holder:nth-child(' + cols + 'n + ' + i + ')').
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

function userControls(noteDiv, idInput) {
    $(noteDiv).on('click', function () {
        $(this).toggleClass("active");
        $(this).parent().toggleClass("active");
        exportMelody(idInput);
    });
    $('#reset').on('click', function () {
        $('.active').removeClass('active');
        exportMelody(idInput);
    });
    $('#audio').on('click', function () {
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
    $('#musicale_form_numberOfRows').on('click', function () {
        editNumberOfNote();
    });
    $('#musicale_form_numberOfColumns').on('click', function () {
        editNumberOfNote();
    });
}

function editNumberOfNote() {
    $("#holderContainer").children().remove();
    let numberOfRows = $('#musicale_form_numberOfRows').val();
    let numberOfColumns = $('#musicale_form_numberOfColumns').val();
    for (let j = 0; j < numberOfRows; j++) {
        for (let i = 0; i < numberOfColumns; i++) {
            $('#holderContainer').append('<div class="holder" data-note="' + j + '"><div class="note"><div class="ripple"></div></div></div>');
        }
    }
    tonesManager();
}

function exportMelody(input) {
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
    $(input).val(noteCode);
}

function importMelody() {
    let noteCode = '',
        noteState,
        error = false,
        note;

    noteCode = dialog.find('textarea#importCode').val();
    dialog.dialog("close");

    noteCode = noteCode.replace("[", "");
    noteCode = noteCode.replace("]", "");

    if (noteCode.charAt(0) === ":")
        noteState = 1;
    else if (noteCode.charAt(0) === ";")
        noteState = 0;
    else {
        alert("Your note code wasn't recognised");
        error = true;
    }

    if (!error) {
        $('.active').removeClass('active');
        noteCode = noteCode.substr(1);
        var splitCode = noteCode.split(/:|;/g);
        var noteCounter = 0;

        for (i = 0; i < splitCode.length; i++) {
            var currNum = parseInt(splitCode[i]);

            if (noteState) {
                for (var n = 0; n < currNum; n++) {
                    noteCounter++;
                    note = $('#board span:nth-child(' + noteCounter + ')');
                    note.addClass('active');
                    note.children().addClass('active');
                }
            } else {
                noteCounter = noteCounter + currNum;
            }
            noteState = !noteState;
        }
    }
}
