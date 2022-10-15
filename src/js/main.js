document.addEventListener('DOMContentLoaded', function() {
    // Get all elements in your page


let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');
    let selectBody = document.querySelectorAll('.select__body');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle 
        )
    });
    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }


    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};


select();

let burger = document.getElementById('burger');
    burgerMenu = document.getElementById('burgerMenu');
    logo = document.getElementById('logo');
    navList = document.getElementById('navList');
burger.onclick = function() {
    burger.classList.toggle('is-active');
    burgerMenu.classList.toggle('is-active');
    logo.classList.toggle('is-active');
    navList.classList.toggle('is-active');
};
});