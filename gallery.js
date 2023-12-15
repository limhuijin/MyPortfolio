$(document).ready(function(){
    for(let i = 0; i < 100; i++){
        let imgSrc = 'galleryImg' + i + '.jpg';
        let imgEle = $('<img>').attr('src', imgSrc);

        $('<div></div>').addClass('box').append(imgEle).appendTo('.contents');
    }

    $('.contents').masonry({
        columWidth:110  
    });
});