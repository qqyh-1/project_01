var tb = document.querySelector('.tb');
        var as = tb.querySelectorAll("a");
        var boxs = document.querySelectorAll(".box");
        for (var i = 0; i < as.length; i++) {
            as[i].setAttribute("index", i);
            as[i].onclick = function () {
                for (var i = 0; i < as.length; i++) {
                    as[i].className = '';
                }
                this.className = 'active';
                var index = this.getAttribute("index");
                for (var i = 0; i < boxs.length; i++) {
                    boxs[i].style.display = 'none';
                }
                boxs[index].style.display = 'block';
            }
        }