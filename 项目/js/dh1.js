$(function(){
	
	jQuery(function($) {
		  $(document).ready( function() {
		  	$('#nav-wrap').stickUp();
		  });
		});
	
	setInterval(function(){
		$(".promptbox").animate({'top':'-33'},500).animate({'top':'-66'},500)						
	},3000)
	
	$("#nav-list a").hover(
  		function () {	
    		$(this).css('color','#2ad0ff');
  		},
  		function () {
    		$(this).css('color','#fff');
 		 }
	);
	
	$(".sk-list .bac").hover(
  		function () {			   		
    		$(this).next($('.hid')).css('display','block');
    		$(this).css('display','none');
  		},
  		function () {
    		$(this).next($('.hid')).css('display','none');
    		$(this).css('display','block');
 		 }
	);
	$("#zone li").hover(
  		function () {
  			$("#zone li").removeClass('zone-ac')
    		$(this).addClass('zone-ac');
  		},function () {
    		$(this).removeClass('zone-ac');
    		$(this).addClass('zone-ac');
 		 }
  	);
  	
  	
  	$("#shopbtn").hover(
  		function () {
  			$("#shop-mes").css('display','block')
    		
  		},function () {
    		$("#shop-mes").css('display','none')
 		 }
  	);
	$(".newsright-1 p").hover(
  		function () { 	
    		$(this).css({'color':'#c80f2f','text-decoration':'underline'});
  		},
  		function () {
    		$(this).css({'color':'#999','text-decoration':'none'});
 		 }
	);





})