var gettt = true;
var index_of=0;
$(function() {
	lun_nav();
//	setInterval(function(){
//		index_of++;
//		if(index_of>2){
//			index_of=0;
//		}
//		btn_click(index_of);
//	},6000);
	$('.mesg_list').bxSlider({controls:false,auto:true, pause:5000,speed:500});
//	document.body.addEventListener('touchstart', function() {});
//	setTimeout(function() {
//		auto_height();
//		if ($("#gloab").hasClass("pc")) {
//			$("#banner_vedio").attr("autoplay", "autoplay");
//		}
//		var vedio_h=parseInt($(".banner_bcaaa:eq(0)").width())*.5;
//		$(".bxslider").height(vedio_h);
//	}, 10)
//	
	document.body.addEventListener('touchstart', function () { }); 
		setTimeout(function(){
			auto_height();
			if($("#gloab").hasClass("pc")){
			$("#banner_vedio").attr("autoplay","autoplay");
                        $("#banner_vedio").get(0).play();
		}
		},10)



	var gett = 0;
	var myVideo = document.getElementsByTagName('video')[0];
	$(".video_box").on("click", function() {
		if (gett == 0) {
			$(".bg_bc,.btn_bf").hide();
			myVideo.play();
			gett = 1;
		} else {

			gett = 0;
		}

	})
		$(".bxslider li").on("click",function(){
			var index=$(this).index();
			var _this=$(this);
			if(_this.find(".banner_bcaaa").get(0).paused){
				_this.find(".banner_bcaaa").get(0).play();
				_this.find(".btn_bofang,.vedio_boot_mesg").hide();
				$(".btn_nav").hide();
				
			}else{
				_this.find(".banner_bcaaa").get(0).pause();
				_this.find(".btn_bofang,.vedio_boot_mesg").show();
				$(".btn_nav").show();
			}
			
		});

	window.onresize = function() {
		auto_height();
		var vedio_h=parseInt($(".banner_bcaaa:eq(0)").width())*.5;
		$(".bxslider").height(vedio_h);
	}
	
	window.onscroll=function(){
		BottomJumpPage();
	}


	function auto_height() {
		jiance();
		var heightttt=$(".nacb_typea").width();
		var herhe=$(".img_box").height();
		$(".nacb_typea").css("line-height",heightttt+"px");
		var window_height = $(window).height();
		var window_heighta = document.body.offsetHeight;
		var banner_height = $(".banner_center").height();
		var nav_here = $(".center_nav").height();
		var body_width = $(window).width();
		$(".mesg_box").height(herhe);
		if (body_width > 580) {
			var shengyu = (window_height - banner_height - nav_here);
			if (shengyu > 0) {
				//		$(".banner .language").css("margin-top",-shengyu);
				$(".banner_center").css({
					"padding-top": shengyu * .32,
					"padding-bottom": shengyu * .32
				});
				$(".center_nav").css({
					"padding-top": shengyu * .16,
					"padding-bottom": shengyu * .2
				});
			}
			var bner = $(".banner").height();
			var vedio_h = $("#banner_vedio").height();
			var bcc_h = $(".banner_bc").height();
			$(".banner_bc").css("margin-top", -(bcc_h - bner) / 2);
			$("#banner_vedio").css("margin-top", -(vedio_h - bner) / 2);
		} else {
			var widtha = $(".vedio_box").width();
			$(".vedio_box").css("height", 0.5625 * widtha);
		}
	}

	function jiance() {
		var system = {
			win: false,
			mac: false,
			xll: false
		};
		//检测平台
		var p = navigator.platform;
		system.win = p.indexOf("Win") == 0;
		system.mac = p.indexOf("Mac") == 0;
		system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
		//跳转语句，如果是手机访问就自动跳转到wap.baidu.com页面
		if (system.win || system.mac || system.xll) {
			$("#gloab").addClass("pc").removeClass("iphone");
		} else {
			$("#gloab").addClass("iphone").removeClass("pc");
			$("#gloab .video_deside").remove();
		}
	}

	function BottomJumpPage() {
		var scrollTop = $(this).scrollTop();
		var heighta=$(".banner").height();
		var bf_src=(scrollTop/heighta)*2;
		if (bf_src>.97){
			bf_src=.97;
		}
		if(scrollTop>=heighta){
			bf_src=1;
		}
		$(".nav_bc,.nav_btn i").css("opacity",bf_src);
		if(bf_src>0.63){
			$(".banner_nav").addClass("center");
		}else {
			$(".banner_nav").removeClass("center");
		}
	}
	
})


function lun_nav(){
	var length=$(".bxslider li").length;
	var html='';
	for (var i=0;i<length;i++){
		var tet="";
		if(i==0){
			tet='<span class="van_btn active"></span>';
		}else{
			tet='<span class="van_btn activea"></span>';
		}
		html+=tet;
	}
	$(".btn_nav").html(html);
	$(".van_btn").on("click",function(){
		var index=$(this).index();
		btn_click(index);
		index_of++;
	});
}
function btn_click(index){
	$(".bxslider li:eq("+index+"),.btn_nav .van_btn:eq("+index+")").addClass("active").removeClass("activea").siblings().addClass("activea").removeClass("active");
}
//
//$(".int_list").on("mouseenter",function(){
//	var height=$(this).find(".boot_mesg_box").height()+30;
//	$(this).find(".list_boot_mesg").stop(true).animate({paddingBottom:height},300,"swing",function(){
//		$(this).find(".iconfont").addClass("icon-jian").removeClass("icon-jia");
//	});
//	
//}).on("mouseleave",function(){
//	$(this).find(".list_boot_mesg").stop(true).animate({paddingBottom:0},300,"swing",function(){
//		$(this).find(".iconfont").addClass("icon-jia").removeClass("icon-jian");
//	});
//	
//});
