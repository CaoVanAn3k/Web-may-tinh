const menuicon = document.querySelector('.heading__menu__main');
const clearicon = document.querySelector('.main__icon__left__icon__clear');
const icon_search = document.querySelector('.icon-search ');
const icon_shope = document.querySelector('.icon-shoppe ');
const icon_close = document.querySelector('.main__shop__right__close');
const close_input_search = document.querySelector('.close-input');
const icon_bottom1 = document.querySelector('.bottom1 ');
const icon_bottom2 = document.querySelector('.bottom2 ');

menuicon.onclick = () => {
    document.querySelector('.main__menu__left').style.display = "block";
}
clearicon.onclick = () => {
    document.querySelector('.main__menu__left').style.display = "none";
}


icon_search.onclick = () => {
    document.querySelector('.heading__main__search').style.display = "block";
    document.querySelector('.main__shop__right').style.display = "none";
}
close_input_search.onclick = () => {
    document.querySelector('.heading__main__search').style.display = "none";
}

icon_shope.onclick = () => {
    document.querySelector('.main__shop__right').style.display = "block";
    document.querySelector('.heading__main__search').style.display = "none";

}
icon_close.onclick = () => {
    document.querySelector('.main__shop__right').style.display = "none";

}
let isClick = false;
const right_icon = document.querySelectorAll('.bottom1');
const left_icon = document.querySelectorAll('.bottom2');
const menu_icon = document.querySelectorAll('.content__list__menu');
const Menuchild = [...menu_icon];
console.log(Menuchild)
const MenuParent = document.querySelectorAll('.information__content__list');
MenuParent.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (!isClick) {
            isClick = true;
            right_icon[index].style.display = 'none';
            left_icon[index].style.display = "block";
            menu_icon[index].classList.add("active");
        } else {
            isClick = false;
            right_icon[index].style.display = 'block';
            left_icon[index].style.display = "none";
            menu_icon[index].classList.remove("active");
        }
    })
})