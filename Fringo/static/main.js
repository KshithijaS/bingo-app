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

/*
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
// let user_board = [["", "", "", "", ""],
//                   ["", "", "", "", ""],
//                   ["", "", "", "", ""],
//                   ["", "", "", "", ""],
//                   ["", "", "", "", ""],]

// window.onload = initAll;
// var usedNums = new Array(26);

// function initAll() {
//   if (document.getElementById) {
//     document.getElementById("reload").onclick = anotherCard;
//     newCard();
//   }
//   else{
//     alert("Your browser does not support this script.");
//   }
// }

// function newCard() {
//   for(var i = 0 ; i < 25 ; i++){
//       setSquare(i);
//     }
// }

// function setSquare(thisSquare){
//   var currentSquare = "square" + thisSquare;
//   var colPlace = new Array(3,1,4,0,3,2,0,4,1,2,0,3,2,1,4,2,1,3,0,1,4,3,0,2,4);
//   var colBasis = colPlace[thisSquare] * 5;
//   var newNum = colBasis + getNewNum() + 1;

//   do{
//     newNum = colBasis + getNewNum() + 1;
//   }while(usedNums[newNum]);
  
//   usedNums[newNum] = true;
//   document.getElementById(currentSquare).innerHTML = newNum;
//   user_board[Math.floor(thisSquare / 5)][thisSquare % 5] = newNum;
// }

// function getNewNum() {
//   return Math.floor(Math.random() * 5);
// }

// function anotherCard() {
//   for (var i = 1; i < usedNums.length; i++) {
//     usedNums[i] = false;
//   };

//   newCard();
//   return false;
// }

// console.log(user_board);
class User {
  constructor() {
    this.user_board = [["", "", "", "", ""],
                       ["", "", "", "", ""],
                       ["", "", "", "", ""],
                       ["", "", "", "", ""],
                       ["", "", "", "", ""],]
    this.usedNums = new Array(26);
  }

  initAll() {
    if (document.getElementById) {
      document.getElementById("reload").onclick = this.anotherCard;
      this.newCard();
    }
    else{
      alert("Your browser does not support this script.");
    }
  }

  newCard() {
    for(var i = 0 ; i < 25 ; i++){
        this.setSquare(i);
      }
  }

  setSquare(thisSquare){
    var currentSquare = "square" + thisSquare;
    var colPlace = new Array(3,1,4,0,3,2,0,4,1,2,0,3,2,1,4,2,1,3,0,1,4,3,0,2,4);
    var colBasis = colPlace[thisSquare] * 5;
    var newNum = colBasis + this.getNewNum() + 1;
  
    do{
      newNum = colBasis + this.getNewNum() + 1;
    }while(this.usedNums[newNum]);
    
    this.usedNums[newNum] = true;
    document.getElementById(currentSquare).innerHTML = newNum;
    this.user_board[Math.floor(thisSquare / 5)][thisSquare % 5] = newNum;
  }

  getNewNum() {
    return Math.floor(Math.random() * 5);
  }
  
  anotherCard() {
    for (var i = 1; i < this.usedNums.length; i++) {
      this.usedNums[i] = false;
    };
  
    this.newCard();
    return false;
  }
}


const user = new User();
window.onload = user.initAll();
console.log(user.user_board);

class Computer {
  constructor() {
    this.comp_board = [["", "", "", "", ""],
                       ["", "", "", "", ""],
                       ["", "", "", "", ""],
                       ["", "", "", "", ""],
                       ["", "", "", "", ""],]  
  }

  createBoard(){
    var usedNums = new Array(26);
    for (var i = 1; i < usedNums.length; i++) {
          usedNums[i] = false;
    }
    for(var i = 0; i < 25; i++){
      var colPlace = new Array(0,1,4,3,2,2,4,0,1,3,0,3,2,1,4,0,3,1,2,4,0,4,2,3,1);
      var colBasis = colPlace[i] * 5;
      var newNum = colBasis + this.getNewNum() + 1;
    
      do{
        newNum = colBasis + this.getNewNum() + 1;
      }while(usedNums[newNum]);
      
      usedNums[newNum] = true;
      this.comp_board[Math.floor(i / 5)][i % 5] = newNum;
    }
  }

  getNewNum() {
    return Math.floor(Math.random() * 5);
  }
}

const comp = new Computer();
comp.createBoard();
console.log(comp.comp_board);

var color=["#A9A9A9"];
//var i =0;
for(var i=0; i<25; i++){
  var currentSQ="square" + i;
  document.getElementById(currentSQ).addEventListener("click",
  function(){
  document.getElementById(currentSQ).style.background=color[0]
  })
}
function gameBoard(user_board){
  const boardDiv = document.querySelector('#game-board');
  for(var i=0; i<5; i++){
    const newRow = document.querySelector('#div');
    newRow.className='d-flex flex-row';
    newRow.id=`${i}`;
    boardDiv.appendChild(newRow);
    for(var j = 0; j < 5; j++) {
      const rowItem = document.createElement('div');
      rowItem.className = 'empty';
      rowItem.id = `${j}`;
      rowItem.innerHTML = user_board[i][j];
      newRow.appendChild(rowItem);
    }
  }
}

// if(checkUrlStr("game")) {
//   createBoard(user_board);
// }


// function createBoard(user_board) {
//    const boardDiv = document.querySelector('#game-board');
//    for(var i = 0; i < 5; i++){
//        const newRow = document.createElement('div');
//        newRow.className = 'd-flex flex-row';
//        newRow.id = `${i}`;
//        boardDiv.appendChild(newRow);

//        for(var j = 0; j < 5; j++) {
//            const rowItem = document.createElement('div');
//            rowItem.className = 'empty';
//            rowItem.id = `${j}`;
//            rowItem.setAttribute('ondrop', 'drop(event)');
//            rowItem.setAttribute('ondragover', 'allowDrop(event)');
//            rowItem.innerHTML = user_board[i][j];
//            newRow.appendChild(rowItem);
//        }
//    }
// }

// /* Drag and Drop */
// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
// //   ev.target.appendChild(document.getElementById(data));
//   ev.target.innerHTML = data;
//   var parentId = ev.target.parentNode.id;
//   var currentId = ev.target.id;
//   board[parentId][currentId] = data;
// }

// if (board !== "") {
//     const proceed = document.getElementById('proceed-btn');
//     proceed.setAttribute("href", "{% url 'game' %}");
// }