//실시간 베스트
        $(function () {
            $.ajax({
                url: "./json/ssueim.json",
                dataType: "json",
                success: function (data) {
                    if (data.length > 0) {

                        for (var i in data) {
                            $(".best").eq(i).append('<div><a href="#">' + "<img src='img/" + data[i].url + "'/>" + '</a></div>');
                            $(".best").eq(i).append('<p><a href="#">' + data[i].title + "</a><p>");
                            $(".best").eq(i).append('<span><del>' + data[i].original_price + "</del></span>");
                            $(".best").eq(i).append("<span> " + data[i].discount_price + " </span><br>");

                            //review random count
                            var count = Math.floor(Math.random() * 100);
                            $(".best").eq(i).append("<span>" + " 리뷰 " + "</span>" + "<button>" + count + "</button>");
                        }
                    }
                }
            });
        });