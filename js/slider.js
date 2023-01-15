 //slide
 $(function(){
        $('.prev').click(function () {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css('margin-left', -1960);
            $('.slide').stop().animate({ marginLeft: 0 }, 800)
        });

        $('.next').click(function () {
            $('.slide').stop().animate({ marginLeft: -1960 }, 800, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });
        });



        function slide() {
            $('.slide').stop().animate({ marginLeft: -1960 }, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });
        }
        setInterval(slide, 4000);
    });