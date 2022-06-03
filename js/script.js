// WEB303 Assignment 2
// Simranjit Kaur

$(document).ready(function(){
    $("#prospect").on("click", function(){        
        $("#content").empty();
        $("#content").hide().fadeIn(1000);
        $("#content").load("./prospect.html");
        $("#content").css("display:block");
    });
    $("#convert").on("click", function(){
        $("#content").empty();
        $("#content").hide().fadeIn(1000);
        $("#content").load("./convert.html");
        $("#content").css("display:block");

    });
    $("#retain").on("click", function(){
        $("#content").empty();
        $("#content").hide().fadeIn(1000);
        $("#content").load("./retain.html");
        $("#content").css("display:block");
    });
});