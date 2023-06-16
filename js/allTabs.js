const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
   menu_btn.classList.toggle('is-active'); 
   mobile_menu.classList.toggle('is-active'); 
});

function wait_anim() 
{
    setTimeout(function()
    {
        window.location.href = "indexb.html";
    }, 1000);
}

const buttons = document.querySelectorAll('.contact');
buttons.forEach(btn => {
    btn.addEventListener('click', function(e)
    {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() =>
        {
            ripples.remove()
        }, 1000);
    })
})

function redirect() 
{
    setTimeout(function()
    {
        location.replace('https://ohaiko8.github.io/indexb.html#contactform')
    }, 1000);
}

window.onload = function(){
        let loader = document.getElementById("preloader");
        loader.style.display = "none";
        const logost = document.getElementById("header");
        logost.classList.remove("vanished");
};
