function replaceText(el, text) {
  if (el != null) {
	//摆脱任何现有的子元素
    clearText(el);
    //创造一个新的节点
    var newNode = document.createTextNode(text);
    //然后将新的元素附加为该元素的子节点
    el.appendChild(newNode);
  }
}

function clearText(el) {
	//将传进来的元素清除所有的子节点
  if (el != null) {
    if (el.childNodes) {
    	//遍历每一个子节点
      for (var i = 0; i < el.childNodes.length; i++) {
    	  //得到后依次移除
        var childNode = el.childNodes[i];
        el.removeChild(childNode);
      }
    }
  }
}

function getText(el) {
//将元素的文本返回
  var text = "";
  if (el != null) {
    if (el.childNodes) {
      for (var i = 0; i < el.childNodes.length; i++) {
        var childNode = el.childNodes[i];
        //遍历每一个子元素，如果它的值不为空的话---》说明是文本
        if (childNode.nodeValue != null) {
        	//将文本附加到text上
          text = text + childNode.nodeValue;
        }
      }
    }
  }
  //返回这个文本
  return text;
}