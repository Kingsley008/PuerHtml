/*设置回调函数逻辑*/

var currentX, currentY,moving;
var cds = document.getElementById('cds')
var imgs = cds.getElementsByTagName('img');

function mouseDownHandler (event) {
    //鼠标按下得到当前鼠标的位置
    event = event || window.event;
    currentX = event.clientX;
    currentY = event.clientY;
    //设置正在移动
    console.info("设置正在移动");
    moving = true;
}

function mouseMoveHandler(event) {
    //判断是否在移动状态
    if (!moving){
        return;
    }
    //得到新的鼠标位置
    event = event || window.event;
    var newCurrentX = event.clientX;
    var newCurrentY = event.clientY;
    //得到当前元素的left 和 top值 ！！转换成number
    var top = parseInt(this.style.top) || 0;
    var left = parseInt(this.style.left) || 0;
    //计算偏移量 设置css属性
    this.style.top = (newCurrentX - currentX) + left + 'px';
    this.style.left = (newCurrentY - currentY) + top + 'px';
    console.log(this);
    //更新currentX Y
    currentY = newCurrentY;
    currentX = newCurrentX;

}

function mouseUpHandler() {
    console.log("用户松开鼠标");
    moving = false;
}

for (var i = 0; i < imgs.length; i++){
    Compatible.addEvent(imgs[i],'mousedown',mouseDownHandler);
    Compatible.addEvent(imgs[i],'mousemove',mouseMoveHandler);
    Compatible.addEvent(imgs[i],'mouseup',mouseUpHandler);
}
