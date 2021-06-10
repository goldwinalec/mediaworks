// открытие-закрытие модального окна
let login = document.querySelector('.header__login');
let closeButton = document.querySelector('.modal__close');
let page = document.querySelector('.page');

login.onclick = function (event) {
    event.preventDefault();
    let modal = document.querySelector('.modal');
    modal.classList.add('modal--opened');
    page.classList.add('page--disabled');
    modal.addEventListener("click", (event) => {
        if (event.target.closest(".modal__close") ||
            event.target.classList.contains("modal")) {
            modal.classList.remove('modal--opened');
            page.classList.remove('page--disabled');
        }
    });

}