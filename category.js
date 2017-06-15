var head= document.getElementsByTagName('head')[0];
var script= document.createElement('script');   
script.type= 'text/javascript';   
script.src= 'http://code.jquery.com/jquery-1.7.2.min.js';   
head.appendChild(script);

window.onload = function(){
  var body = $('<div id="body"></div>');
  $("body").children().each(function(){
    if(this.tagName != 'SCRIPT'){
        body.append(this);
    }
  });
  $("body").append('<div id="category" style="" ></div>');
  $("body").append(body);
  $("h2,h3,h4,h5,h6").each(function(i,item){
    var tag = $(item).get(0).localName;
    $(item).attr("id","wow"+i);
    $("#category").append('<a class="new'+tag+'" href="#wow'+i+'">'+$(this).text()+'</a></br>');
    $(".newh2").css("margin-left",0);
    $(".newh3").css("margin-left",20);
    $(".newh4").css("margin-left",40);
    $(".newh5").css("margin-left",60);
    $(".newh6").css("margin-left",80);
  });  
}
