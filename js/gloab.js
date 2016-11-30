var gettt = true;
var index_of = 0;
$(function() {
	auto_height();
	$('.mesg_list').bxSlider({
		controls: false,
		auto: true,
		pause: 5000,
		speed: 500
	});
	
	$('.bxslider').bxSlider({
		controls: false,
		auto: false,
		pause: 5000,
		speed: 300
	});
	$('.m_lun').bxSlider({
		controls: false,
		auto: false,
		pause: 5000,
		speed: 500
	});
	document.body.addEventListener('touchstart', function() {});
	setTimeout(function() {
		auto_height();
		if ($("#gloab").hasClass("pc")) {
			$("#banner_vedio").attr("autoplay", "autoplay");
			$("#banner_vedio").get(0).play();
		}
		var trans=$(".bxslider_box .bxslider").css(".transform");
	}, 10)

	


	$(".bxslider li").on("click", function() {
		var index = $(this).index();
		var _this = $(this);
		if (_this.find(".banner_bcaaa").get(0).paused) {
//			for(var a=0;a<$(".bxslider li").length;a++){
//				$(".bxslider li:eq("+a+")").find(".banner_bcaaa").get(0).pause();
//			}
			_this.find(".banner_bcaaa").get(0).play();
				_this.find(".btn_bofang,.vedio_boot_mesg").hide();
				$(".bxslider_box .bx-has-pager").hide();
		} else {
			_this.find(".banner_bcaaa").get(0).pause();
			_this.find(".btn_bofang,.vedio_boot_mesg").show();
			$(".bxslider_box .bx-has-pager").show();
		}

	});
		
	var a=[0,1,2,3,4,5,6];
	var get_arr=getArrayItems(a,3);
	var new_json=[
	["img/head_1.jpg","陈喧","十上建筑","17"],
	["img/head_2.jpg","程艳春","C+ Architects","10"],
	["img/head_3.jpg","于魁","HAPPEN建筑","10"],
	["img/head_4.jpg","程晖","唯木空间设计","12"],
	["img/head_7.jpg","刘小普","Pu建筑","8"],
	["img/head_6.jpg","关天颀","空间进化","20"],
	["img/head_5.jpg","张淼","MAT Office","12"]
	]
	var html_box='';
		for(var i=0;i<get_arr.length;i++){
			var center="";
			if(i==1){
				center="bcf";
			}
			var desi_html='<div class="desi_list_here"><div class="desi_img_box"><img src="'+new_json[get_arr[i]][0]+'"></div>'
						+'<div class="list_here_boot '+center+'"><h2 class="boot_name">'+new_json[get_arr[i]][1]+'</h2><span class="studio_name">'+new_json[get_arr[i]][2]+'</span><span class="work_time">'+new_json[get_arr[i]][3]+'年设计经验</span></div></div>'
			html_box+=desi_html;			
		}
	$(".desi_list").html(html_box);
});

window.onresize = function() {
	auto_height();
}

window.onscroll = function() {
	BottomJumpPage();
}


function auto_height() {
	jiance();
	var vedio_h = parseInt($(".bxslider_box").width()) * .5633;
	var heightttt = $(".nacb_typea").width();
	var herhe = $(".img_box").height();
	var window_height = $(window).height();
	var window_heighta = document.body.offsetHeight;
	var banner_height = $(".banner_center").height();
	var nav_here = $(".center_nav").height();
	var body_width = $(window).width();
	$(".mesg_box").height(herhe);
	$(".bxslider_box").height(vedio_h);
	$(".nacb_typea").css("line-height", heightttt + "px");
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
	var heighta = $(".banner").height();
	var bf_src = (scrollTop / heighta) * 2;
	if (bf_src > .97) {
		bf_src = .97;
	}
	if (scrollTop >= heighta) {
		bf_src = 1;
	}
	$(".nav_bc,.nav_btn i").css("opacity", bf_src);
	if (bf_src > 0.23) {
		$(".banner_nav").addClass("top_center");
	}else{
		$(".banner_nav").removeClass("top_center");
	}
	if (bf_src > 0.63) {
		$(".banner_nav").addClass("center");
	} else {
		$(".banner_nav").removeClass("center");
	}
}

//function myFunction(){
//	alert("可以开始播放视频");
//}

function btn_click(index) {
	$(".bxslider li:eq(" + index + "),.btn_nav .van_btn:eq(" + index + ")").addClass("active").removeClass("activea").siblings().addClass("activea").removeClass("active");
}

function getArrayItems(arr, num) {
	
    //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
    var temp_array = new Array();
    for (var index in arr) {
        temp_array.push(arr[index]);
    }
    //取出的数值项,保存在此数组
    var return_array = new Array();
    for (var i = 0; i<num; i++) {
        //判断如果数组还有可以取出的元素,以防下标越界
        if (temp_array.length>0) {
            //在数组中产生一个随机索引
            var arrIndex = Math.floor(Math.random()*temp_array.length);
            //将此随机索引的对应的数组元素值复制出来
            return_array[i] = temp_array[arrIndex];
            //然后删掉此索引的数组元素,这时候temp_array变为新的数组
            temp_array.splice(arrIndex, 1);
        } else {
            //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
            break;
        }
    }
    return return_array;
  
}