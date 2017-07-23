function getNewTotals() {
  var url = "/AjaxDemo/wbd/getCost";
  url = url + "?dummy=" + new Date().getTime();
  request.open("POST", url, true);
  request.onreadystatechange = updatePage;
  request.send(null);
}

function updatePage() {
  if (request.readyState == 4) {
	  if(request.status == 200){
	  //从XML响应中取得更新的总额
	  var xmlDoc = request.responseXML;
	  //返回一个"boards-sold"元素的数组，得到第一个元素【0】
	  var xmlBoards = xmlDoc.getElementsByTagName("boards-sold")[0];
	  //再得到其中子元素的值
	  var totalBoards = xmlBoards.firstChild.nodeValue;
	  
	  var xmlBoots = xmlDoc.getElementsByTagName("boots-sold")[0];
	  var totalBoots = xmlBoots.firstChild.nodeValue;
	  
	  var xmlBindings = xmlDoc.getElementsByTagName("bindings-sold")[0];
	  var totalBindings = xmlBindings.firstChild.nodeValue;
	  
	  //用新的总额更新页面
	  var boardsSoldE1 = document.getElementById("boards-sold");
	  var bootsSoldE1 = document.getElementById("boots-sold");
	  var bindingsSoldE1 = document.getElementById("bindings-sold");
	  var cashE1 = document.getElementById("cash");
	  replaceText(boardsSoldE1, totalBoards);
	  replaceText(bootsSoldE1, totalBoots);
	  replaceText(bindingsSoldE1,totalBindings);
	  
	  //算出Katie从滑雪板销售中赚了多少钱
	  var boardsPriceE1 = document.getElementById("boards-price");
	  var boardsPrice = getText(boardsPriceE1);
	  var boardsCostE1 = document.getElementById("boards-cost");
	  var boardsCost = getText(boardsCostE1);
	  var cashPerBoard = boardsPrice - boardsCost;
	  var cash = cashPerBoard * totalBoards;
	  
	  //计算雪鞋赚了多少钱
	  var bootsPriceE1 = document.getElementById("boots-price");
	  var bootsPrice = getText(bootsPriceE1);
	  var bootsCostE1 = document.getElementById("boots-cost");
	  var bootsCost = getText(bootsCostE1);
	  var cashPerBoot = bootsPrice - bootsCost;
	  cash = cash +(cashPerBoot*totalBoots);
	  
	  //算出固定装置赚了多少钱
	  var bindingsPriceE1 = document.getElementById("bindings-price");
	  var bindingsPrice = getText(bindingsPriceE1);
	  var bindingsCostE1 = document.getElementById("bindings-cost");
	  var bindingsCost = getText(bindingsCostE1);
	  var bindingPerCost = bindingsPrice - bindingsCost;
	  cash = cash +(bindingPerCost * totalBindings);
	  //更新表单上的资金流向 
	  cash = Math.round(cash*100)/100;
	  replaceText(cashE1, cash);
	  }else{
		  alert("Error! Request status is " + request.status);
   }
  }
}