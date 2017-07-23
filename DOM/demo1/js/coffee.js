
function getBeverage(){
    //找出所选择的饮料
	var i =0;
	var BeverageTypes = document.forms[0].beverage;
	//遍历 
	for(i;i<BeverageTypes.length;i++){
		if(BeverageTypes[i].checked == true){
			return BeverageTypes[i].value;
		}
	}
}

function getSize(){
	//找出所选择的咖啡的份量
	var i =0;
	//找出web页面表单中的第一个表单名为size的input 元素 
	var groupSize = document.forms[0].size;
	//遍历这个名为size的input元素的数组
	for(i;i<groupSize.length;i++){
		//如果它的checked 属性为真 那么表明 用户选择了这个属性
		if(groupSize[i].checked == true ){
			//将其返回
			return groupSize[i].value;
		}
	}
}

//回调函数
function serveDrink(){
    //当咖啡机完成，送饮料
	if(request1.readyState==4){
		if(request1.status==200){
			var text = request1.responseText;
		//	var newString = myString.substring(startIndex,endIndex);
			var whichCoffeemaker = text.substring(0, 1);
			var whichName = text.substring(1,4);
		//让咖啡还原状态 
			if(whichCoffeemaker == "1"){
				var CoffeeMakerStatusDiv1 = document.getElementById("coffeemaker1-status");
				replaceText(CoffeeMakerStatusDiv1,"Idle");
				
			}else{
				var CoffeeMakerStatusDiv2 = document.getElementById("coffeemaker2-status");
				replaceText(CoffeeMakerStatusDiv2,"Idle");
			}
			alert(whichName+"your coffee is ready");
			//制作结束 换一个请求
			request1 = createReuqest();
		}else{
			alert("Error! Request status is "+ request.status);
		}
	}else if(request2.readyState==4){
		if(request2.status=200){
			var text = request2.responseText;
			//	var newString = myString.substring(startIndex,endIndex);
				var whichCoffeemaker = text.substring(0, 1);
				var whichName = text.substring(1,4);
			//让咖啡还原状态 
				if(whichCoffeemaker == "1"){
					var CoffeeMakerStatusDiv1 = document.getElementById("coffeemaker1-status");
					replaceText(CoffeeMakerStatusDiv1,"Idle");
					
				}else{
					var CoffeeMakerStatusDiv2 = document.getElementById("coffeemaker2-status");
					replaceText(CoffeeMakerStatusDiv2,"Idle");
				}
				alert(whichName+"your coffee is ready");
				//制作结束 换一个请求
				request2 = createReuqest();
		}else{
			alert("Error! Request status is "+ request2.status);
		}
	}
	
}

function orderCoffee(){
	//从web表单中接收订单
	
	//将用户选取的咖啡信息提取出来 
	var name = document.getElementById("name").value;
	var size = getSize();
	var beverage = getBeverage();
	
	//判断咖啡机1的状态 
	var coffeemakerStatusDiv1 = document.getElementById("coffeemaker1-status");
	//通过工具函数得到元素的文本内容
	var status = getText(coffeemakerStatusDiv1);
	//进行判断,如果空闲制作咖啡
	if(status == "Idle"){
		//改变机器文字的状态
		replaceText(coffeemakerStatusDiv1, "Brewing "+name+"'s"+" "+size+" "+beverage);
		//重置表单
		document.forms[0].reset();
		var url = "/AjaxDemo/wbd/getCoffeeStatus?name="+name
		                                       +"&size="+size
		                                       +"&beverage="+beverage
		                                       +"&coffeemaker=1";
		//利用封装好的方法发出请求
		sendRequest(request1,url);
	}else{
		//如果第一台机器没空 查看第二台机器的状态
		
		var coffeemakerStatusDiv2 = document.getElementById("coffeemaker2-status");
		status = getText(coffeemakerStatusDiv2);
		if(status == "Idle"){
			replaceText(coffeemakerStatusDiv2,"Brewing"+" "+name+"'s"+" "+size+" "+beverage);
			document.forms[0].reset();
			var url = "/AjaxDemo/wbd/getCoffeeStatus?name="+name
            +"&size="+size
            +"&beverage="+beverage
            +"&coffeemaker=2";
            //利用封装好的方法发出请求
            sendRequest(request2,url);
		}else{
			alert("Sorry! both coffee makers are busy."+"try again later");
		}
	}
		
}

function sendRequest(request,url){
	//送给咖啡机一个请求
	
	//当响应准备好的时候，调用回调函数
	request.onreadystatechange = serveDrink;
	request.open("get", url, true);
	request.send(null);
	
}

