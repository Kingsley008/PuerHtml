/*
函数random用于生成0-999之间的随机整数。
语法如下：
    var number = random();
    number是0-999之间的整数。*/
var number = Math.floor(Math.random()*1000);

/*函数parseQuery用于解析url查询参数。
语法如下：
	var obj = parseQuery(query)
	query是被解析的查询参数，函数返回解析后的对象。
使用范例如下：
	var jerry = parseQuery("name=jerry&age=1");
	jerry; 	返回值：{name: " jerry ", age: "1"}
	var tom = parseQuery("name= tom &age=12&gender&");
	tom; 	返回值：{name: "tom", age: "12", gender: ""}
请写出函数parseQuery的实现代码。*/

function parseQuery(query) {
    var json =""
    var reg = /(\w)+(=)?(\w)*[^&]/g
    var arr = query.match(reg);


    arr.forEach(function (value,index,arr) {
        var v = value;
        /*最后一个不加逗号*/
        if (index == arr.length -1){

            if(v.indexOf("=") == -1){
                json = json +"\""+ v +"\""+":"+"\""+""+"\""+"\n"
            }else{
                var arr2 =  v.split("=");
                if(arr[1] === undefined){
                    arr[1] = "";
                }
                json = json +"\""+  arr2[0] +"\""+":"+"\""+arr2[1]+"\""+"\n"
            }
        }else{
            if(v.indexOf("=") == -1){
                json = json +"\""+ v +"\""+":"+"\""+""+"\""+",\n"
            }else{
                var arr2 =  v.split("=");
                if(arr[1] === undefined){
                    arr[1] = "";
                }
                json = json +"\""+  arr2[0] +"\""+":"+"\""+arr2[1]+"\""+",\n"
            }
        }
    });
    var newJson = "{\n" + json + "}"
    return  JSON.parse(newJson);
}
var va = parseQuery("name=jerry&age=1");
console.info(va); //name:jerry,age:1,

/*
函数multiply用于计算多个数字的乘积。
语法如下：
	var product = multiply (number0, number1[, number2, ….])；
使用范例如下：
	multiply(2, 3);	 返回值： 6
	multiply(-1, 3, 4);	返回值： -12
	multiply(1, 2, 3, 4, 5);    返回值： 120
请写出函数multiply的实现代码。*/

function multiply() {
    var result = 1
    for(var i = 0; i < arguments.length; i++){
       result = result * arguments[i];
    }
    return result
}
var re = multiply(1,2,3);
/*构造函数Person用于构造人，语法如下：
function Person(name, age){
	// 函数体
}
使用范例如下：
	var jerry = new Person("Jerry", 2);
	jerry.introduce();		返回值： "I am Jerry, I am 2 years old! "
var tom = new Person("Tom", 12);
	tom.introduce();		返回值： "I am Tom, I am 12 years old! "
请写出构造函数Person的实现代码。
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.introduce = function () {
    return "I am " + this.name + " I am " + this.age +" years old!"
}

var tom = new Person("Tom", 12);
var str =tom.introduce();

/*函数escapeHTML用于转义html字符串中的特殊字符(<>"&)。
语法如下：
	var escapedStr = escapeHTML(htmlStr);
使用范例如下：
	escapeHTML('<div>Tom&Jerry</div> '); 		
	返回值：
		'&lt;div&gt;Tom&amp;Jerry&lt;/div&gt; '
	escapeHTML('<input type="text" name="mobile"> '); 		
	返回值：
		'&lt;inputtype=&quot;text&quot; name=&quot;mobile&quot;&gt; '
请写出函数escapeHTML的实现代码。
*/

function escpae(text) {
    reg  = /[<"&>]/g
    var newText = text.replace(reg,function (rep) {
        switch (rep){
            case '<':
                return '&lt';
            case '>':
                return'&gt';
            case '&':
                return '&amp';
            case '\"':
                return '&quot';
        }
    })
    return newText;

}
var html = escpae('<input type=\"text\" name=\"mobile\"> ');

arr = [1,2,3];
arr.shift();
console.info(arr);


/*函数myType用于根据输入参数返回相应的类型信息。
语法如下：
	var str = myType (param);
使用范例如下：
	myType (1);		返回值： "number"
	myType (false);		返回值： "boolean"
	myType ({});		返回值： "object"
	myType ([]);		返回值：" Array"
	myType (function(){});	返回值："function"
	myType (new Date());	返回值： "Date"
请写出函数myType的实现代码。*/

function myType(obj){
    return (obj===undefined||obj===null)?obj:(obj.constructor&&obj.constructor.toString().match(/function\s*([^(]*)/)[1]);
}





/*函数search用于在一个已排序的数字数组中查找指定数字。
语法如下：
	var index = search(arr, dst);
使用范例如下：
	var arr = [1, 2, 4, 6, 7, 9, 19,20, 30, 40, 45, 47];
	search(arr, 45);		返回值： 10
请写出函数search的实现代码 请给出函数，要求不能使用Array的原型方法，且算法时间复杂度低于O(n)。*/

var arr = [1, 2, 4, 6, 7, 9, 19,20, 30, 40, 45, 47];
function search(arr,value) {

    for (var i = 0; i < arr.length; i++){

         if (arr[i] == value){
          return i;
         }
    }
}

search(arr,45);


/*function search2(arr, value) {
         var length = arr.length;
         re(Math.round((length-1)/2));
     function re(positon) {


         if (arr[positon] > value){
                   return re(Math.round(length *(1/2)));
         }

         if (arr[positon] < value){
                   return re(Math.round(length*(3/4)));
         }

         if (arr[positon] == value){
             return positon;
         }
}

}
search2(arr,4);*/


/*
函数formatDate用于将日期对象转换成指定格式的字符串，语法如下：
	var str = formatDate(date, pattern);
	其中pattern的全格式为"yyyy-MM-dd HH:mm:ss"
使用范例如下：
	var date = new Date(2001, 8, 11, 8, 26, 8);
	formatDate(date, "yyyy");		返回值： "2001"
	formatDate(date, "yyyy-MM-dd");	    返回值： "2001-09-11"
	formatDate(date, "yyyy-MM-dd HH");		返回值： "2001-09-11 08"
	formatDate(date, "yyyy-MM-dd HH:mm:ss");    返回值： "2001-09-11 08:26:08"
请写出函数formatDate的实现代码。*/

/*编码实现下面删除数组中重复元素的功能
[2,4,2,3,4].deleteRepeat()		返回：[2,4,3]*/


Array.prototype.deleRepeat =function () {

    for (var i = 0; i < this.length ; i++){
        for (var j = i+1; j < this.length; j++){
            if(this[i] == this[j]){
                this.splice(j,1);
            }
        }
    }
}

Array.prototype.findIndex = function(str){
    for(var i = 0; i <this.length;i++){

        if (this[i] == str){
            return i;
        }
    }
}

Array.prototype.deleByStr = function (str) {
    var index = this.findIndex(str);
    this.splice(index,1);
}

arr = [2,4,2,3,4];
arr.deleByStr(3);
console.info(arr);

