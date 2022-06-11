// WEB303 Assignment 3
// Simranjit Kaur
// student id: 0781503

let getJsonObject = $.getJSON("team.json", function (data) {
    $.each(data.members, function (key, val) {
    console.log("data key: ", key, " and data value: ", val);

    $('#team').append(`<h2>${val.name}</h2><h5>${val.position}</h5><p>${val.bio}</p>`);
    });
});

console.log("The getjson object: ", getJsonObject);

$.get("team.json", function (data) {
    console.log("The data returned is: ", data);
    $("#team").json(data);
}, "html");

$.ajax('team.json', 
{
    dataType: 'json',
    timeout: 500,    
    success: function (data,status,xhr) {   
        $('p').append(data.name + ' ' + data.position + ' ' + data.bio);
    },
    error: function (jqXhr, textStatus, errorMessage) {  
        $('p').append('Loading... ' + errorMessage);
    }
});


// Solution provided by Sir during Lab Time..........................................

$(function () {
    getJSONfunction();
    AJAXfunction();
});

function getJSONfunction() {
    $.getJSON("team.json", function (data) {
        processdata();
    });
}

function AJAXfunction() {
    $.ajax({
        url: "team.json",
        method: "GET",

        beforeSend: function () {
            $('div#team').text("Loading...");
        }
    }).done(function (data) {
        setTimeout(() => processdata(data), 3000);
    }).fail(function () {
        $('div#team').text("Could not get the Data");
    });
}

function processsdata(data) {
    $.each(data.members, function (key, val) {
        console.log("data key: ", key, " and data value: ", val);

        $('div#team').append("<h2> + val.name + </h2>");
        $('div#team').append("<h5> + val.position + </h5>");
        $('div#team').append("<p> + val.bio + </p>");
    });
}