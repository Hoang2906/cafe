let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)
let search_btn = $('#search-btn')
let search_form = $('.search-form')
let cart_container = $('.cart-container')
let cart_btn = $('#cart-btn')
let menu_btn = $('#menu-btn')
let navbar = $('.navbar');
//show-Serchbtn
search_btn.onclick = () => {
     search_form.classList.toggle('active')
}

cart_btn.onclick = () =>{
    cart_container.classList.toggle('active')
}

menu_btn.onclick = () =>{
    navbar.classList.toggle('active');
 
}