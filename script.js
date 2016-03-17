var scrollValue;
var lastPosition = 0;
var navMenu = $('nav');
var menuHeight = navMenu.outerHeight();

function moveMenu() {
	scrollValue = $(this).scrollTop();
	if(scrollValue>lastPosition) {
		//We scrollen naar beneden
		console.log('We scrollen naar beneden');
		lastPosition = scrollValue;
		navMenu.css('top', -menuHeight + 'px')
	} else {
		//We scrollen omhoog
		console.log('Get the menu');
		lastPosition = scrollValue;
		navMenu.css('top', 0)
	}

}

$(window).on('scroll', moveMenu);