$(document).ready(function(){
    for(let i = 1; i <= 12; i++){
        let imgSrc = '/MyPortfolio/photo/galleryImg' + i + '.jpg';
        let imgEle = $('<img>').attr('src', imgSrc).css({
            width: '200px',
            height: '200px'
        });
        
        $('<div></div>').addClass('box').append(imgEle).appendTo('.contents');
    }

    $('.contents').masonry({
        columWidth:110  
    });
});