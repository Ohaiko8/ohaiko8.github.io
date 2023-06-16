document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})

//setTimeout(function()
//{
//    let loader = document.getElementById("preloader");
//    loader.style.display = "none";
//}, 2833);
window.onload = function(){
        let loader = document.getElementById("preloader");
        loader.style.display = "none";
        const logost = document.getElementById("header");
        logost.classList.remove("vanished");
};
