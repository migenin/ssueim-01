//nav
        $(function () {
            $('.menu > li').mouseover(function () {
                $(this).children('.sub_menu').stop().slideDown("slow");
            }).mouseout(function () {
                $('.sub_menu').stop().slideUp();
            });
        });