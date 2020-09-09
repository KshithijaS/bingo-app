// NavBar alterations based on the page

function checkUrlStr(subStr) {
    return window.location.href.includes(subStr);
}


let secondNavBar = document.querySelector(".item-2");
let alink = secondNavBar.firstElementChild;
if(checkUrlStr("login") || checkUrlStr("signup")) {
    secondNavBar.removeChild(alink);
}


// -----Invite Page-----

function createID() {
    document.getElementById("dropdown1").style.display = "block";
}

function enterID() {
    document.getElementById("dropdown2").style.display = "block";
}

// -----Profile Page-----

const tabItems = document.querySelectorAll('.tab-item');
const tabItemContent = document.querySelectorAll('.tab-content');

//Select tab content
function selectItem(e) {
    deselectTab();
    //Adding appearence to tabs
    this.classList.remove('deselected');
    this.classList.add('selected');

    //Tab content
    const selectedContent = document.getElementById(`${this.id}-content`);
    selectedContent.classList.add('show');
}

function deselectTab() {
    tabItems.forEach(item => item.classList.remove('selected'));
    tabItems.forEach(item => item.classList.add('deselected'));
    tabItemContent.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));

/* Create Card */

let board = [["", "", "", "", ""],
             ["", "", "", "", ""],
             ["", "", "", "", ""],
             ["", "", "", "", ""],
             ["", "", "", "", ""],]

// if(!board.some(row => row.includes(""))) {
//     console.log("Proceed");
// }

if(checkUrlStr("createCard") || checkUrlStr("game")) {
    createBoard();
    dragNDrop();
}

function createBoard() {
    const boardDiv = document.querySelector('#game-board');
    for(var i = 0; i < 5; i++){
        const newRow = document.createElement('div');
        newRow.className = 'd-flex flex-row';
        boardDiv.appendChild(newRow);

        for(var j = 0; j < 5; j++) {
            const rowItem = document.createElement('div');
            rowItem.className = 'empty';
            rowItem.innerHTML = board[i][j];
            newRow.appendChild(rowItem);
        }
    }
}

function display(start_no, end_no) {
    const numberBlock = document.querySelector('.drag-op');
    while (numberBlock.firstChild) {
        numberBlock.removeChild(numberBlock.firstChild);
    }
    let i = start_no;
    while(i <= end_no) {
        const newRow = document.createElement('div');
        newRow.className = 'd-flex flex-row';
        numberBlock.appendChild(newRow);

        for(var j = 0; j < 5; j++) {
            const rowItem = document.createElement('div');
            rowItem.className = 'fill';
            rowItem.setAttribute('draggable', 'true');
            rowItem.innerHTML = i;
            newRow.appendChild(rowItem);
            i++;
        }
    }
}

function dragNDrop() {

    const filled = document.querySelectorAll('.fill');
    const empties = document.querySelectorAll('.empty');
    //fill listener
    for (const fill of filled) {
        fill.addEventListener('dragstart', dragStart);
        fill.addEventListener('dragend', dragEnd);
    }

    // Loop through the empties
    for(const empty of empties) {
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('dragenter', dragEnter);
        empty.addEventListener('dragleave', dragLeave);
        empty.addEventListener('drop', dragDrop);
    }

    //Drag functions

    function dragStart() {
        setTimeout(() => this.className = 'invisible', 0);
    }

    function dragEnd() {
        this.classList.remove('empty')
        this.classList.add('fill')
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        this.classList.add('hovered');
    }

    function dragLeave() {
        this.classList.remove('hovered');
        if(this.classList.contains('fill')) {
            this.classList.remove('empty');
        }
        else {
            this.classList.add('empty');
        }
    }

    function dragDrop(event) {
        this.classList.remove('empty');
        this.classList.remove('hovered');
        this.classList.add('fill');
        this.innerHTML = event.innerHTML;
    }
}