/*
var noticias;

$(document).ready(function(){
    $.getJSON( "json/news1.json", function( jsonObject ) {
        ponerNoticias(jsonObject);
        noticias = jsonObject;
    });
});

function ponerNoticias(json){
    var items = [];
    var str;
    var num;
    $.each(json, function(i, noticia){
        str = "";
        num = i+1;
        str += "<h2>" + noticia.cabecera + "</h2>";
        str += "<p>" + noticia.articulo + "</p>";
        str += "<img src ='http://lorempixel.com/400/200/sports/"+ num +"'>";
        items.push(str);
    });

    $( "<div/>", {
        "class": "news-list",
        html: items.join( "" )
    }).appendTo( "body" );
}
*/