// build time:Tue Aug 22 2017 16:33:23 GMT+0800 (中国标准时间)
$(document).ready(function(){t();NexT.utils.needAffix()&&i();a();function t(){var t=".post-toc";var i=$(t);var a=".active-current";i.on("activate.bs.scrollspy",function(){var i=$(t+" .active").last();e();i.addClass("active-current")}).on("clear.bs.scrollspy",e);$("body").scrollspy({target:t});function e(){$(t+" "+a).removeClass(a.substring(1))}}function i(){var t=$(".header-inner").height();var i=parseInt($(".main").css("padding-bottom"),10);var a=CONFIG.sidebar.offset_float===0?t+CONFIG.sidebar.offset:t;$(".sidebar-inner").affix({offset:{top:a,bottom:i}});$(document).on("affixed.bs.affix",function(){e(document.body.clientHeight-100)})}function a(){var t;$(window).on("resize",function(){t&&clearTimeout(t);t=setTimeout(function(){var t=document.body.clientHeight-100;e(t)},0)});e(document.body.clientHeight-100);var i=NexT.utils.getScrollbarWidth();$(".post-toc").css("width","calc(100% + "+i+"px)")}function e(t){t=t||"auto";$(".post-toc").css("max-height",t)}});$(document).ready(function(){var t=$("html");var i=200;var a=$.isFunction(t.velocity);$(".sidebar-nav li").on("click",function(){var t=$(this);var e="sidebar-nav-active";var o="sidebar-panel-active";if(t.hasClass(e)){return}var s=$("."+o);var n=$("."+t.data("target"));a?s.velocity("transition.slideUpOut",i,function(){n.velocity("stop").velocity("transition.slideDownIn",i).addClass(o)}):s.animate({opacity:0},i,function(){s.hide();n.stop().css({opacity:0,display:"block"}).animate({opacity:1},i,function(){s.removeClass(o);n.addClass(o)})});t.siblings().removeClass(e);t.addClass(e)});$(".post-toc a").on("click",function(i){i.preventDefault();var e=NexT.utils.escapeSelector(this.getAttribute("href"));var o=$(e).offset().top;a?t.velocity("stop").velocity("scroll",{offset:o+"px",mobileHA:false}):$("html, body").stop().animate({scrollTop:o},500)});var e=$(".post-toc-content");var o=CONFIG.sidebar.display==="post"||CONFIG.sidebar.display==="always";var s=e.length>0&&e.html().trim().length>0;if(o&&s){CONFIG.motion?NexT.motion.middleWares.sidebar=function(){NexT.utils.displaySidebar()}:NexT.utils.displaySidebar()}});
//rebuild by neat 