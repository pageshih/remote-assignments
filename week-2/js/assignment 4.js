const welcome = document.querySelector("h2");
const burgerBtn = document.querySelector("#burgerBtn");
const closeBtn = document.querySelector("#closeBtn");
const sideNav = document.querySelector(".side");
const showMoreBtn = document.querySelector("#showMoreBtn");
const moreBox = document.querySelector("#moreBox");

welcome.addEventListener("click",()=>{
    welcome.innerHTML = "Have a Good Time!";
});

burgerBtn.addEventListener("click", ()=>{
    sideNav.style = "display: flex";
});

closeBtn.addEventListener("click", ()=>{
    sideNav.style = "display: none";
});

showMoreBtn.addEventListener("click", ()=>{
    moreBox.style = "display: flex;"
});