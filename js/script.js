// WEB303 Assignment 2
// Simranjit Kaur

$(document).ready(function(){
    $("#prospect").on("click", function(){        
        $("#content-wrapper").empty();
        $("#content-wrapper").hide();
        $("#content-wrapper").load("./prospect.html");
        $("#content-wrapper").css("display:block");
    });
    $("#convert").on("click", function(){
        $("#content-wrapper").empty();
        $("#content-wrapper").hide();
        $("#content-wrapper").load("./convert.html");
        $("#content-wrapper").css("display:block");

    });
    $("#retain").on("click", function(){
        $("#content-wrapper").empty();
        $("#content-wrapper").hide();
        $("#content-wrapper").load("./retain.html");
        $("#content-wrapper").css("display:block");
    });
});