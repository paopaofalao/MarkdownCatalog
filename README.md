# MarkdownCatalog
## 使用方式
有道云笔记支持了Markdown文件导出为HTML格式，将下面的css和js粘贴到你导出的HTML文件的最下面。将会自动生成目录，祝你玩得愉快。

```html
<style>
  #body {float: left;width: 65%;position: absolute;left:30%;}
#category {float: left;width: 25%;left:4%;position: fixed;height: 98%;overflow-y: auto;}
#category a{text-decoration: none;vertical-align: baseline;color: #3269a0;font-family: "Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei",STHeiti,SimSun,"Segoe UI",AppleSDGothicNeo-Medium,'Malgun Gothic',Arial,freesans,sans-serif;font-size: 15px;line-height: 1.6;-webkit-font-smoothing: antialiased;}
.markdown-body{max-width: none;}
</style>
<script>
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
</script>
```

感谢https://rawgit.com/
