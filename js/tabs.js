/*
 Student_Name: Simranjit Kaur
 Student_Id: W0781503
*/
$(document).ready(function() {    

    $('#tabs li a:not(:first)').addClass('inactive');
    $('.container').hide();
    $('.container:first').show();
    $('#tabs li a').click(function(){
        var t = $(this).attr('href');
        $('#tabs li a').addClass('inactive');        
        $(this).removeClass('inactive');
        $('.container').hide();
        $(t).fadeIn('slow');
        return false;
    })

    if($(this).hasClass('inactive')){ //this is the start of our condition 
        $('#tabs li a').addClass('inactive');         
        $(this).removeClass('inactive');
        $('.container').hide();
        $(t).fadeIn('slow');   
    }

});