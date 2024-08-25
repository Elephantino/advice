

// matches, closest, contains

// matches 

let matchesParent = document.querySelector(".matches__inner");

let matchesChildren = matchesParent.children;
let matchesChildrenArr = Array.from(matchesChildren);

console.log(matchesChildren)
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
















//  <li class="scroll">

// document.addEventListener("scroll", function (event) {
//   console.log(event);
//   console.log(`${scrollY}px`);
// })





/*   <div class="mousemove__hover example">   */

let mousemove = document.querySelector(".mousemove__hover");

mousemove.addEventListener("mousemove", function (event) {
  mousemove.innerHTML = `clientX : ${event.clientX} <br> clientY : ${event.clientY} <br> offsetX : ${event.offsetX} <br> offsetY : ${event.offsetY}`;
});




/*    <div class="mouse-over-out__hover example">    */

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







/*   <div class="mouse-enter-leave__hover example">   */

let mouseEnterLeave = document.querySelector(".mouse-enter-leave__hover");

mouseEnterLeave.addEventListener("mouseenter", function () {
  console.log(" mouseenter");
  console.log("Курсор над элементом");
});
mouseEnterLeave.addEventListener("mouseleave", function () {
  console.log(" mouseleave");
  console.log("Курсор уходит с элемента");
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










/* < class="key-down-up"> */

document.addEventListener("keydown", (event) => {
  console.log(event);
  console.log(`Нажата клавиша ${event.code} (${event.key})`)
  console.log(event.repeat);
});

document.addEventListener("keyup", (event) => {
  console.log(event);
  console.log(`Отпущена клавиша ${event.code} (${event.key})`)
});





const area = document.querySelector(".key-down-up__textarea");
const max = area.getAttribute("maxlength");
const output = document.querySelector(".key-down-up__counter span");
output.innerHTML = max;


area.addEventListener("keyup", setOutput);

area.addEventListener("keydown", function (event) {
  if (event.repeat) setOutput;
})

function setOutput() {
  const result = max - area.value.length;
  output.innerHTML = result;
}













//  <li class="loading">


// DOMContentLoaded - срабатывает на объекте document
document.addEventListener("DOMContentLoaded", readyDom);

// readyLoad - срабатывает на объекте window
window.addEventListener("load", readyLoad);


function readyDom() {
  const image = document.querySelector(".loading__img");
  console.log(document.readyState);
  console.log("DOM загружен!");
  console.log(image.offsetWidth);
}

function readyLoad() {
  const image = document.querySelector(".loading__img");
  console.log(document.readyState);
  console.log("Страница загружен!");
  console.log(image.offsetWidth);
}




// window.addEventListener("beforeunload", beforeUnload);

// function beforeUnload(event) {
//   event.preventDefault(); // отменение поведения как указано в стандарте
//   event.returnValue = ''; //хром требует установки возвратного значения
// }



// window.addEventListener("unload", function (e) {
//     Отправка статистики в фоновом режиме и т.д.
//     navigator.sendBeacon(url, data)
//     https://w3c.github.io/beacon/.
// })


















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









// <div class="events__item delegate-event">


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






/*  <ul class="link-cancle list-reset">  */

let linkCancleTwo = document.querySelector(".link-cancle__two");
let linkCancleThree = document.querySelector(".link-cancle__three");

linkCancleTwo.addEventListener("click", function (event) {
  event.preventDefault();
});

linkCancleThree.onclick = function () {
  return false;
}









/*      <h3>выбор цвета по клику</h3>   */

let divAll = document.querySelectorAll('.pixel');
let select = document.querySelector('.chosen-color');
let checkbox = document.querySelector('.eraser');


for (let div of divAll) {
  div.onclick = function () {
    if (checkbox.checked) {
      div.style.backgroundColor = 'white';
    } else {
      div.style.backgroundColor = select.value;
    }
  }
}










let textarea = document.querySelector('.first-textarea');
let textareaOutput = document.querySelector('.first-output');
let button = document.querySelector('.first-button');


if (textarea) {
textarea.onsubmit = function () {
  textareaOutput.textContent = '0';
}

textarea.oninput = function () {
  textareaOutput.textContent = textarea.value.length;
  if (textarea.value.length > 10) {
    textarea.style = "color: red; border-color: red;"
    button.disabled = true;

  } else {
    textarea.style = "color: none; border-color: none;"
    button.disabled = false;
  }
}
}





const list = document.querySelectorAll('.menu li a');
list.forEach(item => {
  item.addEventListener('click', (e) => {
    list.forEach(el => { el.classList.remove('active'); });
    item.classList.add('active');
  });
});

















