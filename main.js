const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс 
    this.el.classList.remove('visually-hidden');
  },
  hide() {
    // добавим к кнопке класс 
    this.el.classList.add('visually-hidden');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 100 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();







// show-info

const showInfoAll = Array.from(document.querySelectorAll('.show-info'))

showInfoAll.forEach(item => {
  item.addEventListener('click', (e) => {
    item.classList.add('active');
  });
});






// modal html 

const openModal = document.querySelector('.openModal');
const closeModal = document.querySelector('.closeModal');
const modal = document.querySelector('.modal');


if (openModal) {
openModal.addEventListener('click', () => {
  modal.showModal();
})

closeModal.addEventListener('click', () => {
  modal.close();
})

modal.addEventListener('click', (e) => {
  // console.log(e.target);
  if (e.target === modal) modal.close();
})  
}














































