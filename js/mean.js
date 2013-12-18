/**
 * @author kaingeo
 * 
 */

$(function(){
	
	 function init (){
		$("body").append('<div id="container"></div>');
    	$("#container").append('<div id="structure"></div>'); 
    	$("#container").append('<div id="main"></div>');
    	$("#container").append('<div id="visual"></div>');
     };
	
    
   	$("p").click(function(){
   		$(this).fadeOut();
   		alert("You clicked");
	});
	
	
	
	
});

