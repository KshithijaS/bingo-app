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



let board = [["", "", "", "", ""],
             ["", "", "", "", ""],
             ["", "", "", "", ""],
             ["", "", "", "", ""],
             ["", "", "", "", ""],]
/* Create Card 

// if(!board.some(row => row.includes(""))) {
//     console.log("Proceed");
// }

if(checkUrlStr("createCard") || checkUrlStr("game") || checkUrlStr("compCreateCard")) {
    createBoard();
}


function createBoard() {
    const boardDiv = document.querySelector('#game-board');
    for(var i = 0; i < 5; i++){
        const newRow = document.createElement('div');
        newRow.className = 'd-flex flex-row';
        newRow.id = `${i}`;
        boardDiv.appendChild(newRow);

        for(var j = 0; j < 5; j++) {
            const rowItem = document.createElement('div');
            rowItem.className = 'empty';
            rowItem.id = `${j}`;
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
*/
/* Auto Card Generation */
window.onload = initAll;
var usedNums = new Array(26);

function initAll() {
  if (document.getElementById) {
    document.getElementById("reload").onclick = anotherCard;
    newCard();
  }
  else{
    alert("Your browser does not support this script.");
  }
}

function newCard() {
  for(var i=0 ; i<24 ; i++){
      setSquare(i);
    }
}

function setSquare(thisSquare){
  var currentSquare = "square" + thisSquare;
  var colPlace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
  var colBasis = colPlace[thisSquare] * 5;
  var newNum = colBasis + getNewNum() + 1;

  do{
    newNum = colBasis + getNewNum() + 1;
  }while(usedNums[newNum]);
  
  usedNums[newNum] = true;
  document.getElementById(currentSquare).innerHTML = newNum;
}

function getNewNum() {
  return Math.floor(Math.random() * 5);
}

function anotherCard() {
  for (var i = 1; i < usedNums.length; i++) {
    usedNums[i] = false;
  };

  newCard();
  return false;
}

/* Drag and Drop */
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
  ev.target.innerHTML = data;
  var parentId = ev.target.parentNode.id;
  var currentId = ev.target.id;
  board[parentId][currentId] = data;
}

console.log(board);

if (board !== "") {
    const proceed = document.getElementById('proceed-btn');
    proceed.setAttribute("href", "{% url 'game' %}");
}