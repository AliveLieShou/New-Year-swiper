//初始化Swiper
window.onload = function(){
	var swiper = new Swiper('.swiper-container',{
		effect:'cube',
		cube:{
			slideShadows: false,
			shadow: false
		},
        pagination: '.swiper-pagination',
		paginationClickable: true,
        direction: 'vertical',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		},
		//来回切换也重复运行动画
        onSlideChangeEnd: function(swiper){ 
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		} 	
	})

	var myaudio = document.getElementById('myaudio');
	//注意区分Zepto和jQuery，要不然报错
	//麻蛋，单双击区分singleTap和doubleTap
	Zepto('.audio').singleTap(function(){
		if(myaudio.paused){
			myaudio.play();
//			$('.audio').attr('background','url(img/music_c0fda01.gif) no-repeat center');
		}else{
			myaudio.pause();
//			$('.audio').removeAttr('background');
		}
	})
}   