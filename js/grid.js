let stretch = 'stretch';


let gECommon = document.querySelector(".grid-example-common");
let gECommonInner = gECommon.querySelectorAll(".grid-example__inner");
let gEItem = gECommon.querySelector('.item');

let gEAlignContent = gECommon.querySelector('.select-align-content');
let gEJustifyContent = gECommon.querySelector('.select-justify-content');
let gEAlignSelf = gECommon.querySelector('.select-align-self');
let gEJustifySelf = gECommon.querySelector('.select-justify-self');
let gEAlignItems = gECommon.querySelector('.select-align-items');
let gEJustifyItems = gECommon.querySelector('.select-justify-items');

let defaultAlignContent = stretch;
let defaultJustifyContent = stretch;
let defaultAlignSelf = stretch;
let defaultJustifySelf = stretch;
let defaultAlignItems = stretch;
let defaultJustifyItems = stretch;



gEAlignContent.addEventListener('change', function () {
  defaultAlignContent = this.value;
  gECommonInner[0].style = 'place-content:' + defaultAlignContent + ' ' + defaultJustifyContent + ';'
});
gEJustifyContent.addEventListener('change', function () {
  defaultJustifyContent = this.value;
  gECommonInner[0].style = 'place-content:' + defaultAlignContent + ' ' + defaultJustifyContent + ';'
});



gEAlignSelf.addEventListener('change', function () {
  defaultAlignSelf = this.value;
  gEItem.style = 'place-self:' + defaultAlignSelf + ' ' + defaultJustifySelf + ';'
});
gEJustifySelf.addEventListener('change', function () {
  defaultJustifySelf = this.value;
  gEItem.style = 'place-self:' + defaultAlignSelf + ' ' + defaultJustifySelf + ';'
});



gEAlignItems.addEventListener('change', function () {
  gEAlignItems = this.value;
  gECommonInner[0].style = 'place-items:' + gEAlignItems + ' ' + defaultJustifyItems + ';'
});

gEJustifyItems.addEventListener('change', function () {
  defaultJustifyItems = this.value;
  gECommonInner[0].style = 'place-items:' + gEAlignItems + ' ' + defaultJustifyItems + ';'
});

