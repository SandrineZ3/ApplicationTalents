const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

// Solution pour éviter pb figé ?
// const boxElements = document.querySelectorAll(".box");

draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart);
});

droppableElements.forEach(elem => {
    elem.addEventListener("dragenter", dragEnter); // quand on rentre dans une case autre
    elem.addEventListener("dragover", dragOver); // quand on maintient l'élément sur une cible de drop
    elem.addEventListener("dragleave", dragLeave); // quand on quitte la case d'origine
    elem.addEventListener("drop", drop); // quand on drop l'element dans une box
});

// Drag and Drop Fonctions
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}


function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function dragEnter(event) {
    if (!event.target.classList.contains("dropped")) {
        event.target.classList.add("droppable-hover");  // juste pour le css, changer le style de la case quand on passe l'éléement dessus SI il elle est encore droppable
    }
}

function dragOver(event) {
    console.log("dragOver!");
    if (!event.target.classList.contains("dropped")) {
        event.preventDefault();
    }
}

function dragLeave(event) {
    if (!event.target.classList.contains("dropped")) {
        event.target.classList.remove("droppable-hover"); // juste pour le css, on remet le style de la case à l'initial
    }
}

function drop(event) {
    event.preventDefault(); // n'affiche pas l'image
    event.target.classList.remove("droppable-hover"); // juste pour le css, on remet le style de la case à l'initial
    let draggableElementData = event.dataTransfer.getData("text");
    event.target.appendChild((document.getElementById(draggableElementData)));


// let droppableElementData = event.target.getAttribute("data-draggable-id");
// let isCorrectMatching = draggableElementData === droppableElementData;
//
// // Pas besoin du if car pas de vérif instantanée, verif dans Controller ???
//  if(isCorrectMatching) {
//     let draggableElement = document.getElementById(draggableElementData);
//     event.target.classList.add("dropped");
//     // event.target.style.backgroundColor = draggableElement.style.color; ???
//     event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
//     draggableElement.classList.add("dragged");
//     draggableElement.setAttribute("draggable", "false");
//     event.target.appendChild(draggableElement);
//  }
}

// faire un bouton pour tout vider en cas d'erreur ?


// DRAG AND DROP FONCTIONNEMENT DE BASE
// const base = document.querySelector('.base'); // nos elements draggables
// const box = document.querySelectorAll('.case'); // la ou on veut placer nos images
//
// base.addEventListener('dragstart', dragStart);
// base.addEventListener('dragend', dragEnd);
//
// function dragStart() {
//     this.className += ' tenu';   // this.className représente l'imge que l'on prend, donc ici "base" et on rajoute la classe tenu (bordure grise)
//     setTimeout(() => (this.className = 'invisible'), 0); // on fait disparaitre l'image quand on la tient hors de sa case
// }
//
// function dragEnd() {
//     this.className = 'base'; // des qu'on lache notre image en dehors, l'image revient au debut, dans sa case.
// }
//
// for (const vide of box) { // on itere sur toutes les box pour definir les listeners
//     vide.addEventListener('dragover', dragOver);
//     vide.addEventListener('dragenter', dragEnter);
//     vide.addEventListener('dragleave', dragLeave);
//     vide.addEventListener('drop', dragDrop);
// }
//
// // quand on maintient l'élément
// function dragOver(e) {
//     e.preventDefault()  // empeche l'action par défaut
// }
//
// // quand on rentre dans une case autre
// function dragEnter(e) {
//     e.preventDefault();
//     this.className += ' hovered';
// }
//
// // quand on quitte la case d'origine
// function dragLeave() {
//     this.className = 'case';
// }
//
// // quand on drop l'element dans une box
// function dragDrop() {
//     this.className = 'case';
//     this.append(base); // on rajoute l'image dans la box
// }
