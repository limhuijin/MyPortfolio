$(document).ready(function(){
    $.getScript('https://cdn.jsdelivr.net/jquery.masonry/4.2.2/masonry.pkgd.min.js', function(){
        for(let i = 0; i < 100; i++){
            $('<div></div>').addClass('box').css({
                width: 100,
                height: Math.floor(Math.random() * 100) + 50,
            }).appendTo('#contents');
        }
        
        $('#contents').masonry({
            columWidth:110  
        });
        
    });
});