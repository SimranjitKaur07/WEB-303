/*
	WEB 303 Assignment 1 - jQuery
	{Simranjit Kaur
	0781503
    27/05/2022}
*/
$(document).ready(function(){
    $("#price").change(function(){
        var price = $('#price').val();
        var tax1 = (price * 0.13).toFixed(2);
         console.log("the tax value is :", +tax1);
         var amount = $('#tax').text("$"+tax1);
         console.log("the tax value is :", +amount);
      });
       
});
 
  
  