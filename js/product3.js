//인기 키워드
        $(function () {
            $.ajax({
                url: "./json/issue.json",
                dataType: "json",
                success: function (data) {
                    if (data.length > 0) {

                        for (var i in data) {
                            $(".issue").eq(i).append('<div><a href="#">' + "<img src='img/" + data[i].url + "'/>" + '</a></div>');
                            $(".issue").eq(i).append('<p><a href="#">' + data[i].title + "</a><p>");
                            $(".issue").eq(i).append('<span><del>' + data[i].original_price + "</del></span>");
                            $(".issue").eq(i).append("<span> " + data[i].discount_price + " </span><br>");

                            //review random count
                            var count = Math.floor(Math.random() * 100);
                            $(".issue").eq(i).append("<span>" + " 리뷰 " + "</span>" + "<button>" + count + "</button>");
                        }
                    }
                }
            });
        });