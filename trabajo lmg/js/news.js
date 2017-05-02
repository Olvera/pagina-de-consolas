var archivosJSON = ["json/news1.json", "json/news2.json"];
var limite = 0;

/*
$(document).ready(function(){
    $.getJSON( "json/news.json", function( jsonObject ) {
        ponerNoticias(jsonObject);
        noticias = jsonObject;
    });
});
*/


$(window).scroll(function(){
    if($(window).scrollTop() + $(window).height() == $(document).height())
    {
        cargarNoticias();
    }
});

function cargarNoticias()
{
    if(limite < archivosJSON.length)
    {
        $.getJSON(archivosJSON[limite], function(jsonObject){
            var items = [];
            var str;
            $.each(jsonObject, function(i, noticia){
                str = "";
                str += "<h2>" + noticia.cabecera + "</h2>";
                str += "<p>" + noticia.articulo + "</p>";
                items.push(str);
            });

            $( "<div/>", {
                "class": "news-list",
                html: items.join( "" )
            }).appendTo( "#play4" );
        });
        limite++;
    }
}


/*
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