$(window).scroll(function() {
    $(window).scrollTop() > 500 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
});
$("#rocket").click(function() {
    $("#rocket").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 500, function() {
        $("#rocket").removeClass("show launch");
    });
    return false;
});





//add sign for each pres
$('copy').addClass('btn-copy').each(function(index) {
    //为当前元素下的第一个代码段添加id
    $(this).parent(':first').nextAll('figure:first').find('pre').attr("id","pre"+(index+1));
    //添加映射关系
    $(this).attr({
        'data-clipboard-target':"#pre"+(index+1),
        'title':'点击复制'
    });
});
let clipboard = new Clipboard('.btn-copy');


