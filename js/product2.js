//타임 특가
        $(function () {
            $.ajax({
                url: "./json/time.json",
                dataType: "json",
                success: function (data) {
                    if (data.length > 0) {

                        for (var i in data) {
                            $(".time").eq(i).append('<div><a href="#">' + "<img src='img/" + data[i].url + "'/>" + '</a></div>');
                            $(".time").eq(i).append('<p><a href="#">' + data[i].title + "</a><p>");
                            $(".time").eq(i).append('<span><del>' + data[i].original_price + "</del></span>");
                            $(".time").eq(i).append('<span><del>' + data[i].discount_price + "</del></span>");
                            $(".time").eq(i).append("<span> " + data[i].last_discount + " </span>");

                        }
                    }
                }
            });
        });