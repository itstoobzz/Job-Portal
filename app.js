//change navbar color
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll>150){
            $(".navbar").css("background","#222");
            $(".navbar").css("box-shadow","rgba(0,0,0,0.1) 0px 4px 12px");
        }
        else{
            $(".navbar").css("background","transparent");
            $(".navbar").css("box-shadow","none");
        }
    })
});

//smooth scroll
var navbarHeight = $(".navbar").outerHeight();
$(".navbar-menu a").click(function(e){
    var targetHref = $(this).attr("href");
    $("html,body").animate({
        scrollTop:$(targetHref).offset().top - navbarHeight
    }, 1000)
    e.preventDefault();
});

//navbar mobile version
const mobile = document.querySelector(".menu-toggle");
const mobileLink = document.querySelector(".navbar-menu");

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth <= 768 && menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.remove("active");
    }
});
//swiper
var swiper = new Swiper(".mySwiper",
{
    loop:true,
    autoplay: {
        delay:2500,
        disableOnInteraction: false,
    },
    slidesPerView:1,
    spaceBetween:10,
    pagination:{
        e1: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        640:{
            slidesPerView:2,
            spaceBetween:20,
        },
        768:{
            slidesPerView:3,
            spaceBetween:40,
        },
        1024:{
            slidesPerView:3,
            spaceBetween:50
         }
    }

})

//signup
// let form= document.getElementById('form')

// if(localStorage.getItem('username') && localStorage.getItem('password')){
//     document.getElementById('username').value = localStorage.getItem('username')
//     document.getElementById('password').value = localStorage.getItem('password')
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let username = document.getElementById('username').value 
//     let password = document.getElementById('password').value 

//     //localstorage

//     localStorage.setItem('username',username)
//     localStorage.setItem('password',password)

//     alert("Your details are stored in local storage!")
// })

//sign up

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In"
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}