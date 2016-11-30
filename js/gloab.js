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
		speed: 500
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
	["img/head_1.jpg","陈喧","设计是服务业，设计师工作的核心是解决问题：解决功能的合理性，解决视觉的美感，解决心理的需求。最后可以加上一点自己对设计的具有个体性的独特的认知。”"],
	["img/head_2.jpg","程艳春","在我看来，建筑首先是人与环境发生关系的媒介，人、建筑、环境这三个要素都是不能忽略的，所以设计在解决问题的同时，也是在协调这三者之间的关系……房子应该像衣服一样是身体的延伸，从细胞到房子甚至宇宙都是层层包裹且有秩序的联系到一起。”"],
	["img/head_3.jpg","于魁","'住艺'的存在，推动了好的设计在社会上被接纳的效率和可能性，他的话语权和认知度关系着很多真正有水准的设计并能让更多的人享受到，应用到好的设计。”"],
	["img/head_4.jpg","程晖","作为一个独立设计师，我享受自由设计的快乐，享受作品一点点实现的成就感；在住艺平台上，有一群志趣相投的设计师同伴，让我们一起打造新时代中国人心目中的理想家。”"],
	["img/head_7.jpg","刘小普","'住艺'，居住的艺术，讨论的就是我们的家，'家'不是居住的机器，不是材料的堆砌，不是一味的个性彰显，更应该是个有连结，有温度的场域，是个可以栖息身心，可以交流情感，可以有家族传承的容器。”"],
	["img/head_6.jpg","关天颀","'住艺'是个朝气蓬勃，有态度，有腔调的新媒体，更注重当下与未来设计精神～我自认为我是这样的类型，那么物以类聚喽!……我们注重空间设计的完整性，强调空间内外的'无边界'，注重场地特征与空间尺度，对于‘饰抱’以谨慎的态度”"],
	["img/head_5.jpg","张淼","设计对我们而言是观察世界的一种方式。设计不仅为功能活动提供空间形式，更多地是在塑造生活本身。MAT Office坚持以研究型设计方法切入实践，寻求跨越等级与差异的设计策略，并在城市、建筑、室内等多尺度上为空间提供精准的解决方案。”"]
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