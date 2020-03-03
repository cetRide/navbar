let sidenav = document.getElementById("sidenav");
let humburger = document.getElementById("humburger");
let isOpen = true;
humburger.addEventListener("click", function () {
    let x = window.matchMedia('(max-width: 450px)');
    if (isOpen) {
        if (x.matches) {
            sidenav.style.width = document.body.clientWidth + 'px';
        } else {
            sidenav.style.width = "250px";
        }
    } else {
        sidenav.style.width = "0";
    }
    isOpen = !isOpen;
});

function closeNav() {
    sidenav.style.width = "0";
    isOpen = true;
}
