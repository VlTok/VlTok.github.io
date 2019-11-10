var slideWidth=255;
var x;
if($(window).width()>1000) x=4; else  x=2;

$(function(){
$(".slidewrapper").width($(".slidewrapper").children().size()*(4/x)*(slideWidth*x));
    $("#next_slide").click(function(){nextSlide();});
    $("#last_slide").click(function(){lastSlide();});
    $(".dot").click(function(){
        $(".dot.active").removeClass("active");
        $(this).addClass("active");
        var n=$(".dot").index(this);
        certainSlide(n);
    });
    if(x==2) $(".dot.kill").removeClass("kill");   
});

function nextSlide(){
    var currentSlide=parseInt($(".slidewrapper").data("current"));    
    currentSlide++;
    if(currentSlide>=$(".slidewrapper").children().size()*(2/x))
    {
        currentSlide=0;   
    }
    $(".dot.active").removeClass("active");
    $(".dot").eq(currentSlide).addClass("active");
    $(".slidewrapper").animate({left: -currentSlide*(slideWidth*x)},1000).data("current",currentSlide);
}

function lastSlide(){
    var currentSlide=parseInt($(".slidewrapper").data("current"));
    currentSlide--;
    if(currentSlide<0)
    {
        currentSlide=$(".slidewrapper").children().size()*(2/x)-1;   
    }
    $(".dot.active").removeClass("active");
    $(".dot").eq(currentSlide).addClass("active");
    $(".slidewrapper").animate({left: -currentSlide*(slideWidth*x)},1000).data("current",currentSlide);
}

function certainSlide(n){
    var currentSlide=n;
    $(".slidewrapper").animate({left: -currentSlide*(slideWidth*x)},1000).data("current",currentSlide);
}