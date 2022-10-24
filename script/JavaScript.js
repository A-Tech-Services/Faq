// references
let accordBtn1 = document.querySelector(".accordbtn1");
let accordBtn2 = document.querySelector(".accordbtn2");
let accordBtn3 = document.querySelector(".accordbtn3");
let accordBtn4 = document.querySelector(".accordbtn4");
let accordBtn5 = document.querySelector(".accordbtn5");

let Head1 = document.querySelector(".head1");
let Head2 = document.querySelector(".head2");
let Head3 = document.querySelector(".head3");
let Head4 = document.querySelector(".head4");
let Head5 = document.querySelector(".head5");

let Icon1 = document.querySelector(".icon1");
let Icon2 = document.querySelector(".icon2");
let Icon3 = document.querySelector(".icon3");
let Icon4 = document.querySelector(".icon4");
let Icon5 = document.querySelector(".icon5");

let accordBody1 = document.querySelector(".accord-body1");
let accordBody2 = document.querySelector(".accord-body2");
let accordBody3 = document.querySelector(".accord-body3");
let accordBody4 = document.querySelector(".accord-body4");
let accordBody5 = document.querySelector(".accord-body5");



accordBtn1.addEventListener('click', ()=>{
    Head1.classList.toggle("bolden");
    accordBody1.classList.toggle("active");
    Icon1.classList.toggle("arrowup");

    Head2.classList.remove("bolden");
    accordBody2.classList.remove("active");
    Icon2.classList.remove("arrowup");
    Head3.classList.remove("bolden");
    accordBody3.classList.remove("active");
    Icon3.classList.remove("arrowup");
    Head4.classList.remove("bolden");
    accordBody4.classList.remove("active");
    Icon4.classList.remove("arrowup")
    Head5.classList.remove("bolden");
    accordBody5.classList.remove("active");
    Icon5.classList.remove("arrowup");
})

accordBtn2.addEventListener('click', ()=>{
    Head1.classList.remove("bolden");
    accordBody1.classList.remove("active");
    Icon1.classList.remove("arrowup");
    Head3.classList.remove("bolden");
    accordBody3.classList.remove("active");
    Icon3.classList.remove("arrowup");
    Head4.classList.remove("bolden");
    accordBody4.classList.remove("active");
    Icon4.classList.remove("arrowup")
    Head5.classList.remove("bolden");
    accordBody5.classList.remove("active");
    Icon5.classList.remove("arrowup");

    Head2.classList.toggle("bolden");
    accordBody2.classList.toggle("active");
    Icon2.classList.toggle("arrowup");
})

accordBtn3.addEventListener('click', ()=>{
    Head1.classList.remove("bolden");
    accordBody1.classList.remove("active");
    Icon1.classList.remove("arrowup");
    Head2.classList.remove("bolden");
    accordBody2.classList.remove("active");
    Icon2.classList.remove("arrowup");
    Head4.classList.remove("bolden");
    accordBody4.classList.remove("active");
    Icon4.classList.remove("arrowup")
    Head5.classList.remove("bolden");
    accordBody5.classList.remove("active");
    Icon5.classList.remove("arrowup");

    Head3.classList.toggle("bolden");
    accordBody3.classList.toggle("active");
    Icon3.classList.toggle("arrowup");
})

accordBtn4.addEventListener('click', ()=>{
    Head1.classList.remove("bolden");
    accordBody1.classList.remove("active");
    Icon1.classList.remove("arrowup");
    Head2.classList.remove("bolden");
    accordBody2.classList.remove("active");
    Icon2.classList.remove("arrowup");
    Head3.classList.remove("bolden");
    accordBody3.classList.remove("active");
    Icon3.classList.remove("arrowup");
    Head5.classList.remove("bolden");
    accordBody5.classList.remove("active");
    Icon5.classList.remove("arrowup");

    Head4.classList.toggle("bolden");
    accordBody4.classList.toggle("active");
    Icon4.classList.toggle("arrowup");
})

accordBtn5.addEventListener('click', ()=>{
    Head1.classList.remove("bolden");
    accordBody1.classList.remove("active");
    Icon1.classList.remove("arrowup");
    Head2.classList.remove("bolden");
    accordBody2.classList.remove("active");
    Icon2.classList.remove("arrowup");
    Head3.classList.remove("bolden");
    accordBody3.classList.remove("active");
    Icon3.classList.remove("arrowup");
    Head4.classList.remove("bolden");
    accordBody4.classList.remove("active");
    Icon4.classList.remove("arrowup");

    Head5.classList.toggle("bolden");
    accordBody5.classList.toggle("active");
    Icon5.classList.toggle("arrowup");
})
