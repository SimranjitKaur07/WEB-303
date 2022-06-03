// WEB303 Assignment 2
// Simranjit Kaur

$(document).ready(function(){
    $("#prospect").on("click", function(){        
        $("#data").empty();
        $("#data").hide().fadeIn(1000);
        $("#data").load("./prospect.html");
        $("#data").css("display:block");
    });
    $("#convert").on("click", function(){
        $("#data").empty();
        $("#data").hide().fadeIn(1000);
        $("#data").load("./convert.html");
        $("#data").css("display:block");

    });
    $("#retain").on("click", function(){
        $("#data").empty();
        $("#data").hide().fadeIn(1000);
        $("#data").load("./retain.html");
        $("#data").css("display:block");
    });
});