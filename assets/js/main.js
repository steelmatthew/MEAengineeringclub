/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
// const email = localStorage.getItem("userEmail");

// if(!email){
// 	window.location = "signin.html";
// }

function showSecret2(){
	window.location = "Secpg02.html";
}

var num=0;
function showSecret(total=0){
	if(num++===total){
		window.location = "Spg1.html";
	}
}

function showText(e){
	const ref = "#"+e.parentNode.id+" .disappearingText";
	const disp = document.querySelector(ref).style.display;
	document.querySelector(ref).style.display = disp=="block"?"none":"block";
}

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpeoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

})(jQuery);