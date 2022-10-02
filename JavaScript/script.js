// references
let Faq1 = document.querySelector(".faq1");
let Faq2 = document.querySelector(".faq2");
let Faq3 = document.querySelector(".faq3");
let Faq4 = document.querySelector(".faq4");
let Faq5 = document.querySelector(".faq5");

let Result1 = document.querySelector(".faq1Result");
let Result2 = document.querySelector(".faq2Result");
let Result3 = document.querySelector(".faq3Result");
let Result4 = document.querySelector(".faq4Result");
let Result5 = document.querySelector(".faq5Result");

let Arrowup = document.querySelector(".arrowUp");
let Arrowdown = document.querySelector(".down");
let Clicked = false;

Faq1.addEventListener("click", () => {
    Clicked = true;

    Arrowdown.classList.add("active");
    Arrowup.classList.add("down");
    Result1.classList.add("active");

    if(Clicked == true){
        Faq1.addEventListener("click", () =>{
            Arrowdown.classList.remove("active");
            Arrowup.classList.remove("down");
            Result1.classList.remove("active");

            Clicked = false;
        })
    }

})

Faq2.addEventListener("click", () => {
    Arrowdown.classList.add("active");
    Arrowup.classList.add("down");
    Result2.classList.add("active");
})

Faq3.addEventListener("click", () => {
    Arrowdown.classList.add("active");
    Arrowup.classList.add("down");
    Result3.classList.add("active");
})

Faq4.addEventListener("click", () => {
    Arrowdown.classList.add("active");
    Arrowup.classList.add("down");
    Result4.classList.add("active");
})

Faq5.addEventListener("click", () => {
    Arrowdown.classList.add("active");
    Arrowup.classList.add("down");
    Result5.classList.add("active");
})