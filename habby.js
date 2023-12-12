$(document).ready(function(){
    let width = $('[data-role="slider"]').attr('data-width');
    let height = $('[data-role="slider"]').attr('data-height');
    let count = $('[data-role="slider"] div.item').length;

    $('[data-role="slider"]').css({
        position: 'relative',
        overflow: 'hidden',
        width: width,
        height: height
    }).find('.container').css({
        position: 'absolute',
        width: count * width,
        overflow: 'hidden',
    }).find('.item').css({
        width: width,
        height: height,
        float: 'left'
    });

    let currentPage = 0;
    let changePage = function() {
        $('[data-role="slider"] > .container').animate({
            left: -currentPage * width
        }, 500);
    };

    $('#left-button').click(function(){
        if(currentPage > 0){
            currentPage -= 1; 
            changePage();
        }
    });

    $('#right-button').click(function(){
        if(currentPage < count - 1){
            currentPage += 1;
            changePage();
        }
    });
});