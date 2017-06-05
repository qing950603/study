window.onresize = r;
			function r(resizeNum){
				var winW = window.innerWidth;
				document.getElementsByTagName("html")[0].style.fontSize=winW*0.03125+"px";
				if(winW>window.screen.width&&resizeNum<=10){
					setTimeout(function(){
					r(++resizeNum);
				}, 100);
			}
			else{
			}
		};
		setTimeout(r(0), 100);