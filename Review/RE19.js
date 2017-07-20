/*写一个级联调用的对象计算器*/

function Calc(start) {
    this.add = function (i) {
        start = start + i;
        return this;
    }
    this.multiply = function (i) {
        start = start * i;
        return this;
    }
    this.call = function (callfuc) {
        callfuc(start); //给出了参数 进行了调用
        return this;
    }
}
new Calc(10).add(5).multiply(4).call(function (start) {
    console.info(start);
});

/*还原代码理解 回调函数的上下文环境*/
function Positon(x,y) {
    this.x = x;
    this.y = y;
}
Positon.prototype.move = function (mx,my) {
    this.x = this.x + mx;
    this.y = this.y +my;
    console.info(myType(this) +"x:"+this.x +" y:" + this.y);
}
var p1 = new Positon(0,0);
p1.move(1,1);
function Circle(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
}
var p2 = new Circle(2,2,2);
p1.move.apply(p2,[1,1]);
var usebind = p1.move.bind(p2,1,1); //bind 函数会进行参数的绑定 并不会直接调用函数
usebind();//再次调用生效

/*内部函数调用内部函数时 闭包引起的上下文环境变化*/
var a = function () {
    var b = function () {
        console.info(this);//window
    }

    var c = function () {
        console.info(this);//obj
        b();
    }
    return {
        info:"any",
        do:c
    }
}
var test = a();
test.do();

/*(1).constructor  // "function Number() { [native code] }"
试自己写一个正则表达式 截取 Number 这个字符串
*/

reg = /^function\s(\w+)[^\(]/

var arr ="function String() { [native code] }".match(/^function\s([^\(]+)/);
console.info(arr[1]);

function myType(obj) {
    return (obj == undefined || obj == null)? obj:(obj.constructor && obj.constructor.toString().match(/^function\s([^\(]+)/)[1]);
}
/*完成getConstructorName完整的封装 考虑 0 "" NaN这些boolean情况*/


/**
 * 闭包使用举例1
 * 将字符串中的一些特定字符按顺序用数组中的元素替换，例如：
 * var arr = ['c','f','h','o'];
 * var str = 'ab4de8g4ijklmn7';
 * 替换后 str == 'abcdefghijklmno';
 * replace的用法请参考https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 **/


var arr = ['c','f','h','o'];
var str = 'ab4de8g4ijklmn7';

var stead = (function () {
    var count = 0;
    return function () {

        return arr[count++]
    }
})();
var nStr = str.replace(/\d/g,stead);
console.info(nStr);

/* 思考题 */
function add1(i){
  console.log("函数声明："+(i+1));
}
add1(1);//101

var add1 = function(i){
  console.log("函数表达式："+(i+10));
}
add1(1);//11

function add1(i) {
    console.log("函数声明："+(i+100));
}
add1(1);//11

/*性能优化*/
var sum1 = (function(){
    var add = function(i, j) {
        return i+j;
    }
    return function(i, j) {
        return add(i, j);
    }
})()

var startT1 = new Date();
for (var i = 0; i <1000000; i++){
    sum1(1,1);
}
var finishT1 = new Date();
console.info(finishT1-startT1);


var sum2 = function (i, j) {
    var add = function (i, j) {
        return i +j ;
    };
    return add(i,j);
}

var startT2 = new Date();
for (var i = 0; i <1000000; i++){
    sum2(1,1);
}
var finishT2 = new Date();
console.info(finishT2-startT2);
/*this 在对象中的指向*/

window.value = 100;
obj = {
    value: 1,
    func : function () {
        this.value++;
    }
}
obj.func(); // value:2
console.info(obj.value);
var f2 = obj.func;
f2(); // value: 2
console.info(window.value);

/*this 在对象函数中的指向*/

obj2 = {
    value: 10,
    func: function () {
        var help = function () {
            return this.value ++;
        }
        return help.call(obj2);
    }
}

obj2.func();
console.info(obj2.value);