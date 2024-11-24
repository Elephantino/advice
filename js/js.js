// matches, closest, contains

// matches 

let matchesParent = document.querySelector(".matches__inner");

let matchesChildren = matchesParent.children;
let matchesChildrenArr = Array.from(matchesChildren);

// console.log(matchesChildren)
for(let i of matchesChildrenArr) {
	if(i.matches("span")) {
		i.style.color = "red";
	} 
	if (i.matches("div")) {
		i.style.color = "red";
	}
}

// ******************************

const closestActive = document.querySelector('.closest .active');
const closest = closestActive.closest('.closest  #list > li');

closest.style.backgroundColor = 'yellow';

// ******************************













//  keyup keydown  ***

let events = document.querySelector(".events");
let inputKeyUpDown = events.querySelector(".show-event__input")
// -
let keydown = events.querySelector(".show-event__keydown")
let keyup = events.querySelector(".show-event__keyup")
// -
// let keydownType = keydown.querySelector(".type");
let keydownKey = keydown.querySelector(".key")
let keydownCode = keydown.querySelector(".code");
let keydownKeyCode = keydown.querySelector(".keyCode");
let keydownWhich = keydown.querySelector(".which");
// -
// let keyupType = keyup.querySelector(".type");
let keyupKey = keyup.querySelector(".key")
let keyupCode = keyup.querySelector(".code");
let keyupKeyCode = keyup.querySelector(".keyCode");
let keyupWhich = keyup.querySelector(".which");
// -

inputKeyUpDown.addEventListener("keydown", (event) => {
  // Type.textContent = event.type;
  keydownKey.textContent = event.key;
  keydownCode.textContent = event.code;
  keydownKeyCode.textContent = event.keyCode;
  keydownWhich.textContent = event.which;
});

inputKeyUpDown.addEventListener("keyup", (event) => {
  // Type.textContent = event.type;
  keyupKey.textContent = event.key;
  keyupCode.textContent = event.code;
  keyupKeyCode.textContent = event.keyCode;
  keyupWhich.textContent = event.which;
});

// ******************************








// mousemove

let mousemove = document.querySelector(".mousemove");
let mousemoveInput = mousemove.querySelector(".show-event__input");

let mousemoveOffsetX = mousemove.querySelector(".offsetX");
let mousemoveOffsetY = mousemove.querySelector(".offsetY");
let mousemovePageX = mousemove.querySelector(".pageX");
let mousemovePageY = mousemove.querySelector(".pageY");
let mousemoveClientX = mousemove.querySelector(".clientX");
let mousemoveClientY = mousemove.querySelector(".clientY");
let mousemoveLayerX = mousemove.querySelector(".layerX");
let mousemoveLayerY = mousemove.querySelector(".layerY");

let mousemoveType = mousemove.querySelector(".type");


mousemoveInput.addEventListener("mousemove", (event) => {
  mousemoveOffsetX.textContent = event.offsetX;
  mousemoveOffsetY.textContent = event.offsetY;
  mousemovePageX.textContent = event.pageX;
  mousemovePageY.textContent = event.pageY;
  mousemoveClientX.textContent = event.clientX;
  mousemoveClientY.textContent = event.clientY;
  mousemoveLayerX.textContent = event.layerX;
  mousemoveLayerY.textContent = event.layerY;

  mousemoveType.textContent = event.type;
})

// ******************************




// oninput


let oninputParent = document.querySelector(".oninput");
let oninputInput = oninputParent.querySelector("input");
let oninputOutput = oninputParent.querySelector(".output");

oninputInput.addEventListener("input", (event) => {
  // console.log(event)
  oninputOutput.textContent = event.data;
  // oninputOutput.textContent = event.value;
})


// ******************************



/*    <div class="mouse-over-out__hover">    */

let mouseOverOut = document.querySelector(".mouse-over-out__hover");

mouseOverOut.addEventListener("mouseover", function (event) {
  console.log(" mouseover");
  console.log("Курсор над элементом");
  console.log(event.target);
  console.log(event.relatedTarget);
});
mouseOverOut.addEventListener("mouseout", function (event) {
  console.log(" mouseout");
  console.log("Курсор уходит с элемента");
  console.log(event.target);
  console.log(event.relatedTarget);
});





/*    <div class="mouse-over-out__hover-grid">  */

const mouseOverOutHoverGrid = document.querySelector(".mouse-over-out__hover-grid");
mouseOverOutHoverGrid.addEventListener("mouseover", function (event) { //внутри этого элемента при событии mouseover(курсор над)
  let target = event.target.closest("span"); //в переменную target пытаемся получить span
  if (!target) return;//если это не  span то ничего не делаем (функция возвращает return)
  target.style.cssText = `background-color: #77608d`; //если же попадаем на span то тогда что то делаем 
});

mouseOverOutHoverGrid.addEventListener("mouseout", function (event) { //внутри этого элемента при событии mouseout(курсор ушел)
  let target = event.target.closest("span"); //в переменную target пытаемся получить span
  if (!target) return; //если это не span то ничего не делаем (функция возвращает return)
  target.style.cssText = ``; //если же увадим курсор со span то тогда что то делаем 
});




/*   <div class="mouse-enter-leave__hover">   */

let mouseEnterLeave = document.querySelector(".mouse-enter-leave__hover");

mouseEnterLeave.addEventListener("mouseenter", function (event) {
  console.log(event);
  console.log("Курсор над элементом");
});
mouseEnterLeave.addEventListener("mouseleave", function (event) {
  console.log(event);
  console.log("Курсор уходит с элемента");
});







/* <div class="drag-field"> */

const gragField = document.querySelector('.drag-field');
const gragItem = document.querySelector('.drag-field__item');

gragItem.addEventListener("mousedown", function (event) {

  let coordsItemX = event.clientX - gragItem.getBoundingClientRect().left;
  let coordsItemY = event.clientY - gragItem.getBoundingClientRect().top;

  let gragItemSizes = {
    width: gragItem.offsetWidth,
    height: gragItem.offsetHeight
  }
  let gragFieldSizes = {
    left: gragField.getBoundingClientRect().left + scrollX,
    top: gragField.getBoundingClientRect().top + scrollY,
    right: gragField.getBoundingClientRect().left + scrollX + gragField.offsetWidth,
    bottom: gragField.getBoundingClientRect().top + scrollY + gragField.offsetHeight
  }

  gragItem.style.position = 'absolute';
  gragItem.style.zIndex = 1000;
  document.body.append(gragItem);

  moveItem(event.pageX, event.pageY);

  function moveItem(pageX, pageY) {
    let currentX = pageX - coordsItemX;
    let currentY = pageY - coordsItemY;

    if (
      currentX + gragItemSizes.width <= gragFieldSizes.right &&
      currentX >= gragFieldSizes.left
    ) {
      gragItem.style.left = `${currentX}px`;
    } else {
      if (currentX + gragItemSizes.width > gragFieldSizes.right) {
        gragItem.style.left = `${gragFieldSizes.right - gragItemSizes.width}px`;
      }
      if (currentX < gragFieldSizes.left) {
        gragItem.style.left = `${gragFieldSizes.left}px`;
      }
    }
    if (
      currentY + gragItemSizes.height <= gragFieldSizes.bottom &&
      currentY >= gragFieldSizes.top
    ) {
      gragItem.style.top = `${currentY}px`;
    } else {
      if (currentY + gragItemSizes.height > gragFieldSizes.bottom) {
        gragItem.style.top = `${gragFieldSizes.bottom - gragItemSizes.height}px`;
      }
      if (currentY < gragFieldSizes.top) {
        gragItem.style.top = `${gragFieldSizes.top}px`;
      }
    }
  }

  let currentDroppable = null;

  function onDragItem(event) {
    moveItem(event.pageX, event.pageY);

    gragItem.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    gragItem.hidden = false;

    if (!elemBelow) return;
    let droppableBelow = elemBelow.closest('.drag-field__point');

    if (currentDroppable !== droppableBelow) {
      if (currentDroppable) {
        currentDroppable.classList.remove('_active');
        gragItem.classList.remove('_active');
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) {
        currentDroppable.classList.add('_active');
        gragItem.classList.add('_active');
      }
    }
  }
  document.addEventListener('mousemove', onDragItem);

  document.addEventListener("mouseup", function (event) {
    document.removeEventListener('mousemove', onDragItem);
  }, { "once": true });
});
gragItem.addEventListener("dragstart", function (event) {
  event.preventDefault();
});




// <div class="ascent">


const block = document.querySelector('.ascent-one');
const blockInner = document.querySelector('.ascent-two');
const blockInnerInner = document.querySelector('.ascent-three');

block.addEventListener("click", function (event) {
  console.log('блок 1');
  // console.log(event.target);
})

blockInner.addEventListener("click", function (event) {
  console.log('блок 2');
})
blockInnerInner.addEventListener("click", function (event) {
  console.log('блок 3');
  // event.stopPropagation();
})


const listener = document.querySelector('.ascentListener-one');
const blockListener = document.querySelector('.ascentListener-two');
const blockListenerListener = document.querySelector('.ascentListener-three');

listener.addEventListener("click", function (event) {
  console.log('блок 1');
  // console.log(event.target);
})

blockListener.addEventListener("click", function (event) {
  console.log('блок 2 {"capture": true}');
}, { "capture": true })
blockListenerListener.addEventListener("click", function (event) {
  console.log('блок 3');
  // event.stopPropagation();
})








// Делегирование событий

let delegateEvent = document.querySelector(".delegate-event");

function showConsole() {
  console.log('Обработчик один а работают все кнопки, ура!))');
}

delegateEvent.addEventListener("click", function (event) {
  if (event.target.closest(".delegate-event__button")) {
    showConsole();
  }
});







const delegateEventMenu = document.querySelector(".delegate-event--menu");  //ищем родителя

document.addEventListener("click", openEventMenu);  //вешаем событие на документ
//ниже мы отлавливаем куда был клик event.target.closest(".class") вернет элемент если клик был на него или на детей (event.target)
function openEventMenu(event) {
  if (event.target.closest(".delegate-event--menu--button")) {  //.closest(".delegate-event--menu--button") возвращает кнопку и не надо искать ее в dom
    delegateEventMenu.classList.toggle("active");              //клик по данной кнопке добавит класс toggle("active") и меню откроется
  } else if (!event.target.closest(".delegate-event--menu")) { //а это ветвление проверяет клик, если он не по меню то класс active удалится
    delegateEventMenu.classList.remove("active");              //и меню скроется атрибутом hidden
  }
}

//скрыть меню нажав Escape

document.onkeyup = (event) => {
  console.log(event);
  if (event.code === 'Escape') {
    delegateEventMenu.classList.remove("active");
  }
}











// Действия браузера по умолчанию и их отмена

let linkCancleTwo = document.querySelector(".link-cancle__two");
let linkCancleThree = document.querySelector(".link-cancle__three");

linkCancleTwo.addEventListener("click", function (event) {
  event.preventDefault();
});

linkCancleThree.onclick = function () {
  return false;
}






























