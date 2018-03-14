$igrac = $(".igrac");
$lopta = $(".lopta");
$teren = $("body");


$teren.on('click', klik);
$teren.on('keypress', goal);
    
var vertical = 0;
var horizontal = 0;

function klik(event) {
    horizontal = event.clientX -50;
    vertical = event.clientY -50;
  
//   $igrac.offset({top:vertical, left:horizontal});

  
    $igrac.animate({
        "top": vertical,
        "left": horizontal
        });
        
    // igrac.style.top = vertical+"px";
    // igrac.style.left = horizontal+"px";
}

function goal(event){
    var h = 1820 - horizontal;
    $lopta.animate({
        "top": vertical,
        "left": h
    });
     var $goalImg = $("<img>");
     



    // lopta.style.left = h +"px";
    // lopta.style.top = vertical + "px";
    // lopta.style.transition = "left 5s";
}