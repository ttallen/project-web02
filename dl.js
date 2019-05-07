$(function(){
	$("#panel dd").hide();
	$("#panel dt").click(function(){
         $("+dd",this).slideToggle(1000);
	});

});