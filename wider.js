window.___GitHubWider_resetWidth = function(){
	var internalReset = function(){				
			var slider = document.getElementById('slider');
			if(slider) {
				slider.style.overflow = "visible";
				slider.style.marginLeft = "-50px";
			} else {
				var files = document.getElementById('files');
				if(!files) {
					return;
				}
			}
			var frames = document.getElementsByClassName('frame');
			for(var i = 0; i < frames.length; i++) {
				if(frames[i].className == 'frame') {
					frames[i].style.display = "none";
				}
			}
			var containers = document.getElementsByClassName('container');
			for(var i = 0; i < containers.length; i++){
				containers[i].style.width = "auto";
				containers[i].style.margin = "10px 70px";
			}
			containers = document.getElementsByClassName('frame-center');
			for(var i = 0; i < containers.length; i++){
				containers[i].style.width = "auto";
				containers[i].style.minWidth = "920px";
				containers[i].style.maxWidth = (window.innerWidth - 60) + 'px';
			}
		};
	internalReset();
	setTimeout(internalReset, 300);
	setTimeout(internalReset, 900);
};
