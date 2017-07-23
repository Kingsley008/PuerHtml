
function addTop5(){
	//将一张CD加入TOP5列表中	
	
	//this 就是用户点击的那个<img>元素
		var imgElement = this;
	//得到top区域
		var top5Element = document.getElementById("top5");
		
	//得到img数量
		var numCDs = 0;
	
		for(var i =0 ; i<top5Element.childNodes.length;i++){
			if(top5Element.childNodes[i].nodeName.toLowerCase()=="img"){				
				numCDs = numCDs +1;
			}
		}
		if(numCDs >= 5){
			alert("you already has 5 CDs!");
			return;
		}
	//将用户点击的图片，放到Top5的div区
		top5Element.appendChild(imgElement);
	//清除该图片的点击事件	
		imgElement.onclick = null;
	//生成显示排名的元素
		var newSpanElement = document.createElement("span");
	//设置他的class属性	
		newSpanElement.className="rank";
	//设置要显示的数字 
		var newTextElement = document.createTextNode(numCDs+1);
		newSpanElement.appendChild(newTextElement);
	//放到div子元素的最后,span 出现在CD的img之前 在top5的div之后
		top5Element.insertBefore(newSpanElement, imgElement);		
}


function startOver(){
	//清除排序，重新开始
	var top5Element = document.getElementById("top5");
	var cdsElement = document.getElementById("cds");
	//如果top5中有元素，开始做判断
	while(top5Element.hasChildNodes()){
		//得到这个子元素
		var firstChild = top5Element.firstChild;
		//判断其是否为img
		if(firstChild.nodeName.toLowerCase()=="img"){
			//如果是，将他放回cds
			cdsElement.appendChild(firstChild);
		}else{
			//如果不是，那么为<span>直接删除
			top5Element.removeChild(firstChild);
		}
	}
	//恢复点击事件的调用
	addOnclickHandlers();	
}

function addOnclickHandlers(){
	//动态实现onclick事件 ，在body中用onload实现这个函数的加载
	
	//得到id为cds的div元素
	var cdsDiv = document.getElementById("cds");
	//再从这个元素中得到tag为img的元素集合
	var cdImages = cdsDiv.getElementsByTagName("img");
	//遍历元素，添加事件与addTop5函数的绑定
	for(var i=0; i<cdImages.length;i++){
		//img被点击后都会执行这个函数
		cdImages[i].onclick = addTop5;
		//cdImages[i].addEventListener('click',addTop5); 这里的上下文环境this = cdImages[i] 所点击的图片元素
	}
}