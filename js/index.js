window.onload = function () {
	var content = document.getElementById('contents');
	var list = document.getElementById('list');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var preBtn = document.getElementById('preBtn');
	var nextBtn = document.getElementById('nextBtn');



	// 定时器
	var timer;
	var picIndex = 0;

	for(var i =0; i < buttons.length; i ++){
		// 添加下标
		buttons[i].index = i;

		buttons[i].onclick = function () {
			// 1.切换图片
			changPic(this.index);
			// 2.对应焦点显示选中状态
			showBtn(this.index);

			picIndex = this.index;
		}
	}
	// 切换图片
	function changPic(index) {
		list.style.left = -index * 600 + 'px';
	}
	// 切换焦点
	function showBtn(index){
		for(var j = 0; j < buttons.length; j ++){
			if(buttons[j].className == 'select'){
				buttons[j].className = '';
			}
		}
		buttons[index].className = 'select';
	}

	// 点击事件

	content.onmouseover = function () {
		preBtn.style.display = 'block';
		nextBtn.style.display = 'block';

		clearInterval(timer);
	}

	content.onmouseout = function () {
		preBtn.style.display = 'none';
		nextBtn.style.display = 'none';

		timer = setInterval(nextAction, 3000);
	}

	preBtn.onclick = preAction;

	function preAction(){
		picIndex --;
			if (picIndex < 0) {
				picIndex = 4;
			}
			changPic(picIndex);
			showBtn(picIndex);
	}

	nextBtn.onclick = nextAction;
	function nextAction(){
		picIndex ++;
			if(picIndex > 4){
				picIndex = 0;
			}
			changPic(picIndex);
			showBtn(picIndex);
	}

	timer = setInterval(nextAction, 1000);



}