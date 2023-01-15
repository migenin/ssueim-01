//멀티 슬라이더
$(function(){
        $('.prev_btn').click(function () {
            $('.slides li:last').prependTo('.slides');
            $('.slides').css('margin-left', -740);
            $('.slides').stop().animate({ marginLeft: 0 }, 800)
        });

        $('.next_btn').click(function () {
            $('.slides').stop().animate({ marginLeft: -840 }, 800, function () {
                $('.slides li:first').appendTo('.slides');
                $('.slides').css({ marginLeft: 0 });
            });
        });
   

        function slides() {
            $('.slides').stop().animate({ marginLeft: -840 }, function () {
                $('.slides li:first').appendTo('.slides');
                $('.slides').css({ marginLeft: 0 });
            });
        }
        setInterval(slides, 4000);
    });
    