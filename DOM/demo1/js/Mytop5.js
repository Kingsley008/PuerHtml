
    var top5 = $('top5');
    var cds = $('cds');
    var btn = $('btn');

    function $(id) {
       return document.getElementById(id);
    }

    function getTop5 () {
        var imgId = this;
        var count = 0;
        for(var i = 0; i < top5.childNodes.length; i++){
            if(top5.childNodes[i].nodeName.toLowerCase() == 'img'){
                //遍历所有子节点的元素名
                count ++;
            }
        }
        if (count >= 5) {
            alert("you already had five !");
            return;
        }
        var newSpan = document.createElement('span');
        newSpan.className = "rank";
        top5.appendChild(imgId);
        Compatible.setInnerText(newSpan,count +1);
        top5.insertBefore(newSpan,imgId);
        Compatible.delEvent(imgId,'click',getTop5);
    }

    function clear() {
        var top5 = document.getElementById("top5");
        var cds  = document.getElementById("cds");
        while (top5.hasChildNodes()){
            if (top5.firstChild.nodeName.toLowerCase() == 'img'){
                cds.appendChild(top5.firstChild);
            } else {
                top5.removeChild(top5.firstChild);
            }
        }
        addOnclickHandlers();
    }

    Compatible.addEvent(btn,'click',clear);

    function addOnclickHandlers() {
        var imgs = cds.getElementsByTagName('img');
        //为每一个img添加onClick 事件
        for(var i = 0; i < imgs.length; i++){
            Compatible.addEvent(imgs[i],'click',getTop5);
        }
    }

    window.onload = addOnclickHandlers();





