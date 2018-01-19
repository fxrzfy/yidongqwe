/**
 * Created by khj on 2018/1/8.
 */
$(".diancai ul li").click(function () {
    var n = $(this).index();
    //alert(n);
    $("#center").find(".center" + n).show().siblings().hide();
})


$(".footer ul li").click(function () {
    var s = $(this).index();
    $(".one #niubi").find(".niubi" + s).show().siblings().hide();
})

//$(".one ul li").click(function(){
//    var s=$(this).index();
//    alert(s);
//})