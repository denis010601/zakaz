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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICAvLyBHZXQgYWxsIGVsZW1lbnRzIGluIHlvdXIgcGFnZVxuXG5cbmxldCBzZWxlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlbGVjdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX2hlYWRlcicpO1xuICAgIGxldCBzZWxlY3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9faXRlbScpO1xuICAgIGxldCBzZWxlY3RCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9fYm9keScpO1xuXG4gICAgc2VsZWN0SGVhZGVyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RUb2dnbGUgXG4gICAgICAgIClcbiAgICB9KTtcbiAgICBzZWxlY3RJdGVtLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RDaG9vc2UpXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzZWxlY3RUb2dnbGUoKSB7XG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHNlbGVjdENob29zZSgpIHtcbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLmlubmVyVGV4dCxcbiAgICAgICAgICAgIHNlbGVjdCA9IHRoaXMuY2xvc2VzdCgnLnNlbGVjdCcpLFxuICAgICAgICAgICAgY3VycmVudFRleHQgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fY3VycmVudCcpO1xuICAgICAgICBjdXJyZW50VGV4dC5pbm5lclRleHQgPSB0ZXh0O1xuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG5cbiAgICB9XG5cbn07XG5cblxuc2VsZWN0KCk7XG5cbmxldCBidXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyJyk7XG4gICAgYnVyZ2VyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXJNZW51Jyk7XG4gICAgbG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvJyk7XG4gICAgbmF2TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZMaXN0Jyk7XG5idXJnZXIub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICBidXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgIGxvZ28uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgbmF2TGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbn07XG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==