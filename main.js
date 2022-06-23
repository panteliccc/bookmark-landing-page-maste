var openNav = document.querySelector('.open-nav');
var nav = document.querySelector('.mobile-nav');
var close = document.querySelector('.close');

openNav.addEventListener('click',function(){
    nav.style.display = "block"
});
close.addEventListener('click',function(){
    nav.style.display = "none"
});
window.addEventListener('resize' ,function(){
    if(this.innerWidth >= 800) {
        nav.style.display = "none";
    }

});


var tabBtt = document.getElementsByClassName("tab");
var tabContent = document.getElementsByClassName("tab-content")

$('.tabs li').click(function(){
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active-tab");
    }
    var thisid = this.id;
    tabContent[thisid].classList.add("active-tab")

    for (let i = 0; i < tabBtt.length; i++) {
        tabBtt[i].classList.remove("active")
    }
    this.classList.add("active");
});

var ind = true;
$('.aq').click(function(){
    if(ind == true) {
        $(this).children('p.q').css('display','block');
        ind = false;
    }
    else {
        $(this).children('p.q').css('display','none');
        ind = true;
    }
});