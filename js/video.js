//추천 제품 영상
        $(function () {
            $.ajax({
                url: "./json/video.json",
                dataType: "json",
                success: function (data) {
                    if (data.length > 0) {

                        for (var i in data) {
                            $(".video").eq(i).append('<div><a href="#">' + "<img src='img/" + data[i].url + "'/>" + '</a></div>');
                            $(".video").eq(i).append('<h3><a href="#">' + data[i].title + "</a><h3>");
                            $(".video").eq(i).append('<p><a href="#">' + data[i].ex_text + "</a><p>");
                            $(".video").eq(i).append("<button>" + " + more " + "</button>");
                        }
                    }
                }
            });
        });