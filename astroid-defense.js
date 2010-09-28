/**
 Defend your website against astroid attacks with this script.

 by bl4k.
*/
(function() {
	function addEvent( obj, type, fn ) {
		if (obj.addEventListener)
			obj.addEventListener( type, fn, false );
		else if (obj.attachEvent) {
			obj["e"+type+fn] = fn;
			obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
			obj.attachEvent( "on"+type, obj[type+fn] );
		}
	};

	function removeEvent( obj, type, fn ) {
		if (obj.removeEventListener)
			obj.removeEventListener( type, fn, false );
		else if (obj.detachEvent) {
			obj.detachEvent( "on"+type, obj[type+fn] );
			obj[type+fn] = null;
			obj["e"+type+fn] = null;
		}
	};
	
	function fireFunny() {
		this.navigation = document.createElement('div');
		this.navigation.className = "lolz";
		with ( this.navigation.style ) {
			font = "Arial,sans-serif";
			position = "fixed";
			top = "20%";
			right = "50%";
			margin = "auto";
			textAlign = "center";
		}
		this.navigation.innerHTML = '<h2>LOLZ</h2><object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/okqEVeNqBhc?fs=1&amp;hl=en_US&autoplay=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/okqEVeNqBhc?fs=1&amp;hl=en_US&autoplay=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object>';
		document.body.appendChild(this.navigation);
	};
		
	var check = setInterval(function () {
		var v = document.getElementsByClassName('ASTEROIDSYEAH');
		// Mess with the canvas if you want
		var c = document.getElementsByTagName('canvas')[0];
		if(v.length) {
			clearInterval(check);
			var eventKeypress = function(event) {
					event = event || window.event;				
						alert('Settings Phasers To Astley!');
						return false;
			};
			addEvent(window.document, 'keydown', eventKeypress);
			fireFunny();
		}
	}, 1000);	
})();
