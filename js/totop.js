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






//动态append复制按钮，添加映射
$('figure').each(function(index, el) {
    $(this).attr("id","figure"+(index+1)).append(' <span class="copy">复制</span>')
        .find('.copy').attr({'data-clipboard-target':"#figure"+(index+1),'title':'点击复制'})
        .click(function() {$(this).addClass('on').text('完成');});
});
let clipboard = new Clipboard('.copy');
