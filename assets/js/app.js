var menu_button = document.querySelector(".open-menu");
menu_button.addEventListener('click', openMenu);

var close_menu_button = document.querySelector(".close-menu");
menu_button.addEventListener('click', closeMenu);

var menu_block = document.querySelector("section.menu");

function openMenu (event){
	// event.stopImmediatePropagation()
	menu_block.style.display = 'block';
}

function closeMenu (event){
	// event.stopImmediatePropagation()
	menu_block.style.display = 'none';
	console.log('close');
}