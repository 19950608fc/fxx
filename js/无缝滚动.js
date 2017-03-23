window.onload = function(){
	var box = document.getElementById('box');
	var ul = box.children[0];

	var num = 0;
	setInterval(function(){
		num -= 1;

		if(num <= -10000){
			num = 0;
		}

		ul.style.left = num + 'px';
	}, 5);

}
