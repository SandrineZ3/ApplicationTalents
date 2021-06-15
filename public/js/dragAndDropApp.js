// function initDragAndDrop() {
//     const draggableElements = document.querySelectorAll(".draggable");
//     const droppableElements = document.querySelectorAll(".droppable");
//
//     draggableElements.forEach(elem => {
//         elem.addEventListener("dragstart", dragStart);
//     });
//
//     droppableElements.forEach(elem => {
//         elem.addEventListener("dragenter", dragEnter); // quand on rentre dans une case autre
//         elem.addEventListener("dragover", dragOver); // quand on maintient l'élément sur une cible de drop
//         elem.addEventListener("dragleave", dragLeave); // quand on quitte la case d'origine
//         elem.addEventListener("drop", drop); // quand on drop l'element dans une box
//     });
// }


// Drag and Drop Fonctions
function allowDrop(event) {
    event.preventDefault();
}

// function drag(event) {
//     event.dataTransfer.setData("text", event.target.id);
// }

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// function dragEnter(event) {
//     if (!event.target.classList.contains("dropped")) {
//         event.target.classList.add("droppable-hover");  // juste pour le css, changer le style de la case quand on passe l'éléement dessus SI il elle est encore droppable
//     }
// }
//
// function dragOver(event) {
//     if (!event.target.classList.contains("dropped")) { // pour effet css
//         event.preventDefault();
//     }
// }
//
// function dragLeave(event) {
//     if (!event.target.classList.contains("dropped")) {
//         event.target.classList.remove("droppable-hover"); // juste pour le css, on remet le style de la case à l'initial
//     }
// }

function dropSave(event) {
        let nombrePictoReponse = document.querySelector('#nombrePictoReponse').getAttribute('data-nombrePictoReponse');
        // let nombreReponse = parseInt(nombrePictoReponse.getAttribute('data-nombrePictoReponse'));
        let tableauReponse = Array(nombrePictoReponse);

        event.preventDefault(); // n'affiche pas l'image
        if (event.target.id > 0) {  // Impossible de déplacer un picto sur un autre
            event.target.innerHTML = '';
        } else {
            const draggableElementData = event.dataTransfer.getData("text");
            event.target.appendChild((document.getElementById(draggableElementData)));
            let droppableElementData = event.target.getAttribute("data-draggable-id");
            tableauReponse[droppableElementData] = draggableElementData;
            document.getElementById('reponseRecuperee').value = tableauReponse;
            console.log(nombrePictoReponse);
            console.log(tableauReponse);
        }
}

function drop(event) {
    event.preventDefault(); // n'affiche pas l'image
    if (event.target.id > 0) {
        event.target.innerHTML = '';
    } else {
        const draggableElementData = event.dataTransfer.getData("text");
        event.target.appendChild((document.getElementById(draggableElementData)));
        // let droppableElementData = event.target.getAttribute("data-draggable-id");
    }
}

