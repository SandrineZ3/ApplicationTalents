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

function userControls(note, idInput) {
    $(note).on('click', function () {
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

function adminControls(speed, idInput) {
    $('#musicale_form_numberOfRows').on('change', function () {
        editNumberOfNote(speed, idInput);
    });
    $('#musicale_form_numberOfColumns').on('change', function () {
        editNumberOfNote(speed, idInput);
    });
}

function loadNumberOfNote(speed, idInput) {
    let numberOfRows = $('#holderContainer').attr('data-row');
    let numberOfColumns = $('#holderContainer').attr('data-col');
    $("body").prepend('<style></style>');
    changeNumberOfNote(speed, idInput, numberOfRows, numberOfColumns);
}

function editNumberOfNote(speed, idInput) {
    let numberOfRows = $('#musicale_form_numberOfRows').val();
    let numberOfColumns = $('#musicale_form_numberOfColumns').val();
    if (numberOfColumns < 2) {
        $('#musicale_form_numberOfColumns').val(2);
    }
    if (numberOfColumns > 20) {
        $('#musicale_form_numberOfColumns').val(20);
    }
    if (numberOfRows < 1) {
        $('#musicale_form_numberOfRows').val(1);
    }
    if (numberOfRows > 6) {
        $('#musicale_form_numberOfRows').val(6);
    }
    changeNumberOfNote(speed, idInput, numberOfRows, numberOfRows);
}

function changeNumberOfNote(speed, idInput, numberOfRows, numberOfColumns) {
    $("#holderContainer").children().remove();
    for (let j = 0; j < numberOfRows; j++) {
        $('#holderContainer').append('<div class="row"></div>');
        for (let i = 0; i < numberOfColumns; i++) {
            $('#holderContainer .row').last().append('<div class="holder" data-note="' + j + '"><div class="note"><div class="ripple"></div></div></div>');
        }
    }

    $("style").empty();
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
    $("style").append(property1 + property2 + property3);
    $(idInput).val('');

    tonesManager();
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
