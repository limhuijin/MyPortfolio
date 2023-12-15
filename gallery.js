$(document).ready(function(){
    for(let i = 1; i < 13; i++){
        let imgSrc = '/MyPortfolio/galleryImg' + i + '.jpg';
        let imgEle = $('<img>').attr('src', imgSrc);

        $('<div></div>').addClass('box').append(imgEle).appendTo('.contents');
    }

    $('.contents').masonry({
        columWidth:110  
    });
});