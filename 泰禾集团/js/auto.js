window.onload = function(){
			//可视区
			var cWidth = document.documentElement.clientWidth;
			var cHeight = document.documentElement.clientHeight;
			//文档尺寸
			var sWidth = document.documentElement.scrollWidth;
			var sHeight = document.documentElement.scrollHeight;
			var layer = document.getElementById('layer');
			var loginBox = document.getElementById('login-box');
			var loginBtn = document.getElementById('login-btn');
			var close = document.getElementById('close');
			var person = document.getElementById('person');
			var personBox=document.getElementById('person-box');
			var personClose = document.getElementById('personClose');
			//设置弹层left top
			
			function resize(){
				var cWidth = document.documentElement.clientWidth;
				var cHeight = document.documentElement.clientHeight;
				var fLeft = Math.floor((cWidth - loginBox.offsetWidth)/2);
				var fTop = Math.floor((cHeight - loginBox.offsetHeight)/2);
				loginBox.style.left = fLeft+'px';
				loginBox.style.top = fTop+'px';
				var pLeft = Math.floor((cWidth - personBox.offsetWidth)/2);
				var pTop = Math.floor((cHeight - personBox.offsetHeight)/2);
				personBox.style.left = pLeft+'px';
				personBox.style.top = pTop+'px';
			}
			// 弹层距离左侧left
			// 登录
			loginBtn.onclick = function(){
				layer.style.display = 'block';
				layer.style.height = sHeight +'px';console.log(cHeight);
				loginBox.style.display = 'block';
				resize();
			}
			close.onclick = function(){
				loginBox.style.display = 'none';
				layer.style.display = 'none';
			}
			// 完善个人信息
			person.onclick = function(){
				layer.style.display = 'block';
				layer.style.height = sHeight +'px';console.log(cHeight);
				personBox.style.display = 'block';
				resize();
			}
			personClose.onclick = function(){
				personBox.style.display = 'none';
				layer.style.display = 'none';
			}
			window.onresize = function(){
				resize();
			}
		
		}
