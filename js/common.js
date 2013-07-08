//common js behavior

$(function(){
    initFlip();
    paintTable();
});

function initFlip(){
    $('.b-flip__item').click(function(){
        $(this).toggleClass('b-flip__item_active');
    });

}
function paintTable(){
$('.archive-journal, .archive').each(function(){
    $('.archive-item:odd',this).addClass('odd');
    $('.archive-item:even',this).addClass('even');
});
}

function InitIE(){
    if (($.browser.msie) && (/MSIE (5\.5|6).+Win/.test(navigator.userAgent))) {

    }
}

