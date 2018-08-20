function toggle(id) {
	let el = document.getElementById(id);
	let menuBtn = document.getElementById('menu-btn');
	el.classList.toggle('hide');
	menuBtn.classList.toggle('active');
}


/*mobile*/
function scrollToSection(id){
  let el = document.getElementById(id)
  el.scrollIntoView({behavior:"smooth", block: "start"});
  toggle('mobile-navbar');
}