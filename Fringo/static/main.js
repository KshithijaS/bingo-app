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
            rowItem.setAttribute('ondrop', 'drop(event)');
            rowItem.setAttribute('ondragover', 'allowDrop(event)');
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
            rowItem.id = `${i}`; 
            rowItem.className = 'fill';
            rowItem.setAttribute('draggable', 'true');
            rowItem.setAttribute('ondragstart', 'drag(event)');
            rowItem.innerHTML = i;
            newRow.appendChild(rowItem);
            i++;
        }
    }
}


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  this.className = 'fill-place';
}
